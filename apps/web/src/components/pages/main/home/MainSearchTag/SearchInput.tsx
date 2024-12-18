'use client';

import {
  getSuggestedName,
  SuggestedNames,
} from '@repo/web/actions/search/elasticSearch';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import SearchIcon from '../../../../assets/icons/Search';

function SearchInput({ name }: { name: string }) {
  const [key, setKey] = useState(0);
  const [value, setValue] = useState(name ? name : '');
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [suggestedName, setSuggestedName] = useState<SuggestedNames[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const suggestionContainerRef = useRef<HTMLUListElement | null>(null);
  const router = useRouter();

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault(); // 기본 동작 방지
    e.stopPropagation(); // 이벤트 버블링 중단

    setValue(name);
    console.log('Selected name:', name); // 디버깅용 로그

    router.push(`/mentoring?name=${name}&isDirect=false`);
    router.refresh();
    setIsFocused(false);
  };

  const handleSearch = useDebouncedCallback((term) => {
    if (!term) {
      setSuggestedName([]);
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
      router.push(`/mentoring?name=${value}&isDirect=true`);
      router.refresh();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (focusedIndex !== null && suggestedName[focusedIndex]?.name) {
        setValue(suggestedName[focusedIndex].name);
        router.push(
          `/mentoring?name=${suggestedName[focusedIndex].name}&isDirect=false`
        );
        router.refresh();
      } else {
        router.push(`/mentoring?name=${value}&isDirect=true`);
        router.refresh();
      }
      setIsFocused(false); // Focus 해제
    } else if (e.key === 'ArrowDown') {
      setFocusedIndex((prevIndex) =>
        prevIndex === null
          ? -1
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

  const handleClickSuggestion = (name: string) => {
    setValue(name);
    console.log('실행됨', name);
    router.push(`/mentoring?name=${name}&isDirect=false`); // router.push 사용
    router.refresh();
    setIsFocused(false); // 클릭 시 focus 해제
  };

  return (
    <div className="md:col-span-2 py-4  flex flex-col items-center w-full relative">
      <div className="relative w-full max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search everything here..."
          className="z-100 w-full px-4 py-3 rounded-lg bg-[#FFF9E7] border text-sm text-gray-400 border-[#FFD84D] focus:outline-none "
          id="Search"
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            handleSearch(e.target.value);
            setFocusedIndex(null);
            setValue(e.target.value);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
        />
        <div
          className="absolute inset-5 flex items-center justify-end"
          onClick={routeToSearchPage}
        >
          <SearchIcon className="mr-0 h-5 w-5 text-[#969696]" />
        </div>
      </div>
      {isFocused && suggestedName.length > 0 && (
        <ul
          ref={suggestionContainerRef}
          className=" rounded-lg pt-[1px] border-[#FFD84D] border-x-[1px] border-b-[1px] bg-white absolute top-[53px] w-full z-20 max-w-lg max-h-[250px] overflow-y-auto scrollable scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
        >
          {suggestedName.map((item, index) => (
            <li
              className={`px-2 py-3 ${
                focusedIndex === index ? 'bg-yellow-100 z-100' : ''
              } ${
                item.name === '검색어를 입력해주세요'
                  ? 'text-center text-gray-400 hover:bg-yellow-100 cursor-default'
                  : ' cursor-pointer hover:bg-yellow-100 border-b-[1px] text-sm'
              } text-md`}
              key={index}
              onMouseEnter={() => setFocusedIndex(index)}
              onClick={() => handleClickSuggestion(item.name)} // 클릭 시 router.push 사용
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchInput;
