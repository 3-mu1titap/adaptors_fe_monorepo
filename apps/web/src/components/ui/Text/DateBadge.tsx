export default function DateBadge({ date }: { date: string }) {
  return (
    <h3 className="font-medium bg-[#F0F0F0] px-3 py-1 rounded-2xl inline-block">
      {date}
    </h3>
  );
}
