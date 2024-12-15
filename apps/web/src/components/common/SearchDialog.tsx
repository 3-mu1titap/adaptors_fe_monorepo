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
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export function SearchDialog({
  isOpen,
  openCloser,
}: {
  isOpen: boolean;
  openCloser: () => void;
}) {
  const [key, setKey] = useState(0);
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
      const data = await getSuggestedName(term);
      setSuggestedName(data);
    };
    fetchData();
  }, 300);

  const routeToSearchPage = () => {
    if (value) {
      setKey((prevKey) => prevKey + 1);
      router.push(`/search/${value}?isAutocomplete=true`);
      router.refresh(); // 동일한 URL에서도 페이지 강제 리렌더링
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`/search/${value}?isAutocomplete=true`);
      router.refresh(); // 동일한 URL에서도 페이지 강제 리렌더링
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={openCloser}>
      <DialogContent className="md:max-w-[600px] md:h-[400px] flex flex-col gap-0">
        <DialogHeader>
          <DialogTitle>Search Mentoring</DialogTitle>
          <DialogDescription>Search Mentoring here!</DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <div className="relative">
            <Input
              id="Search"
              type="text"
              placeholder="Search here...."
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
              className="text-2xl"
              autoFocus
            ></Input>
            <Search
              className="absolute right-3 top-2"
              color="#A09F9F"
              size={20}
              strokeWidth={1}
              onClick={routeToSearchPage}
            />
          </div>
          {suggestedName && (
            <ul className="mt-2 max-h-[250px] overflow-y-scroll py-5">
              {Array.isArray(suggestedName) ? (
                suggestedName.map((item, index) => (
                  <li
                    className={`px-2 py-3 ${
                      item.name === '검색어를 입력해주세요'
                        ? 'text-center text-gray-400 hover:bg-transparent cursor-default'
                        : 'hover:bg-gray-200 cursor-pointer hover:bg-adaptorsYellow/40 border-b-[1px]'
                    } text-md`}
                    key={index}
                    onClick={() => {
                      setValue(item.name);
                      router.push(`/search/${item.name}?isAutocomplete=false`);
                      router.refresh(); // 동일한 URL에서도 페이지 강제 리렌더링
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
