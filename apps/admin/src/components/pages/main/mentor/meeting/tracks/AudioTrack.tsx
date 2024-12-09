import { LocalAudioTrack, RemoteAudioTrack } from 'livekit-client';
import { useEffect, useRef } from 'react';

interface AudioTrackProps {
  track: LocalAudioTrack | RemoteAudioTrack;
}

export default function AudioTrack({ track }: AudioTrackProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      track.attach(audioElement);
      return () => {
        track.detach();
      };
    }
  }, [track]);

  return <audio ref={audioRef} />;
}
