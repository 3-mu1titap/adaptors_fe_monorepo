// utils/dateUtil.js
export const formatDate = (type: string, date?: Date | string) => {
  const d = typeof date === 'string' ? new Date(date) : date || new Date(); // 문자열이면 Date로 변환
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');

  switch (type) {
    case 'month':
      return `${year}-${month}`;
    case 'day':
      return `${year}-${month}-${day}`;
    case 'time':
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    default:
      return `${year}-${month}-${day}`; // 기본적으로 day까지 반환
  }
};

export const getDate = ({ date, type }: { date?: number; type: boolean }) => {
  const today = new Date();
  if (date) {
    today.setDate(today.getDate() + date);
  }
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  if (type) {
    return `${year}-${month}`;
  } else {
    return `${year}-${month}-${day}`;
  }
};
