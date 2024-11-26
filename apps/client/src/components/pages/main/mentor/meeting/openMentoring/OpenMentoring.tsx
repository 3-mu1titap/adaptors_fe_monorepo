import { Button } from '@repo/ui/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';
import { Input } from '@repo/ui/components/ui/input';
import { Dispatch, SetStateAction } from 'react';

export default function OpenMentoring({
  joinRoom,
  participantName,
  setParticipantName,
  roomName,
  setRoomName,
}: {
  joinRoom: () => Promise<void>;
  participantName: string;
  setParticipantName: Dispatch<SetStateAction<string>>;
  roomName: string;
  setRoomName: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>To Enter Mentoring</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            joinRoom();
          }}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="participant-name"
              className="block text-sm font-medium text-gray-700"
            >
              Participant
            </label>
            <Input
              id="participant-name"
              type="text"
              value={participantName}
              onChange={(e) => setParticipantName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="room-name"
              className="block text-sm font-medium text-gray-700"
            >
              Room
            </label>
            <Input
              id="room-name"
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              required
            />
          </div>
          <Button type="submit" disabled={!roomName || !participantName}>
            Join!
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
