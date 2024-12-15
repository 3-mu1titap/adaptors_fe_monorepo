import React from 'react';

function VoltCargeListCard({ item }: { item: any }) {
  const formatDate = (dateString: Date): string => {
    const date = new Date(dateString); // 문자열을 Date 객체로 변환
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`; // 원하는 형식으로 반환
  };

  return (
    <li className="flex w-full py-5 ml-3 gap-x-4 text-black border-b-2 border-gray-200">
      <span className="text-black font-bold text-xl">
        {formatDate(item.date)}
      </span>
      <span className="text-black font-bold text-xl">{item.point}</span>
    </li>
  );
}

export default VoltCargeListCard;
