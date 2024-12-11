import React from 'react';
import { Button } from '@repo/ui/components/ui/button';
import { Mic, MicOff, Video, VideoOff } from 'lucide-react';

interface ParticipantManagerProps {
  subscribers: any[];
  publisher: any;
  handleMainVideoStream: (stream: any) => void;
  toggleAudio: () => void;
  toggleVideo: () => void;
  participantToggleAudio: (connection: any) => void;
  participantToggleVideo: (connection: any) => void;
}

const OpenviduParticipants: React.FC<ParticipantManagerProps> = ({
  subscribers,
  publisher,
  handleMainVideoStream,
  toggleAudio,
  toggleVideo,
  participantToggleAudio,
  participantToggleVideo,
}) => {
  return (
    <div className="h-full overflow-y-auto p-4">
      <h3 className="text-lg font-semibold mb-4">Participants</h3>
      <ul className="space-y-4">
        {publisher && (
          <li className="flex items-center justify-between">
            <button
              onClick={() => handleMainVideoStream(publisher)}
              className="flex items-center space-x-2 hover:bg-gray-100 rounded p-2"
            >
              <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                {publisher.stream.connection.data.split('"')[1].charAt(0)}
              </span>
              <span>
                {publisher.stream.connection.data.split('"')[1]} (You)
              </span>
            </button>
            <div className="flex space-x-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() => toggleAudio()}
                title={publisher.stream.audioActive ? 'Mute' : 'Unmute'}
              >
                {publisher.stream.audioActive ? (
                  <Mic className="h-4 w-4" />
                ) : (
                  <MicOff className="h-4 w-4" />
                )}
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => toggleVideo()}
                title={
                  publisher.stream.videoActive
                    ? 'Disable video'
                    : 'Enable video'
                }
              >
                {publisher.stream.videoActive ? (
                  <Video className="h-4 w-4" />
                ) : (
                  <VideoOff className="h-4 w-4" />
                )}
              </Button>
            </div>
          </li>
        )}
        {subscribers.map((sub, index) => (
          <li key={index} className="flex items-center justify-between">
            <button
              onClick={() => handleMainVideoStream(sub)}
              className="flex items-center space-x-2 hover:bg-gray-100 rounded p-2"
            >
              <span className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white">
                {sub.stream.connection.data.split('"')[1].charAt(0)}
              </span>
              <span>{sub.stream.connection.data.split('"')[1]}</span>
            </button>
            <div className="flex space-x-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() => participantToggleAudio(sub.stream.connection)}
                title={sub.stream.audioActive ? 'Mute' : 'Unmute'}
              >
                {sub.stream.audioActive ? (
                  <Mic className="h-4 w-4" />
                ) : (
                  <MicOff className="h-4 w-4" />
                )}
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => participantToggleVideo(sub.stream.connection)}
                title={
                  sub.stream.videoActive ? 'Disable video' : 'Enable video'
                }
              >
                {sub.stream.videoActive ? (
                  <Video className="h-4 w-4" />
                ) : (
                  <VideoOff className="h-4 w-4" />
                )}
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpenviduParticipants;
