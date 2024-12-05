'use client';

import { useEffect, useState } from 'react';

import initOpenVidu from '@repo/client/components/utils/initOpenvidu';
import SubCam from './tracks/SubCam';

export default function GameRoom() {
  const [session, setSession] = useState(null);
  const [publisher, setPublisher] = useState(null);
  const [subscriberMap, setSubscriberMap] = useState({});

  function handleBeforeunload() {
    session.disconnect();
  }

  useEffect(() => {
    initOpenVidu({
      sessionId: 'session',
      userId: 'kabin',
      nickname: 'nika',
      setSubscriberMap,
      setSession,
      setPublisher,
    });

    window.addEventListener('beforeunload', handleBeforeunload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeunload);
    };
  }, []);

  return Object.keys(subscriberMap).map((key) => (
    <SubCam subscriber={subscriberMap[key]} />
  ));
}
