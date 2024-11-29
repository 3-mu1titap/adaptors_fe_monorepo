import { ChevronRight } from 'lucide-react';

export default function ChevronText({ text }: { text: string }) {
  return (
    <h2 className="text-[1.15rem] font-bold flex gap-2 items-center">
      <ChevronRight className="w-5" /> {text}
    </h2>
  );
}
