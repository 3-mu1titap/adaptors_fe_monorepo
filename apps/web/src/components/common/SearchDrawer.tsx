'use client';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@repo/ui/components/ui/drawer';
import { Input } from '@repo/ui/components/ui/input';
import {
  getSuggestedName,
  SuggestedNames,
} from '@repo/web/actions/search/elasticSearch';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export function SearchDrawer({
  isOpen,
  openCloser,
}: {
  isOpen: boolean;
  openCloser: () => void;
}) {
  const [value, setValue] = useState('');
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [suggestedName, setSuggestedName] = useState<SuggestedNames[]>([
    { name: '검색어를 입력해주세요' },
  ]);
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    if (!term) {
      setSuggestedName([{ name: '검색어를 입력해주세요' }]);
      return;
    }
    setValue(term);
    const fetchData = async () => {
      const data = await getSuggestedName(term); // term 전달
      setSuggestedName(data);
    };
    fetchData();
  }, 300);

  const routeToSearchPage = async (searchValue: string, isDirect: boolean) => {
    if (searchValue) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1초 대기
      router.push(`/mentoring?name=${searchValue}&isDirect=${isDirect}`);
      openCloser();
    }
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (focusedIndex !== null && suggestedName[focusedIndex]?.name) {
        await routeToSearchPage(suggestedName[focusedIndex].name, false); // 추천 검색
      } else {
        await routeToSearchPage(value, true); // 직접 입력
      }
    } else if (e.key === 'ArrowDown') {
      setFocusedIndex((prevIndex) =>
        prevIndex === null
          ? 0
          : Math.min(prevIndex + 1, suggestedName.length - 1)
      );
    } else if (e.key === 'ArrowUp') {
      setFocusedIndex((prevIndex) =>
        prevIndex === null
          ? suggestedName.length - 1
          : Math.max(prevIndex - 1, 0)
      );
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={openCloser} direction="top">
      <DrawerContent className="border-none h-[90%]">
        <DrawerHeader>
          <DrawerTitle className="text-md text-black font-bold">
            search
          </DrawerTitle>
          <DrawerDescription className="text-lg text-black">
            Search Mentoring here!
          </DrawerDescription>
        </DrawerHeader>
        <div className="mt-4 h-full">
          <div className="relative px-4">
            <Input
              id="Search"
              type="text"
              placeholder="Search here...."
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
              className="text-md"
              autoFocus
            />
            <Search
              className="absolute right-6 top-2.5"
              color="#A09F9F"
              size={18}
              strokeWidth={1}
              onClick={() => routeToSearchPage(value, true)}
            />
          </div>
          {suggestedName && (
            <ul className="mt-[2px] max-h-[420px] overflow-y-scroll py-5 px-4">
              {Array.isArray(suggestedName) ? (
                suggestedName.map((item, index) => (
                  <li
                    className={`px-2 py-3 ${
                      focusedIndex === index
                        ? 'bg-yellow-100' // Highlight focused suggestion
                        : ''
                    } ${
                      item.name === '검색어를 입력해주세요'
                        ? 'text-center text-gray-400 hover:bg-yellow-100 cursor-default'
                        : ' cursor-pointer hover:bg-yellow-100 border-b-[1px]'
                    } text-md`}
                    key={index}
                    onMouseEnter={() => setFocusedIndex(index)}
                    onClick={async () => {
                      setValue(item.name); // 상태 업데이트
                      router.push(
                        `/mentoring?name=${item.name}&isDirect=false`
                      ); // name 직접 사용
                      router.refresh();
                      openCloser();
                    }}
                  >
                    {item.name}
                  </li>
                ))
              ) : (
                <li className="text-center text-gray-400 hover:bg-transparent cursor-default"></li>
              )}
            </ul>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
