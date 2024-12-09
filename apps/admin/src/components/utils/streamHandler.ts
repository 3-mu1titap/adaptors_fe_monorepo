import { Session, StreamEvent } from 'openvidu-browser';
import React from 'react';

export function handleStreamCreated(
  session: Session,
  setSubscriberMap: React.Dispatch<React.SetStateAction<any>>
) {
  return function ({ stream }: StreamEvent) {
    const sub = session.subscribe(stream, undefined);
    const { userId } = JSON.parse(sub.stream.connection.data);

    setSubscriberMap((subs: any) => {
      const newSubs = { ...subs, [userId]: sub };
      // console.log(newSubs);
      return newSubs;
    });
  };
}

export function handleStreamDestroyed(
  setSubscriberMap: React.Dispatch<React.SetStateAction<any>>
) {
  return function ({ stream }: StreamEvent) {
    const { userId } = JSON.parse(stream.connection.data);

    setSubscriberMap((subs: any) => {
      const remains = { ...subs };
      delete remains[userId];
      return remains;
    });
  };
}
