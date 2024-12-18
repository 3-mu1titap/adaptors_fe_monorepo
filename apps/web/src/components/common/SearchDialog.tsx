'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@repo/ui/components/ui/dialog';
import { Input } from '@repo/ui/components/ui/input';
import {
  getSuggestedName,
  SuggestedNames,
} from '@repo/web/actions/search/elasticSearch';
import { Search } from 'lucide-react';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export function SearchDialog({
  isOpen,
  openCloser,
  name,
}: {
  isOpen: boolean;
  openCloser: () => void;
  name?: string;
}) {
  const [value, setValue] = useState('');
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [suggestedName, setSuggestedName] = useState<SuggestedNames[]>([
    { name: '검색어를 입력해주세요' },
  ]);
  const suggestionContainerRef = useRef<HTMLUListElement | null>(null); // Ref for suggestion list container
  const router = useRouter();
  const handleSearch = useDebouncedCallback(() => {
    if (!value) {
      setSuggestedName([{ name: '검색어를 입력해주세요' }]);
      return;
    }
    const fetchData = async () => {
      const data = await getSuggestedName(value);
      setSuggestedName(data);
    };
    fetchData();
  }, 100);

  const routeToSearchPage = async (searchValue: string, isDirect: boolean) => {
    if (searchValue) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1초 대기
      router.push(`/mentoring?name=${searchValue}&isDirect=${isDirect}`);
      router.refresh();
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

  useEffect(() => {
    if (
      focusedIndex !== null &&
      suggestionContainerRef.current &&
      suggestionContainerRef.current.children[focusedIndex]
    ) {
      const focusedItem = suggestionContainerRef.current.children[
        focusedIndex
      ] as HTMLElement;

      const container = suggestionContainerRef.current;
      const containerRect = container.getBoundingClientRect();
      const focusedRect = focusedItem.getBoundingClientRect();

      if (focusedRect.top < containerRect.top) {
        container.scrollTop -= containerRect.top - focusedRect.top;
      } else if (focusedRect.bottom > containerRect.bottom) {
        container.scrollTop += focusedRect.bottom - containerRect.bottom;
      }
    }
  }, [focusedIndex]);

  return (
    <Dialog open={isOpen} onOpenChange={openCloser}>
      <DialogContent className="md:max-w-[600px] md:h-[400px] flex flex-col gap-0 ring-gray-300 ring-[4px]">
        <DialogHeader>
          <DialogTitle>Search Mentoring</DialogTitle>
          <DialogDescription>Search Mentoring here!</DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <div className="relative">
            <Input
              id="Search"
              type="text"
              placeholder={name ? name : 'Search here....'}
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                setValue(e.target.value);
                handleSearch();
                setFocusedIndex(null); // Reset focus on input change
              }}
              className="text-2xl ring-yellow-200 outline-none ring-2 focus:ring-yellow-200 focus:ring-4"
              autoFocus
            />
            <Search
              className="absolute right-3 top-2"
              color="#A09F9F"
              size={20}
              strokeWidth={1}
              onClick={() => routeToSearchPage(value, true)}
            />
          </div>
          {suggestedName && (
            <ul
              ref={suggestionContainerRef}
              className="mt-2 max-h-[250px] overflow-y-auto scrollable py-5 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
            >
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
      </DialogContent>
    </Dialog>
  );
}
