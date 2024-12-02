export default function ValueUnit({
  value,
  unit,
}: {
  value: string | number;
  unit: string;
}) {
  return (
    <span>
      <p className="text-2xl font-semibold">{value}</p>
      <p className="text-md hidden sm:block text-[#727272] w-full text-center">
        {unit}
      </p>
    </span>
  );
}
