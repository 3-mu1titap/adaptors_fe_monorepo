'use client';

import { SeparateContainer } from '@repo/admin/components/common/layouts/SeperateContainer';
import { Button } from '@repo/ui/components/ui/button';
import {
  CustomButton,
  CustomLikeButton,
  CustomMentorDescription,
  CustomMentorProfilePhoto,
  CustomNowDate,
  CustomReviewerItem,
  CustomSessionInfoTags,
  CustomSessionList,
  CustomShareButton,
} from '@repo/ui/components/ui/custom/index';
import type {
  MentoringDataType,
  MentoringResult,
  SessionUser,
} from '@repo/ui/types/CommonType.ts';
import Link from 'next/link';
import { MentoringSession, SessionAddModal } from './SessionAddModal';
import { useState } from 'react';
import { PostMentoringSession } from '@repo/admin/actions/mentoring/mentoringAction';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

interface HomeDashboardProps {
  mentoringSessionList: MentoringResult[];
  MentoringInfoData: MentoringDataType;
  initialUserData: SessionUser[];
  mentoringUuid?: string;
}

function HomeDashboard({
  mentoringSessionList,
  MentoringInfoData,
  initialUserData,
  mentoringUuid,
}: HomeDashboardProps) {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = async (session: MentoringSession) => {
    const payload = {
      ...session,
      mentoringUuid: mentoringUuid ? mentoringUuid : '',
    };
    const res: number | false = await PostMentoringSession({ payload });
    if (res) {
      Swal.fire({
        toast: true,
        icon: 'info',
        title: `총 ${res}개의 세션이 생성되었습니다.`,
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText: '확인',
        customClass: {
          title: 'text-lg font-semibold text-gray-800 text-center',
          confirmButton:
            'col-span-3 bg-adaptorsYellow text-white py-2 px-4 rounded hover:bg-amber-500 !text-md',
          actions: '!grid !grid-cols-4 !justify-center',
        },
      });
      setIsModalOpen(false);
      router.refresh();
    } else {
      Swal.fire({
        toast: true,
        icon: 'warning',
        title: '세션 생성 실패',
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText: '확인',
        customClass: {
          title: 'text-lg font-semibold text-gray-800 text-center',
          confirmButton:
            'col-span-3 bg-adaptorsYellow text-white py-2 px-4 rounded hover:bg-amber-500 !text-md',
          actions: '!grid !grid-cols-4 !justify-center',
        },
      });
    }
  };

  return (
    <>
      <SeparateContainer.LeftSide>
        <CustomMentorProfilePhoto profileImgUrl="https://i.pinimg.com/736x/6d/98/bd/6d98bd0a456e85177d8fbd65a54be284.jpg" />
        <h1 className="text-xl font-bold my-3">@ Mentor</h1>
        <div className="flex justify-between items-center w-full mb-3 gap-3">
          <CustomReviewerItem
            initialUserData={initialUserData}
            userCount={10}
            reviewCount={293938}
          />
          <CustomLikeButton count={200823} />
        </div>
        <CustomShareButton />
        {/* <CustomNowDate /> */}
      </SeparateContainer.LeftSide>
      <SeparateContainer.RightSide>
        <CustomSessionInfoTags />
        {MentoringInfoData && (
          <>
            <CustomMentorDescription
              mentoringInfoData={MentoringInfoData}
              initialUserData={initialUserData}
            />
            <Button
              onClick={handleOnClick}
              className="bg-adaptorsYellow hover:bg-black font-bold"
            >
              세션 추가하기
            </Button>
            <SessionAddModal
              isOpen={isModalOpen}
              onClose={handleModalClose}
              onSubmit={handleModalSubmit}
            />
          </>
        )}

        <CustomSessionList
          filteredList={mentoringSessionList}
          mentoringName={MentoringInfoData}
          type="admin"
        />
      </SeparateContainer.RightSide>
    </>
  );
}

export default HomeDashboard;
