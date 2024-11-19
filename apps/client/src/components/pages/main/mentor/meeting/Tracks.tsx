import { Button } from '@repo/ui/components/ui/button';
import VideoTrack from './tracks/VideoTrack';
import AudioTrack from './tracks/AudioTrack';
import { LocalVideoTrack, RemoteTrackPublication, Track } from 'livekit-client';

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
}: {
  roomName: string;
  leaveRoom: () => Promise<void>;
  toggleScreenSharing: () => Promise<void>;
  isScreenSharing: boolean;
  localTrack: LocalVideoTrack | undefined;
  participantName: string;
  remoteTracks: TrackInfo[];
}) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{roomName}</h2>
        <Button variant="destructive" onClick={leaveRoom}>
          Leave Room
        </Button>
        <Button onClick={toggleScreenSharing} variant="outline">
          {isScreenSharing ? 'Stop Sharing' : 'Share Screen'}
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
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
    </div>
  );
}
