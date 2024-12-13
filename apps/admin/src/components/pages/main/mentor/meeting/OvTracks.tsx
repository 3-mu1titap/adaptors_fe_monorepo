'use client';

import { useState, useEffect } from 'react';
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Monitor,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@repo/ui/components/ui/button';
import { StreamManager } from 'openvidu-browser';
import UserVideo from './UserVideoComponent';
import VideoOnIcon from '@repo/admin/components/assets/icons/VideoOn';
import VideoOffIcon from '@repo/admin/components/assets/icons/VideoOff';

export interface OvTracksProps {
  mentoringName: string;
  sessionUuid: string;
  leaveSession: () => void;
  mainStreamManager: StreamManager | null;
  publisher: StreamManager;
  handleMainVideoStream: (stream: StreamManager) => void;
  subscribers: StreamManager[];
  toggleAudio: (connection: any) => void;
  toggleVideo: (connection: any) => void;
  shareScreen: () => Promise<void>;
}

export interface UserVideoProps {
  streamManager: StreamManager;
}

export default function OvTracks({
  mentoringName,
  sessionUuid,
  leaveSession,
  mainStreamManager,
  publisher,
  handleMainVideoStream,
  subscribers,
  toggleAudio,
  toggleVideo,
  shareScreen,
}: OvTracksProps) {
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const allParticipants = [publisher, ...subscribers];
  const sideParticipants = allParticipants.filter(
    (p) => p !== mainStreamManager
  );
  const totalParticipants = allParticipants.length;

  const handleAudioToggle = () => {
    setIsAudioOn((prev) => !prev);
    toggleAudio(publisher.stream.connection);
  };

  const handleVideoToggle = () => {
    setIsVideoOn((prev) => !prev);
    toggleVideo(publisher.stream.connection);
  };

  const handleScreenShare = async () => {
    try {
      await shareScreen();
      setIsScreenSharing((prev) => !prev);
    } catch (error) {
      console.error('Error sharing screen:', error);
    }
  };

  const handleLeaveSession = () => {
    if (window.confirm('멘토링을 중지하시겠습니까?')) {
      leaveSession();
    }
  };

  const getVisibleSideParticipants = () => {
    if (totalParticipants <= 5) return sideParticipants;
    return sideParticipants.slice(slideIndex, slideIndex + 4);
  };

  useEffect(() => {
    if (slideIndex > sideParticipants.length - 4) {
      setSlideIndex(Math.max(0, sideParticipants.length - 4));
    }
  }, [sideParticipants.length, slideIndex]);

  const renderSideParticipants = () => {
    const visibleParticipants = getVisibleSideParticipants();
    if (visibleParticipants.length === 1) {
      return visibleParticipants.map((participant: StreamManager) => (
        <div
          className={`"bg-black" ${totalParticipants === 2 ? `w-full h-full` : 'w-[40rem] h-[20rem] rounded-lg'}`}
        >
          <UserVideo streamManager={participant} />
        </div>
      ));
    } else {
      return (
        <div className="flex gap-2 overflow-hidden">
          {visibleParticipants.map((participant: StreamManager) => (
            <div
              key={participant.id}
              className="flex-1 w-full h-full rounded-lg aspect-video cursor-pointer"
              onClick={() => handleMainVideoStream(participant)}
            >
              <UserVideo streamManager={participant} />
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col w-full h-full bg-gray-100">
      {/* Video Grid */}
      <div
        className={`flex-1 p-4 ${totalParticipants === 2 ? `grid grid-cols-2` : 'flex flex-col gap-y-4'}`}
      >
        {/* Main Video */}
        <div className="flex-1 relative mx-auto">
          {mainStreamManager && (
            <div
              className={`"bg-black" ${totalParticipants === 2 ? `w-full h-full` : 'w-[50rem] h-[25rem] rounded-lg'}`}
            >
              <UserVideo streamManager={mainStreamManager} />
            </div>
          )}
        </div>
        {/* Side Participants */}
        <div
          className={`${totalParticipants <= 2 ? `flex-2 relative mx-auto` : 'h-1/4 flex items-center'}`}
        >
          {totalParticipants > 5 && (
            <Button
              onClick={() => setSlideIndex(Math.max(0, slideIndex - 1))}
              variant="outline"
              size="icon"
              className="mr-2"
              disabled={slideIndex === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}
          <div
            className={`${totalParticipants === 2 ? `flex-1 relative mx-auto` : '"flex-1 overflow-hidden"'}`}
          >
            {renderSideParticipants()}
          </div>
          {totalParticipants > 5 && (
            <Button
              onClick={() =>
                setSlideIndex(
                  Math.min(sideParticipants.length - 4, slideIndex + 1)
                )
              }
              variant="outline"
              size="icon"
              className="ml-2"
              disabled={slideIndex >= sideParticipants.length - 4}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
      {/* Footer */}
      <div className="absolute w-full -bottom-[5rem] flex justify-between items-center p-4 bg-white border-t">
        <Button
          onClick={handleScreenShare}
          size="icon"
          className="w-10 h-10 bg-adaptorsYellow hover:bg-black !px-8"
        >
          {isScreenSharing ? '공유 중지' : '영상 공유'}
        </Button>
        <div className="flex items-center gap-2">
          <Button
            onClick={handleAudioToggle}
            variant="outline"
            size="icon"
            className="w-10 h-10"
          >
            {isAudioOn ? (
              <Mic className="h-5 w-5" />
            ) : (
              <MicOff className="h-5 w-5" />
            )}
          </Button>
          <Button
            onClick={handleVideoToggle}
            variant="outline"
            size="icon"
            className="w-10 h-10"
          >
            {isVideoOn ? (
              <Video className="h-5 w-5" />
            ) : (
              <VideoOff className="h-5 w-5" />
            )}
          </Button>
        </div>
        <Button onClick={handleLeaveSession} variant="destructive">
          <LogOut className="h-5 w-5 mr-2" />
          Leave Mentoring
        </Button>
      </div>
    </div>
  );
}
