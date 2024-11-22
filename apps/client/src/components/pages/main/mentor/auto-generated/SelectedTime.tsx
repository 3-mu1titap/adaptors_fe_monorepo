import { Button } from '@repo/ui/components/ui/button';

type SelectedTimeProps = {
  day: string;
  index: number;
  start: string;
  end: string;
  removeTimeSlot: (day: string, index: number) => void;
};

export default function SelectedTime({
  day,
  index,
  start,
  end,
  removeTimeSlot,
}: SelectedTimeProps) {
  return (
    <li className="flex justify-between items-center p-2 bg-gray-100 rounded">
      <span>{`${start} ~ ${end}`}</span>
      <Button
        type="button"
        variant="destructive"
        size="sm"
        onClick={() => removeTimeSlot(day, index)}
      >
        Remove
      </Button>
    </li>
  );
}
