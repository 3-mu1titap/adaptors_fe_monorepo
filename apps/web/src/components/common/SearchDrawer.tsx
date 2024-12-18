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
  //검색어 입력값
  const [value, setValue] = useState('');
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [suggestedName, setSuggestedName] = useState<SuggestedNames[]>([
    { name: '검색어를 입력해주세요' },
  ]);
  const router = useRouter();

  //검색어 자동완성 fetch
  const handleSearch = useDebouncedCallback((term) => {
    if (!term) {
      setSuggestedName([{ name: '검색어를 입력해주세요' }]);
      return;
    }
    const fetchData = async () => {
      const data = await getSuggestedName(term); // term 전달
      setSuggestedName(data);
    };
    fetchData();
  }, 300);

  //엔터쳐서 검색
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('handleKeyDown', e.currentTarget.value); // e.target 대신 e.currentTarget 사용
    if (e.key === 'Enter') {
      router.push(`/mentoring?name=${e.currentTarget.value}&isDirect=true`);
      openCloser(); // 이 함수는 외부에서 정의되어 있어야 함
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
                setValue(e.target.value);
              }}
              className="text-md"
              autoFocus
            />
            <Search
              className="absolute right-6 top-2.5"
              color="#A09F9F"
              size={18}
              strokeWidth={1}
              onClick={() => {
                console.log(value);
                router.push(`/mentoring?name=${value}&isDirect=true`);
                openCloser();
              }}
            />
          </div>
          {suggestedName && (
            <ul className="mt-[2px] max-h-[420px] overflow-y-scroll py-5 px-4">
              {Array.isArray(suggestedName) ? (
                suggestedName.map((item, index) => (
                  <li
                    className={`px-2 py-3 ${
                      item.name === '검색어를 입력해주세요'
                        ? 'text-center text-gray-400 hover:bg-yellow-100 cursor-default'
                        : ' cursor-pointer hover:bg-yellow-100 border-b-[1px]'
                    } text-md`}
                    key={index}
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
