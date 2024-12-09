'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { SearchMentoringListType } from '@repo/ui/types/CommonType.ts';
import CustomFitImage from './CustomFitImage';
import { Badge } from '../badge';
import {
  ChevronDown,
  CreditCard,
  FileEdit,
  Keyboard,
  MoreVertical,
  PlusSquare,
  Settings,
  Trash2,
  User,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@repo/ui/components/ui/dropdown';
import { Button } from '../button';
import { DropdownMenuShortcut } from '../dropdown';

function CustomTableBody({
  data,
  checkedId,
  setCheckedId,
}: {
  data: SearchMentoringListType[];
  checkedId: string[];
  setCheckedId: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const router = useRouter();
  return (
    <tbody>
      {data.map((data) => (
        <tr
          key={data.mentoringUuid}
          className="text-[0.7rem] border-b-[0.0625rem] border-[#E5E5E5] hover:bg-[#FFF9E8] h-[3.5rem] cursor-pointer"
          onClick={() => {
            router.push(`/mentor/mentoring/${data.mentoringUuid}`);
          }}
        >
          <td
            className="text-center pt-1.5 w-[4rem] cursor-default"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <input
              type="checkbox"
              className="size-4 appearance-none rounded-sm border border-slate-300 accent-[#FEAA00] bg-white checked:bg-adaptorsYellow checked:border-transparent"
              onChange={(e) => {
                //상위 onClick 이벤트를 막기 위해 stopPropagation
                e.stopPropagation();
                if (e.target.checked) {
                  setCheckedId([...checkedId, data.mentoringUuid]);
                } else {
                  setCheckedId(
                    checkedId.filter((id) => id !== data.mentoringUuid)
                  );
                }
              }}
              checked={checkedId.includes(data.mentoringUuid)}
            />
          </td>
          {/* <td className="px-4">{data.mentoringUuid.slice(0, 4)}</td> */}
          <td
            className="px-4 w-[10rem] overflow-hidden whitespace-nowrap"
            style={{
              maxWidth: '10rem',
              textOverflow: 'ellipsis',
            }}
          >
            {data.name}
          </td>
          <td className="px-4 flex justify-start items-center py-4">
            <CustomFitImage
              src={data.thumbnailUrl}
              alt={data.name}
              className="w-16 h-auto overflow-hidden"
            />
          </td>
          <td
            className="px-4 w-[20rem] overflow-hidden whitespace-nowrap"
            style={{
              maxWidth: '20rem',
              textOverflow: 'ellipsis',
            }}
          >
            {data.description}
          </td>
          <td className="px-4">
            {data.isAvailable ? (
              <Badge
                variant="default"
                className="bg-adaptorsYellow text-white text-sm hover:bg-adaptorsYellow"
              >
                open
              </Badge>
            ) : (
              <Badge
                variant="outline"
                className="text-sm bg-slate-300 text-white"
              >
                ready
              </Badge>
            )}
          </td>
          <td className="px-4">{data.nowSessionCount}</td>
          <td className="px-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <MoreVertical className="w-5 h-5 text-black" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>mentoring menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <FileEdit />
                    <span>Edit</span>
                    <DropdownMenuShortcut>⇧⌘E</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Trash2 />
                    <span>Delete</span>
                    <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <PlusSquare />
                    <span>add session</span>
                    <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  {/* <DropdownMenuItem>
                    <Keyboard />
                    <span>Keyboard shortcuts</span>
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem> */}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default CustomTableBody;
