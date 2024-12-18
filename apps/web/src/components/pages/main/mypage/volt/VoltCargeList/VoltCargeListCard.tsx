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
    <li className="flex items-center justify-between w-full py-4 px-6 border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">날짜</span>
        {formatDate(item.date)}
      </div>
      <div className="flex flex-col items-end">
        <span className="text-sm text-gray-500">
          {' '}
          {item.point >= 0 ? '충전' : '사용'}
        </span>
        <span
          className={`text-lg font-bold ${item.point >= 0 ? 'text-black' : 'text-red-600'}`}
        >
          {item.point >= 0 ? '+' : ''}
          {item.point.toLocaleString()}V
        </span>
      </div>
    </li>
  );
}

export default VoltCargeListCard;
