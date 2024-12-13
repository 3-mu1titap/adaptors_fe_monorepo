import { Card, CardContent } from '@repo/ui/components/ui/card';
import { MentorMentoringListDataType } from '@repo/web/components/types/mentor/mentorType';
import Image from 'next/image';

function CurrentMentoringCard({ item }: { item: MentorMentoringListDataType }) {
  return (
    <li className="rounded-xl h-auto border border-b-gray-200 flex flex-col">
      <div className="flex flex-col">
        {item.thumbnailUrl && (
          <div className=" rounded-xl overflow-hidden mb-4">
            <Image
              width={16}
              height={18}
              layout="responsive"
              alt="dummy"
              src={`${item.thumbnailUrl}`}
              className="object-cover "
            />
          </div>
        )}

        <div className="flex flex-col">
          <span className="text-xl font-bold self-center text-wrap line-clamp-1">
            {item.name}
          </span>
          <span className="text-md text-black text-center mt-2 line-clamp-3">
            {item.description}
          </span>

          <button
            className="rounded-xl h-12 bg-yellow-200 py-2 mt-10
          "
          >
            멘토링 신청
          </button>
        </div>
      </div>
    </li>
  );
}

export default CurrentMentoringCard;
