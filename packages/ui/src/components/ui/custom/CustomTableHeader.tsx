import type { TableHeaderPropsType } from '@repo/ui/types/CommonType.ts';
import { MoreVertical } from 'lucide-react';
import React from 'react';

function CustomTableHeader({
  items,
  handleChange,
}: {
  items: TableHeaderPropsType[];
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <thead className="w-full bg-slate-200">
      <tr className="text-[0.75rem] text-left h-[3rem]">
        <th className="text-center pt-1.5 px-4">
          <input
            type="checkbox"
            className="size-4 appearance-none rounded-sm border border-slate-300 accent-[#FEAA00] bg-white checked:bg-adaptorsYellow checked:border-transparent"
            onChange={handleChange}
          />
        </th>
        {/* ICON 또는 onClick 이 있을경우 */}
        {items.map(
          (item) =>
            item.name !== 'no' && (
              <th
                key={item.id}
                className={`px-4 text-left`}
                onClick={item.onClick}
              >
                {item.name}
                {item.icon}
              </th>
            )
        )}
      </tr>
    </thead>
  );
}

export default CustomTableHeader;
