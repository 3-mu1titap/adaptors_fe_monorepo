import { Button } from '@repo/ui/components/ui/button';
import VideoTrack from './tracks/VideoTrack';
import AudioTrack from './tracks/AudioTrack';
import { LocalVideoTrack, RemoteTrackPublication, Track } from 'livekit-client';
import MicOnIcon from '../../../../assets/icons/MicOn';
import MicOffIcon from '../../../../assets/icons/MicOff';
import VideoOnIcon from '../../../../assets/icons/VideoOn';
import VideoOffIcon from '../../../../assets/icons/VideoOff';
import { useEffect, useState } from 'react';

type TrackInfo = {
  trackPublication: RemoteTrackPublication;
  participantIdentity: string;
};

export default function Tracks({
  roomName,
  leaveRoom,
  toggleScreenSharing,
  isScreenSharing,
  localTrack,
  participantName,
  remoteTracks,
  toggleMicrophone,
  isMicrophoneOn,
  toggleCamera,
  isCameraOn,
}: {
  roomName: string;
  leaveRoom: () => Promise<void>;
  toggleScreenSharing: () => Promise<void>;
  isScreenSharing: boolean;
  localTrack: LocalVideoTrack | undefined;
  participantName: string;
  remoteTracks: TrackInfo[];
  toggleMicrophone: () => Promise<void>;
  isMicrophoneOn: boolean;
  toggleCamera: () => Promise<void>;
  isCameraOn: boolean;
}) {
  const [activeTrack, setActiveTrack] = useState<string | undefined | null>(
    localTrack ? localTrack.sid : null
  );

  const handleTrackClick = (trackSid: string) => {
    if (!isScreenSharing && isAnotherParticipantSharing) {
      return;
    }
    setActiveTrack(trackSid);
    console.log('click', trackSid);
  };

  const isActiveTrack = (trackSid: string) => {
    return activeTrack === trackSid; // activeTrack이 null일 경우 false 반환
  };

  const isAnotherParticipantSharing = remoteTracks.some(
    (track) => track.trackPublication.source === Track.Source.ScreenShare
  );

  const handleToggleScreenSharing = async () => {
    if (!isScreenSharing && isAnotherParticipantSharing) {
      alert('다른 참가자가 이미 화면을 공유하고 있습니다.');
      return;
    }
    await toggleScreenSharing();
  };

  const sortedTracks = [
    ...(activeTrack
      ? remoteTracks.filter(
          (track) => track.trackPublication.trackSid === activeTrack
        )
      : []),
    ...(localTrack
      ? [
          {
            trackPublication: {
              trackSid: localTrack.sid,
              kind: 'video',
              videoTrack: localTrack,
              source: 'local',
            },
            participantIdentity: participantName,
          },
        ]
      : []),
    ...remoteTracks.filter(
      (track) =>
        track.trackPublication.trackSid !== activeTrack &&
        (localTrack ? track.trackPublication.trackSid !== localTrack.sid : true)
    ),
  ];

  useEffect(() => {
    const screenShareTrack = remoteTracks.find(
      (track) => track.trackPublication.source === Track.Source.ScreenShare
    );
    if (isScreenSharing || (isAnotherParticipantSharing && screenShareTrack)) {
      setActiveTrack(screenShareTrack?.trackPublication.trackSid);
    } else if (localTrack) {
      setActiveTrack(localTrack.sid);
    } else {
      setActiveTrack(null);
    }
  }, [isScreenSharing, isAnotherParticipantSharing]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4 mx-2">
        {sortedTracks.map((trackInfo) => {
          const trackSid = trackInfo.trackPublication.trackSid;
          return (
            trackInfo.trackPublication.kind === 'video' && (
              <VideoTrack
                key={trackSid}
                local={localTrack && localTrack.sid === trackSid}
                track={trackInfo.trackPublication.videoTrack!}
                participantIdentity={trackInfo.participantIdentity}
                isScreenShare={
                  trackInfo.trackPublication.source === Track.Source.ScreenShare
                }
                className={`${
                  trackSid !== undefined && isActiveTrack(trackSid)
                    ? 'col-span-1 xl:col-span-2 2xl:col-span-4'
                    : ''
                }`}
                onClick={() => handleTrackClick(trackSid!)}
              />
            )
          );
        })}
      </div>
      <div className="flex justify-between mt-4 mx-4">
        <Button
          onClick={handleToggleScreenSharing}
          variant="outline"
          className="bg-adaptorsBlue text-white text-md"
          size="meetingroomBtn"
        >
          {isScreenSharing ? '공유 중지' : '화면 공유'}
        </Button>
        <div className="flex flex-row gap-x-2">
          <Button
            onClick={toggleMicrophone}
            variant="outline"
            size="meetingroomIcon"
          >
            {isMicrophoneOn ? (
              <MicOnIcon size="25" />
            ) : (
              <MicOffIcon size="25" />
            )}
          </Button>
          <Button
            onClick={toggleCamera}
            variant="outline"
            size="meetingroomIcon"
          >
            {isCameraOn ? (
              <VideoOnIcon size="25" />
            ) : (
              <VideoOffIcon size="25" />
            )}
          </Button>
        </div>
        <Button
          variant="destructive"
          size="meetingroomBtn"
          className="text-md"
          onClick={leaveRoom}
        >
          멘토링 종료
        </Button>
      </div>
    </div>
  );
}
