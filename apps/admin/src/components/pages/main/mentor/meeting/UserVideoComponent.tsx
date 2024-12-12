'use client';

import type { StreamManager } from 'openvidu-browser';
import OpenViduVideo from './OvVideo';

interface UserVideoProps {
  streamManager: StreamManager;
}

export default function UserVideo({ streamManager }: UserVideoProps) {
  return (
    <>
      {streamManager && (
        <figure className="w-full h-full overflow-hidden">
          <OpenViduVideo streamManager={streamManager} />
        </figure>
      )}
    </>
  );
}
