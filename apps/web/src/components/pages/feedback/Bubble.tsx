'use client';

export function Bubble({ comment }: { comment: string }) {
  return (
    <div className="relative w-full p-3">
      {/* Menu Container */}
      <div className="absolute right-0 top-[20px] z-30 w-full">
        <div className="w-6 h-6 absolute right-20 top-[-13px] flex items-center z-[2] justify-center border-gray-300 border-t-[1px] border-l-[1px] rotate-45"></div>

        {/* Content Container */}
        <div className="absolute p-3 w-full rounded-md border border-gray-300 overflow-hidden bg-white shadow-[0_1px_5px_rgba(0,0,0,0.15)] mb-8">
          {comment}
        </div>
      </div>
    </div>
  );
}
