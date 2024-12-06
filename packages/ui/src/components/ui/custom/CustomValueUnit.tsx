import { formatCount } from '@repo/ui/lib/utils';
export default function CustomValueUnit({
  value,
  unit,
  valueSize = 'text-[1.15rem]',
  unitSize,
}: {
  value: number;
  unit: string;
  valueSize?: string;
  unitSize?: string;
}) {
  return (
    <span>
      <p className={`font-extrabold ${valueSize}`}>{formatCount(value)}</p>
      <p
        className={`text-md hidden sm:block text-[#727272] w-full text-center ${unitSize}`}
      >
        {unit}
      </p>
    </span>
  );
}
