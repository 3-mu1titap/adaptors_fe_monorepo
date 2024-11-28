import React from 'react';
import { Card, CardContent, CardHeader } from '@repo/ui/components/ui/card';
import { MentorMentoringListDataType } from '@components/types/mentor/mentorType';
import { GetMentoringSessionList } from 'src/actions/mentoring/mentoringAction';
import Image from 'next/image';

function MentoringCard({ item }: { item: MentorMentoringListDataType }) {
  return (
    <Card className="max-w-[250px] min-w-[200px] border border-b-gray-200 flex flex-col items-center justify-center">
      <CardHeader>
        <span className="text-xl font-bold">{item.name}</span>
      </CardHeader>

      <CardContent className="flex flex-col justify-center space-y-6">
        {item.thumbnailUrl && (
          <div className="w-[170px] h-[110px]">
            <Image
              width={170}
              height={80}
              alt="dummy"
              src={`${item.thumbnailUrl}`}
              className="rounded-lg object-cover w-[170px] h-[110px]"
            />
          </div>
        )}
        <span className="text-md text-black text-center">
          {item.description}
        </span>
      </CardContent>
    </Card>
  );
}

export default MentoringCard;
