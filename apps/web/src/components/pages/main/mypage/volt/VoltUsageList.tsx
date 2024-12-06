import React from 'react';
import TextTitleSection from '../compoent/TextTitleSection';
import { GetMemberPointListDataType } from '@components/types/payment/paymentType';
function VoltUsageList({ item }: { item?: any }) {
  const formatDate = (dateString: Date): string => {
    const date = new Date(dateString); // 문자열을 Date 객체로 변환
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`; // 원하는 형식으로 반환
  };

  if (!item) return null; // 안전한 처리

  return (
    <>
      {item && item.isPayment === true ? (
        <div className="flex flex-col">
          <div className="flex w-full gap-x-20 ">
            <span className="text-black font-bold text-xl">
              {formatDate(item.date)}
            </span>
            <span className=" font-bold text-xl text-black">{item.point}</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex w-full gap-x-4 text-black">
            <span className="text-black font-bold text-xl">
              {formatDate(item.date)}
            </span>
            <span className="text-black font-bold text-xl">{item.point}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default VoltUsageList;
