import { ChevronRight } from 'lucide-react';

export default function ChevronText({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  return (
    <h2
      className={`text-[1rem] font-semibold flex gap-2 items-center ${className}`}
    >
      <ChevronRight className="w-5" /> {text}
    </h2>
  );
}
