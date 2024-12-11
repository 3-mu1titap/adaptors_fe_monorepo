import React, { useState } from 'react';
import UserVideoComponent from './UserVideoComponent';
import { Mic, MicOff, Video, VideoOff, Monitor } from 'lucide-react';
import { Button } from '@repo/ui/components/ui/button';

export default function OvTracks({
  sessionUuid,
  leaveSession,
  mainStreamManager,
  publisher,
  handleMainVideoStream,
  subscribers,
  toggleAudio,
  toggleVideo,
  shareScreen,
}: {
  sessionUuid: string;
  leaveSession: () => void;
  mainStreamManager: any;
  publisher: any;
  handleMainVideoStream: (stream: any) => void;
  subscribers: any[];
  toggleAudio: (connection: any) => void;
  toggleVideo: (connection: any) => void;
  shareScreen: () => void;
}) {
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);

  const handleAudioToggle = () => {
    setIsAudioOn((prev) => !prev);
    toggleAudio(publisher.stream.connection); // publisher의 connection을 전달
  };

  const handleVideoToggle = () => {
    setIsVideoOn((prev) => !prev);
    toggleVideo(publisher.stream.connection); // publisher의 connection을 전달
  };

  const isPublisherMain = mainStreamManager === publisher;

  return (
    <div id="session" className="flex flex-col h-full">
      <div
        id="session-header"
        className="flex justify-between items-center p-4 bg-gray-100"
      >
        <h1 id="session-title" className="text-xl font-bold">
          {sessionUuid}
        </h1>
        <div className="flex space-x-2">
          <Button onClick={handleAudioToggle} variant="outline" size="icon">
            {isAudioOn ? <Mic /> : <MicOff />}
          </Button>
          <Button onClick={handleVideoToggle} variant="outline" size="icon">
            {isVideoOn ? <Video /> : <VideoOff />}
          </Button>
          <Button onClick={shareScreen} variant="outline" size="icon">
            <Monitor />
          </Button>
          <Button onClick={leaveSession} variant="destructive">
            Leave session
          </Button>
        </div>
      </div>

      <div className="flex-grow flex h-full">
        <div className="w-3/4 p-4">
          {mainStreamManager && (
            <div className="w-full h-full">
              <UserVideoComponent streamManager={mainStreamManager} />
            </div>
          )}
        </div>
        <div className="w-1/4 p-4 space-y-4 overflow-y-auto">
          {!isPublisherMain && publisher && (
            <div
              className="cursor-pointer"
              onClick={() => handleMainVideoStream(publisher)}
            >
              <UserVideoComponent streamManager={publisher} />
            </div>
          )}
          {subscribers.map(
            (sub) =>
              sub !== mainStreamManager && (
                <div
                  key={sub.id}
                  className="cursor-pointer"
                  onClick={() => handleMainVideoStream(sub)}
                >
                  <UserVideoComponent streamManager={sub} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
