'use client';
import React, { useEffect, useState } from 'react';
import {
  CustomTableHeader,
  CustomTableBody,
  CustomButton,
} from '@repo/ui/components/ui/custom/index';
import type { SearchMentoringListType } from '@repo/ui/types/CommonType.ts';
import { PlusIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ListHeadItems = [
  {
    id: 1,
    name: 'no',
  },
  { id: 2, name: 'name' },
  {
    id: 3,
    name: 'thumbnail',
  },
  { id: 4, name: 'description' },
  { id: 5, name: 'active' },
  { id: 6, name: 'session' },
  { id: 7, name: '' },
];

function MentoringByMentor({
  mentoringListData,
}: {
  mentoringListData: SearchMentoringListType[];
}) {
  const router = useRouter();
  const [checkedId, setCheckedId] = useState<string[]>([]);
  const [allChecked, setAllChecked] = useState<boolean>(false);

  useEffect(() => {
    if (checkedId.length === mentoringListData.length) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [checkedId]);

  const handleAllCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckedId(mentoringListData.map((data) => data.mentoringUuid));
    } else {
      setCheckedId([]);
    }
  };
  const handleOnClick = () => {
    router.push('/mentor/mentoring/add');
  };
  return (
    <div className="flex flex-col w-full">
      <CustomButton
        text="멘토링 추가"
        className="max-w-fit bg-black text-white text-lg font-extrabold mb-5 px-5 hover:bg-adaptorsYellow"
        icon={<PlusIcon strokeWidth={3} />}
        onClick={handleOnClick}
      />
      <table className="bg-white w-full whitespace-nowrap shadow-lg rounded-lg overflow-hidden overflow-x-scroll">
        <CustomTableHeader
          items={ListHeadItems}
          handleChange={handleAllCheck}
        />
        <CustomTableBody
          data={mentoringListData}
          checkedId={checkedId}
          setCheckedId={setCheckedId}
        />
      </table>
    </div>
  );
}
export default MentoringByMentor;
