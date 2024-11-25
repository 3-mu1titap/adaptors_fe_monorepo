import { Button } from '@repo/ui/components/ui/button';
import VideoTrack from './tracks/VideoTrack';
import AudioTrack from './tracks/AudioTrack';
import { LocalVideoTrack, RemoteTrackPublication, Track } from 'livekit-client';
import MicOnIcon from '../../../../assets/icons/MicOn';
import MicOffIcon from '../../../../assets/icons/MicOff';
import VideoOnIcon from '../../../../assets/icons/VideoOn';
import VideoOffIcon from '../../../../assets/icons/VideoOff';

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

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{roomName}</h2>
        <Button variant="destructive" onClick={leaveRoom}>
          Leave Room
        </Button>
      </div>
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
        {localTrack && (
          <VideoTrack
            track={localTrack}
            participantIdentity={participantName}
            local={true}
          />
        )}
        {remoteTracks.map((remoteTrack) =>
          remoteTrack.trackPublication.kind === 'video' ? (
            <VideoTrack
              key={remoteTrack.trackPublication.trackSid}
              track={remoteTrack.trackPublication.videoTrack!}
              participantIdentity={remoteTrack.participantIdentity}
              isScreenShare={
                remoteTrack.trackPublication.source === Track.Source.ScreenShare
              }
            />
          ) : (
            <AudioTrack
              key={remoteTrack.trackPublication.trackSid}
              track={remoteTrack.trackPublication.audioTrack!}
            />
          )
        )}
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <Button onClick={handleToggleScreenSharing} variant="outline">
          {isScreenSharing ? 'Stop Sharing' : 'Share Screen'}
        </Button>
        <Button onClick={toggleMicrophone} variant="outline">
          {isMicrophoneOn ? <MicOnIcon /> : <MicOffIcon />}
        </Button>
        <Button onClick={toggleCamera} variant="outline">
          {isCameraOn ? <VideoOnIcon /> : <VideoOffIcon />}
        </Button>
      </div>
    </div>
  );
}
