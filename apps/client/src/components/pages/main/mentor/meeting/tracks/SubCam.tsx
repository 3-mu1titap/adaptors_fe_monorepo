import { useEffect, useRef } from 'react';

export default function SubCam({ subscriber }: any) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (subscriber) {
      subscriber.addVideoElement(videoRef.current);
    }
  }, []);

  if (subscriber) {
    return <video ref={videoRef} autoPlay={true} />;
  }
}
