import React from 'react';
import { Card, CardContent } from '@repo/ui/components/ui/card';
import Image from 'next/image';
import { SearchMentoringListType } from '@components/types/mentoring/mentoringTypes';
function SearhMentoringCard({ item }: { item: SearchMentoringListType }) {
  return (
    <Card className="max-w-[310px] min-h-[400px] rounded-xl h-auto border border-b-gray-200 flex flex-col items-center justify-center">
      <CardContent className="flex flex-col justify-center space-y-4">
        {item.thumbnailUrl && (
          <div className="relative w-[285px] h-[200px] rounded-xl overflow-hidden mb-4">
            <Image
              fill
              alt="dummy"
              src={`${item.thumbnailUrl}`}
              className="object-cover"
            />
          </div>
        )}

        <div className="flex flex-col">
          <span className="text-xl font-bold self-center">{item.name}</span>
          <span className="text-md text-black text-center mt-2">
            {item.description}
          </span>

          {item.isAvailable === true ? (
            <button className="rounded-xl h-12 w-[16rem] bg-yellow-200 mx-4 py-2 mt-10 hover:bg-black hover:text-white">
              멘토링 신청
            </button>
          ) : (
            <button className="rounded-xl h-12 w-[16rem] bg-slate-900 mx-4 py-2 mt-10 text-white">
              종료된 멘토링
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default SearhMentoringCard;
