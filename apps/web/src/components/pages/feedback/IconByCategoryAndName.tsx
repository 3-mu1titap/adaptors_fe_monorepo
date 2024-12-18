import { Circle } from 'lucide-react';

export default function IconByCategoryAndName({ num }: { num: number }) {
  return (
    <div className="relative min-w-7">
      <Circle
        className="font-extrabold text-black w-full"
        stroke="#FACE00"
        fill="#FACE00"
        size={28}
      ></Circle>
      <p className="absolute top-1.5 left-2.5 text-black z-20 text-md ">
        {num}
      </p>
    </div>
  );
}
