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

  const routeToSearchPage = () => {
    if (value) {
      router.push(`/mentoring?name=${value}&isDirect="true"`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const term = (e.target as HTMLInputElement).value;
      handleSearch(term);

      if (term.trim()) {
        router.push(`/mentoring?name=${value}&isDirect="true"`);
      }
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
              onClick={routeToSearchPage}
            />
          </div>
          {suggestedName && (
            <ul className="mt-[2px] max-h-[420px] overflow-y-scroll py-5 px-4">
              {Array.isArray(suggestedName) ? (
                suggestedName.map((item, index) => (
                  <li
                    className={`px-2 py-3 hover:bg-gray-200 cursor-pointer hover:bg-adaptorsYellow/40  border-b-[1px] text-md ${item.name === '검색어를 입력해주세요' ? 'border-none text-center text-gray-400' : ''}`}
                    key={index}
                  >
                    <Link
                      href={`/mentoring?name=${item.name}&isSuggestName=false`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))
              ) : (
                <li></li>
              )}
            </ul>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
