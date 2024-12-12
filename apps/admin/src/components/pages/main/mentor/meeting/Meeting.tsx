'use client';

import { OpenVidu } from 'openvidu-browser';
import React, { useState, useEffect, useRef } from 'react';
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
import OpenviduParticipants from './participants/OpenviduParticipants';

interface MeetingProps {
  mentoringSessionList: any[];
}

const Meeting: React.FC<MeetingProps> = ({ mentoringSessionList }) => {
  const [sessionUuid, setSessionUuid] = useState<string>('');
  const [mentoringName, setMentoringName] = useState<string>('');
  const [myUserName, setMyUserName] = useState<string>(
    'Participant' + Math.floor(Math.random() * 100)
  );
  const [session, setSession] = useState<any>(undefined);
  const [mainStreamManager, setMainStreamManager] = useState<any>(undefined);
  const [publisher, setPublisher] = useState<any>(undefined);
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [currentVideoDevice, setCurrentVideoDevice] = useState<any>(undefined);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const OV = useRef<OpenVidu>();

  useEffect(() => {
    OV.current = new OpenVidu();
  }, []);

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

  const joinSession = async (session: any) => {
    if (!OV.current) return;

    const newSession = OV.current.initSession();
    setSessionUuid(session.sessionUuid);
    setMentoringName(session.mentoringName);
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

    try {
      const token = await getToken('se23ss23232gggg');
      await newSession.connect(token, { clientData: myUserName });

      const publisher = await OV.current.initPublisherAsync(undefined, {
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

      const devices = await OV.current.getDevices();
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
    } catch (error) {
      console.log('There was an error connecting to the session:', error);
    }
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

  const toggleAudio = () => {
    if (publisher) {
      publisher.publishAudio(!publisher.stream.audioActive);
    }
  };

  const toggleVideo = () => {
    if (publisher) {
      publisher.publishVideo(!publisher.stream.videoActive);
    }
  };

  const participantToggleAudio = (connection: any) => {
    if (publisher && publisher.stream.connection === connection) {
      publisher.publishAudio(!publisher.stream.audioActive);
      setPublisher({
        ...publisher,
        stream: {
          ...publisher.stream,
          audioActive: !publisher.stream.audioActive,
        },
      });
    } else {
      const updatedSubscribers = subscribers.map((sub) => {
        if (sub.stream.connection === connection) {
          sub.subscribeToAudio(!sub.stream.audioActive);
          return {
            ...sub,
            stream: { ...sub.stream, audioActive: !sub.stream.audioActive },
          };
        }
        return sub;
      });
      setSubscribers(updatedSubscribers);
    }
  };

  const participantToggleVideo = (connection: any) => {
    if (publisher && publisher.stream.connection === connection) {
      publisher.publishVideo(!publisher.stream.videoActive);
      setPublisher({
        ...publisher,
        stream: {
          ...publisher.stream,
          videoActive: !publisher.stream.videoActive,
        },
      });
    } else {
      const updatedSubscribers = subscribers.map((sub) => {
        if (sub.stream.connection === connection) {
          sub.subscribeToVideo(!sub.stream.videoActive);
          return {
            ...sub,
            stream: { ...sub.stream, videoActive: !sub.stream.videoActive },
          };
        }
        return sub;
      });
      setSubscribers(updatedSubscribers);
    }
  };

  const shareScreen = async () => {
    if (publisher && OV.current) {
      try {
        const screenPublisher = await OV.current.initPublisherAsync(undefined, {
          videoSource: 'screen',
        });
        await session.unpublish(publisher);
        await session.publish(screenPublisher);
        setPublisher(screenPublisher);
        setMainStreamManager(screenPublisher);
      } catch (error) {
        console.error('Error sharing screen:', error);
      }
    }
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
          <div className="w-full grid grid-cols-7 2xl:grid-cols-5 h-[79vh]">
            <div className="w-full col-span-5 2xl:col-span-4 bg-[#FAFAFE]">
              <OvTracks
                mentoringName={mentoringName}
                sessionUuid={sessionUuid}
                leaveSession={leaveSession}
                mainStreamManager={mainStreamManager}
                publisher={publisher}
                handleMainVideoStream={handleMainVideoStream}
                subscribers={subscribers}
                toggleAudio={toggleAudio}
                toggleVideo={toggleVideo}
                shareScreen={shareScreen}
              />
            </div>
            <div className="w-full flex flex-col col-span-2 2xl:col-span-1 h-full">
              <div className="h-[25vh]">
                <OpenviduParticipants
                  subscribers={subscribers}
                  publisher={publisher}
                  handleMainVideoStream={handleMainVideoStream}
                  toggleAudio={toggleAudio}
                  toggleVideo={toggleVideo}
                  participantToggleAudio={participantToggleAudio}
                  participantToggleVideo={participantToggleVideo}
                />
              </div>
              <div className="h-[54vh]"></div>
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
