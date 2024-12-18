'use client';

export function Bubble({ comment }: { comment: string }) {
  return (
    <div className="relative w-full p-3">
      {/* Menu Container */}
      <div className="absolute right-0 top-[20px] z-30 w-full">
        {/* Triangle Border */}
        <div
          className="absolute right-[13px] top-[-26px] w-0 h-0 
          border-b-[26px] border-b-gray-200
          border-l-[14.5px] border-l-transparent 
          border-r-[14.5px] border-r-transparent
          drop-shadow-[0_1px_5px_rgba(0,0,0,0.15)]"
        />

        {/* White Triangle */}
        <div
          className="absolute left-24 top-[-24px] w-0 h-0 bg-white
          border-b-[26px] border-b-white
          border-l-[14.5px] border-l-transparent 
          border-r-[14.5px] border-r-transparent"
        />

        {/* Content Container */}
        <div className="absolute p-3 w-full rounded-md border border-gray-200 overflow-hidden bg-white shadow-[0_1px_5px_rgba(0,0,0,0.15)]">
          {comment}
        </div>
      </div>
    </div>
  );
}
