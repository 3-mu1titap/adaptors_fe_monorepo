export default function ValueUnit({
  value,
  unit,
  valueSize,
  unitSize,
}: {
  value: string | number;
  unit: string;
  valueSize?: string;
  unitSize?: string;
}) {
  return (
    <span>
      <p className={`text-2xl font-semibold ${valueSize}`}>{value}</p>
      <p
        className={`text-md hidden sm:block text-[#727272] w-full text-center ${unitSize}`}
      >
        {unit}
      </p>
    </span>
  );
}
