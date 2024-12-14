'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Monitor,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Users,
  MessageSquareText,
} from 'lucide-react';
import { Button } from '@repo/ui/components/ui/button';
import { StreamManager } from 'openvidu-browser';
import UserVideo from './UserVideoComponent';
import CustomToolTip from '@repo/ui/components/ui/custom/CustomToolTip';

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
  isScreenSharing: boolean;
  showParticipants: boolean;
  showChat: boolean;
  toggleParticipants: () => void;
  toggleChat: () => void;
}

export interface UserVideoProps {
  streamManager: StreamManager;
}

export default function MenteeOvTracks({
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
  isScreenSharing,
  showParticipants,
  showChat,
  toggleParticipants,
  toggleChat,
}: OvTracksProps) {
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleParticipants, setVisibleParticipants] = useState(4);

  const allParticipants = [publisher, ...subscribers];
  const sideParticipants = allParticipants.filter(
    (p) => p !== mainStreamManager
  );
  const totalParticipants = allParticipants.length;

  useEffect(() => {
    const updateVisibleParticipants = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const participantWidth = 240; // Approximate width of each participant video
        const newVisibleParticipants = Math.floor(
          containerWidth / participantWidth
        );
        setVisibleParticipants(Math.max(1, newVisibleParticipants));
      }
    };

    updateVisibleParticipants();
    window.addEventListener('resize', updateVisibleParticipants);

    return () => {
      window.removeEventListener('resize', updateVisibleParticipants);
    };
  }, []);

  useEffect(() => {
    if (slideIndex > sideParticipants.length - visibleParticipants) {
      setSlideIndex(Math.max(0, sideParticipants.length - visibleParticipants));
    }
  }, [sideParticipants.length, slideIndex, visibleParticipants]);

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
      const sceenShare = await shareScreen();
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
    return sideParticipants.slice(slideIndex, slideIndex + visibleParticipants);
  };

  const renderSideParticipants = () => {
    const visibleParticipants = getVisibleSideParticipants();
    return (
      <div className="flex gap-2 h-full">
        {visibleParticipants.map((participant: StreamManager) => (
          <div
            key={participant.id}
            onClick={() => handleMainVideoStream(participant)}
            className="w-60 h-full cursor-pointer"
          >
            <UserVideo streamManager={participant} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full h-full bg-white">
      {/* Video Grid */}
      <div className="flex flex-col h-full p-4 gap-4">
        {/* Main Video */}
        <div className="flex-grow">
          {mainStreamManager && (
            <div
              className={`w-full rounded-lg overflow-hidden ${sideParticipants.length > 0 ? 'h-[67vh]' : 'h-[85vh]'}`}
            >
              <UserVideo streamManager={mainStreamManager} />
            </div>
          )}
        </div>
        {/* Side Participants */}
        {sideParticipants.length > 0 && (
          <div className="h-32 flex items-center" ref={containerRef}>
            {sideParticipants.length > visibleParticipants && (
              <Button
                onClick={() => setSlideIndex(Math.max(0, slideIndex - 1))}
                variant="outline"
                size="icon"
                className="mr-2 bg-gray-800 text-white hover:bg-gray-700"
                disabled={slideIndex === 0}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            )}
            <div className="flex-grow h-full overflow-hidden">
              {renderSideParticipants()}
            </div>
            {sideParticipants.length > visibleParticipants && (
              <Button
                onClick={() =>
                  setSlideIndex(
                    Math.min(
                      sideParticipants.length - visibleParticipants,
                      slideIndex + 1
                    )
                  )
                }
                variant="outline"
                size="icon"
                className="ml-2 bg-gray-800 text-white hover:bg-gray-700"
                disabled={
                  slideIndex >= sideParticipants.length - visibleParticipants
                }
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            )}
          </div>
        )}
      </div>
      {/* Footer */}
      <div className="flex justify-between items-center p-3 bg-[#F5F5F5] border-gray-700">
        <CustomToolTip text={isScreenSharing ? 'Stop sharing' : 'Share screen'}>
          <Button
            onClick={handleScreenShare}
            size="icon"
            className={`w-10 h-10 ${
              isScreenSharing
                ? 'bg-gray-700 hover:bg-gray-600'
                : 'bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white'
            }`}
          >
            <Monitor className="h-6 w-6" />
          </Button>
        </CustomToolTip>
        <div className="flex items-center gap-2">
          <CustomToolTip text={isAudioOn ? 'Mute' : 'Unmute'}>
            <Button
              onClick={handleAudioToggle}
              variant="outline"
              size="icon"
              className={`w-10 h-10 ${
                isAudioOn
                  ? 'bg-adaptorsYellow text-white hover:bg-black hover:text-white'
                  : 'bg-red-300 hover:bg-red-500'
              }`}
            >
              {isAudioOn ? (
                <Mic className="h-6 w-6" />
              ) : (
                <MicOff className="h-6 w-6" />
              )}
            </Button>
          </CustomToolTip>
          <CustomToolTip text={isVideoOn ? 'Stop video' : 'Start video'}>
            <Button
              onClick={handleVideoToggle}
              variant="outline"
              size="icon"
              className={`w-10 h-10 ${
                isVideoOn
                  ? 'bg-adaptorsYellow text-white hover:bg-black hover:text-white'
                  : 'bg-red-300 hover:bg-red-500'
              }`}
            >
              {isVideoOn ? (
                <Video className="h-6 w-6" />
              ) : (
                <VideoOff className="h-6 w-6" />
              )}
            </Button>
          </CustomToolTip>
          <CustomToolTip text={`Participants (${totalParticipants})`}>
            <Button
              onClick={toggleParticipants}
              variant="outline"
              size="icon"
              className={`w-10 h-10 ${
                showParticipants
                  ? 'bg-adaptorsYellow text-white hover:bg-black hover:text-white'
                  : 'bg-red-300 hover:bg-red-500'
              }`}
            >
              <Users className="h-6 w-6" />
            </Button>
          </CustomToolTip>
          <CustomToolTip text="Chat">
            <Button
              onClick={toggleChat}
              variant="outline"
              size="icon"
              className={`w-10 h-10 ${
                showChat
                  ? 'bg-adaptorsYellow text-white hover:bg-black hover:text-white'
                  : 'bg-red-300 hover:bg-red-500'
              }`}
            >
              <MessageSquareText className="h-6 w-6" />
            </Button>
          </CustomToolTip>
        </div>
        <Button
          onClick={handleLeaveSession}
          variant="destructive"
          className="bg-transparent border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white"
        >
          <LogOut className="h-6 w-6 mr-2" />
          Leave Mentoring
        </Button>
      </div>
    </div>
  );
}
