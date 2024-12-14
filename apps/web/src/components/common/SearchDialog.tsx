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

import Link from 'next/link';
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
      // console.log(data);
      setSuggestedName(data);
    };
    fetchData();
  }, 300);

  const routeToSearchPage = () => {
    if (value) {
      router.push(`/search/${value}`);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const term = (e.target as HTMLInputElement).value;
      handleSearch(term);

      if (term.trim()) {
        router.push(`/search/${value}`);
      }
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
                    onClick={(e) => {
                      if (item.name === '검색어를 입력해주세요') {
                        e.preventDefault();
                        return;
                      }
                    }}
                  >
                    {item.name === '검색어를 입력해주세요' ? (
                      <> {item.name}</>
                    ) : (
                      <Link href={`/search/${item.name}`}>{item.name}</Link>
                    )}
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

{
  /* <DialogFooter>
<Link href={`/search/${encodeURIComponent(name)}`}>
  <Button
    className="bg-yellow-200 hover:bg-black hover:text-white"
    type="submit"
  >
    Save changes
  </Button>
</Link>
</DialogFooter> */
}
