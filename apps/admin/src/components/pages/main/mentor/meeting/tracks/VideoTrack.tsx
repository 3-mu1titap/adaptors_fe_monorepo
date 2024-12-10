import { Card, CardContent } from '@repo/ui/components/ui/card';
import { LocalVideoTrack, RemoteVideoTrack } from 'livekit-client';
import { useEffect, useRef } from 'react';

interface VideoTrackProps {
  track: LocalVideoTrack | RemoteVideoTrack;
  participantIdentity: string;
  local?: boolean;
  isScreenShare?: boolean;
  className?: string;
  onClick: () => void;
}

export default function VideoTrack({
  track,
  participantIdentity,
  local = false,
  isScreenShare = false,
  className = '',
  onClick,
}: VideoTrackProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      track.attach(videoElement);
      return () => {
        track.detach();
      };
    }
  }, [track]);

  return (
    <Card
      className={`overflow-hidden ${className} ${isScreenShare ? '' : ''}`}
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative">
          <video ref={videoRef} className="w-full h-auto" />
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
            {participantIdentity +
              (local ? ' (You)' : '') +
              (isScreenShare ? ' (Screen)' : '')}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
