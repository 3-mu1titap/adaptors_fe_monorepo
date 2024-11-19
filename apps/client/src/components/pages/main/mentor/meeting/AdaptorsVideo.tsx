'use client';

import { useState } from 'react';
import {
  LocalVideoTrack,
  Room,
  RoomEvent,
  RemoteTrack,
  RemoteTrackPublication,
  RemoteParticipant,
} from 'livekit-client';
import Tracks from './Tracks';
import OpenMentoring from './openMentoring/OpenMentoring';

const APPLICATION_SERVER_URL =
  process.env.NEXT_PUBLIC_APPLICATION_SERVER_URL || 'http://localhost:6080/';
const LIVEKIT_URL =
  process.env.NEXT_PUBLIC_LIVEKIT_URL || 'ws://localhost:7880/';

type TrackInfo = {
  trackPublication: RemoteTrackPublication;
  participantIdentity: string;
};

export default function VideoComponent() {
  const [room, setRoom] = useState<Room | null>(null);
  const [localTrack, setLocalTrack] = useState<LocalVideoTrack | undefined>(
    undefined
  );
  const [remoteTracks, setRemoteTracks] = useState<TrackInfo[]>([]);
  const [participantName, setParticipantName] = useState(
    `Participant${Math.floor(Math.random() * 100)}`
  );
  const [roomName, setRoomName] = useState('Test Room');
  const [isScreenSharing, setIsScreenSharing] = useState(false);

  async function joinRoom() {
    const room = new Room();
    setRoom(room);

    room.on(
      RoomEvent.TrackSubscribed,
      (
        _track: RemoteTrack,
        publication: RemoteTrackPublication,
        participant: RemoteParticipant
      ) => {
        setRemoteTracks((prev) => [
          ...prev,
          {
            trackPublication: publication,
            participantIdentity: participant.identity,
          },
        ]);
      }
    );

    room.on(
      RoomEvent.TrackUnsubscribed,
      (_track: RemoteTrack, publication: RemoteTrackPublication) => {
        setRemoteTracks((prev) =>
          prev.filter(
            (track) => track.trackPublication.trackSid !== publication.trackSid
          )
        );
      }
    );

    try {
      const token = await getToken(roomName, participantName);
      await room.connect(LIVEKIT_URL, token);
      await room.localParticipant.enableCameraAndMicrophone();
      const localVideoTrackPublication =
        room.localParticipant.videoTrackPublications.values().next().value;

      if (localVideoTrackPublication) {
        setLocalTrack(localVideoTrackPublication.videoTrack);
      }
    } catch (error) {
      console.log(
        'There was an error connecting to the room:',
        (error as Error).message
      );
      await leaveRoom();
    }
  }

  async function leaveRoom() {
    await room?.disconnect();
    setRoom(null);
    setLocalTrack(undefined);
    setRemoteTracks([]);
  }

  async function getToken(roomName: string, participantName: string) {
    const response = await fetch(`${APPLICATION_SERVER_URL}token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roomName, participantName }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Failed to get token: ${error.errorMessage}`);
    }

    const data = await response.json();
    return data.token;
  }

  async function toggleScreenSharing() {
    if (isScreenSharing) {
      await room?.localParticipant.setScreenShareEnabled(false);
      setIsScreenSharing(false);
    } else {
      await room?.localParticipant.setScreenShareEnabled(true);
      setIsScreenSharing(true);
    }
  }

  return (
    <div className="container mx-auto p-4">
      {!room ? (
        <OpenMentoring
          joinRoom={joinRoom}
          participantName={participantName}
          setParticipantName={setParticipantName}
          roomName={roomName}
          setRoomName={setRoomName}
        />
      ) : (
        <Tracks
          roomName={roomName}
          leaveRoom={leaveRoom}
          toggleScreenSharing={toggleScreenSharing}
          isScreenSharing={isScreenSharing}
          localTrack={localTrack}
          participantName={participantName}
          remoteTracks={remoteTracks}
        />
      )}
    </div>
  );
}
