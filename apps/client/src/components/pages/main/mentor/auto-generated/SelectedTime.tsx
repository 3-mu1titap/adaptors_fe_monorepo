import { Button } from '@repo/ui/components/ui/button';
import { TimeSlotType } from './TimeSlotSelector';
export default function SelectedTime({
  TimeSlot,
  removeTimeSlot,
}: {
  TimeSlot: TimeSlotType;
  removeTimeSlot: (prop: TimeSlotType) => void;
}) {
  return (
    <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
      <span>{`${TimeSlot.day} ${TimeSlot.start} - ${TimeSlot.end}`}</span>
      <Button
        type="button"
        variant="destructive"
        size="sm"
        onClick={() => removeTimeSlot(TimeSlot)}
      >
        Remove
      </Button>
    </div>
  );
}
