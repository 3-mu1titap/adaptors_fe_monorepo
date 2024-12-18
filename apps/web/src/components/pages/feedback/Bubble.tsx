'use client';

export function Bubble({ comment }: { comment: string }) {
  return (
    <div className="relative w-full">
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
          className="absolute left-24 top-[-24px] w-0 h-0
          border-b-[26px] border-b-white
          border-l-[14.5px] border-l-transparent 
          border-r-[14.5px] border-r-transparent"
        />

        {/* Content Container */}
        <div className="absolute w-full rounded-md border border-gray-200 overflow-hidden bg-white shadow-[0_1px_5px_rgba(0,0,0,0.15)]">
          {/* <div className="flex flex-col">
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50">
              <MessageCircle className="w-4 h-4" />
              <span>답댓글 달기</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50">
              <Pencil className="w-4 h-4" />
              <span>수정하기</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-pink-500">
              <X className="w-4 h-4" />
              <span>삭제하기</span>
            </button>
          </div> */}
          {comment}
          {/* <div>{comment}</div> */}
        </div>
      </div>
    </div>
  );
}
