const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // 12-hour format
  return `${period} ${formattedHours}:${String(now.getMinutes()).padStart(2, '0')}`;
};

const NowDate = () => {
  const now = new Date();
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const formattedDate = `${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}.${weekDays[now.getDay()]}`;

  return (
    <div className="bg-[#FACE00] bg-opacity-50 p-4 rounded-xl mb-5">
      <p className="text-white mb-2">now time</p>
      <div className="flex justify-center gap-5 text-black font-medium">
        <span className="bg-white text-adaptorsYellow text-3xl px-3 py-2 font-semibold rounded-xl">
          {formattedDate}
        </span>
        <span className="bg-white text-adaptorsYellow text-3xl px-3 py-2 font-semibold rounded-xl">
          {getCurrentTime()}
        </span>
      </div>
    </div>
  );
};

export default NowDate;
