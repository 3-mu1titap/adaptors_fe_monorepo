import React from 'react';

function CustomDateBadge({ date }: { date: string }) {
  return (
    <p className="px-4 py-1 text-md bg-slate-100 rounded-full max-w-fit">
      {date}
    </p>
  );
}

export default CustomDateBadge;
