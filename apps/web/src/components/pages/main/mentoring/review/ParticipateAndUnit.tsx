import Avatars from '@components/ui/Avatars/Avatars';
import ValueUnit from '@components/ui/Text/ValueUnit';
import { SessionUser } from '@repo/ui/types/CommonType.js';

export default function ParticipateAndUnit({
  maxVisible = 4,
  participate,
  unit = '',
}: {
  maxVisible?: number;
  participate: SessionUser[];
  unit: string;
}) {
  const remainingCount = maxVisible
    ? participate?.length - maxVisible
    : participate?.length;

  return (
    <div className="flex items-center gap-2">
      <Avatars participate={participate} remainingCount={remainingCount} />
      <ValueUnit
        value={`${participate?.length}`}
        unit={unit}
        valueSize="text-[1.15rem]"
        unitSize="text-sm"
      />
    </div>
  );
}
