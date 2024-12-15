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
  const [key, setKey] = useState(0);
  const [value, setValue] = useState('');
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [suggestedName, setSuggestedName] = useState<SuggestedNames[]>([
    { name: '검색어를 입력해주세요' },
  ]);
  const suggestionContainerRef = useRef<HTMLUListElement | null>(null); // Ref for suggestion list container
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    if (!term) {
      setSuggestedName([{ name: '검색어를 입력해주세요' }]);
      return;
    }
    setValue(term);
    const fetchData = async () => {
      const data = await getSuggestedName(term);
      setSuggestedName(data);
    };
    fetchData();
  }, 300);

  const routeToSearchPage = () => {
    if (value) {
      setKey((prevKey) => prevKey + 1);
      router.push(`/mentoring?name=${value}&isAutocomplete=true`);
      router.refresh();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (focusedIndex !== null && suggestedName[focusedIndex]?.name) {
        setValue(suggestedName[focusedIndex].name);
        router.push(
          `/mentoring?name=${suggestedName[focusedIndex].name}&isAutocomplete=false` //자동완성으로 추천받음
        );
        router.refresh();
      } else {
        router.push(`/mentoring?name=${value}&isAutocomplete=true`);
        router.refresh();
      }
    } else if (e.key === 'ArrowDown') {
      // Move focus down
      setFocusedIndex((prevIndex) =>
        prevIndex === null
          ? -1
          : Math.min(prevIndex + 1, suggestedName.length - 1)
      );
    } else if (e.key === 'ArrowUp') {
      // Move focus up
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

      // Adjust scrolling to keep the focused item visible
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
                handleSearch(e.target.value);
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
              onClick={routeToSearchPage}
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
                    onClick={() => {
                      setValue(item.name);
                      router.push(
                        `/mentoring?name=${value}&isAutocomplete=true`
                      );
                      router.refresh();
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
