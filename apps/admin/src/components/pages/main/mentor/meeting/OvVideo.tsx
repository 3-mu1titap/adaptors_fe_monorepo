'use client';

import { useEffect, useRef } from 'react';
import type { StreamManager } from 'openvidu-browser';

interface OpenViduVideoProps {
  streamManager: StreamManager;
}

export default function OpenViduVideo({ streamManager }: OpenViduVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      streamManager.addVideoElement(videoRef.current);
    }
  }, [streamManager]);

  return (
    <video
      autoPlay
      ref={videoRef}
      className="w-full h-full object-cover rounded-lg"
    />
  );
}
