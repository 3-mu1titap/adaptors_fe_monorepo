'use client';

import { OpenVidu } from 'openvidu-browser';
import React, { useState, useEffect } from 'react';
import UserVideoComponent from './UserVideoComponent';
import getToken from '@repo/admin/actions/openvidu/openviduAction';
import OpenMentoring from './openMentoring/OpenMentoring';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@repo/ui/components/ui/dialog';
import MentoringFeedbackForm from '@repo/admin/components/form/MentoringFeedbackForm';
import OvTracks from './OvTracks';
import Participants from './participants/Participants';
import Chatting from '../../chatting/Chatting';
import { participantType } from '@repo/admin/components/types/main/meeting/meetingTypes';
import { useUserInfoStore } from '@repo/admin/store/messagesStore';
import { getChatProfile } from '@repo/admin/actions/chatting/chattingAction';
import { getParticipants } from '@repo/admin/actions/meeting/meetingAction';

interface MeetingProps {
  mentoringSessionList: any[]; // mentoringSessionList의 타입을 정의합니다. 필요한 경우 더 구체적으로 변경하세요.
}

const Meeting: React.FC<MeetingProps> = ({ mentoringSessionList }) => {
  const [sessionUuid, setSessionUuid] = useState<string>('');
  const [myUserName, setMyUserName] = useState<string>(
    'Participant' + Math.floor(Math.random() * 100)
  );
  const [session, setSession] = useState<any>(undefined);
  const [mainStreamManager, setMainStreamManager] = useState<any>(undefined);
  const [publisher, setPublisher] = useState<any>(undefined);
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [participants, setParticipants] = useState<participantType[]>([]);
  const { userInfo, addUserInfo } = useUserInfoStore();
  const [currentVideoDevice, setCurrentVideoDevice] = useState<any>(undefined);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const fetchParticipants = async (userUuid: string) => {
    const existingProfile = userInfo.find((user) => user.userUuid === userUuid);
    if (!existingProfile) {
      const participantsData = await getChatProfile({ userUuid: userUuid });
      const newUserInfo = {
        userUuid: userUuid,
        nickname: participantsData.nickName,
        profileImageUrl: participantsData.profileImageUrl,
      };
      addUserInfo(newUserInfo);
      setParticipants((prev) => [...prev, newUserInfo]);
    }
  };

  useEffect(() => {
    const fetchParticipantsUuid = async () => {
      const participantsUuidData = await getParticipants(sessionUuid);
      const fetchPromises = participantsUuidData.map((userUuid: string) =>
        fetchParticipants(userUuid)
      );

      await Promise.all(fetchPromises);
    };
    if (sessionUuid) {
      fetchParticipantsUuid();
    }
  }, [session, sessionUuid]);

  useEffect(() => {
    const handleBeforeUnload = () => leaveSession();
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [session]);

  const handleMainVideoStream = (stream: any) => {
    if (mainStreamManager !== stream) {
      setMainStreamManager(stream);
    }
  };

  const deleteSubscriber = (streamManager: any) => {
    setSubscribers((prevSubscribers) =>
      prevSubscribers.filter((sub) => sub !== streamManager)
    );
  };

  const joinSession = async (sessionUuid: string) => {
    const OV = new OpenVidu();
    const newSession = OV.initSession();
    setSessionUuid(sessionUuid);
    setSession(newSession);

    newSession.on('streamCreated', (event) => {
      const subscriber = newSession.subscribe(event.stream, undefined);
      setSubscribers((prevSubscribers) => [...prevSubscribers, subscriber]);
    });

    newSession.on('streamDestroyed', (event) => {
      deleteSubscriber(event.stream.streamManager);
    });

    newSession.on('exception', (exception) => {
      console.warn(exception);
    });

    const token = await getToken('mySessionId');
    newSession
      .connect(token, {
        clientData: myUserName,
      })
      .then(async () => {
        const publisher = await OV.initPublisherAsync(undefined, {
          audioSource: undefined,
          videoSource: undefined,
          publishAudio: true,
          publishVideo: true,
          resolution: '640x480',
          frameRate: 30,
          insertMode: 'APPEND',
          mirror: false,
        });

        newSession.publish(publisher);
        const devices = await OV.getDevices();
        const videoDevices = devices.filter(
          (device) => device.kind === 'videoinput'
        );
        const currentVideoDeviceId = publisher.stream
          .getMediaStream()
          .getVideoTracks()[0]
          .getSettings().deviceId;
        const currentVideoDevice = videoDevices.find(
          (device) => device.deviceId === currentVideoDeviceId
        );

        setCurrentVideoDevice(currentVideoDevice);
        setMainStreamManager(publisher);
        setPublisher(publisher);
      })
      .catch((error) => {
        console.log(
          'There was an error connecting to the session:',
          error.code,
          error.message
        );
      });
  };

  const leaveSession = () => {
    if (session) {
      session.disconnect();
    }

    setSession(undefined);
    setSubscribers([]);
    setSessionUuid('');
    setMyUserName('Participant' + Math.floor(Math.random() * 100));
    setMainStreamManager(undefined);
    setPublisher(undefined);
    setCurrentVideoDevice(undefined);
  };

  return (
    <>
      {session === undefined ? (
        <OpenMentoring
          mentoringSessionList={mentoringSessionList}
          joinSession={joinSession}
        />
      ) : null}

      {session !== undefined ? (
        <>
          <div className="grid grid-cols-7 h-[79vh]">
            <div className="col-span-5 bg-[#FAFAFE]">
              <OvTracks
                sessionUuid={sessionUuid}
                leaveSession={leaveSession}
                mainStreamManager={mainStreamManager}
                publisher={publisher}
                handleMainVideoStream={handleMainVideoStream}
                subscribers={subscribers}
              />
            </div>
            <div className="flex flex-col col-span-2 h-full">
              <div className="h-[25vh]">
                {/* <Participants
                  participants={participants}
                  toggleParticipantMicrophone={toggleParticipantMicrophone}
                  toggleParticipantCamera={toggleParticipantCamera}
                /> */}
              </div>
              <div className="h-[54vh]">
                <Chatting
                  participants={participants}
                  mentoringSessionUuid={sessionUuid}
                />
              </div>
            </div>
          </div>
        </>
      ) : null}
      <Dialog open={showFeedbackModal} onOpenChange={setShowFeedbackModal}>
        <DialogHeader className="hidden">
          <DialogTitle>멘토링 피드백</DialogTitle>
          <DialogDescription>멘티의 수준 평가</DialogDescription>
        </DialogHeader>
        <DialogContent onInteractOutside={(e) => e.preventDefault()}>
          <MentoringFeedbackForm sessionUuid={sessionUuid} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Meeting;
