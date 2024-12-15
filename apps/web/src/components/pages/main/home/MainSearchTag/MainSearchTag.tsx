'use client';
import { Button } from '@repo/ui/components/ui/button';
import { SearchDialog } from '@repo/web/components/common/SearchDialog';
import { SearchDrawer } from '@repo/web/components/common/SearchDrawer';
import { useEffect, useRef, useState } from 'react';
import SearchIcon from '../../../../assets/icons/Search';

function MainSearchTag({ name }: { name?: string }) {
  const [shortCutKey, setShortCutKey] = useState('⌘K');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMacOs = navigator.userAgent.includes('Mac');
    setShortCutKey(isMacOs ? '⌘K' : 'Ctrl + K');

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (isMacOs && e.metaKey && e.key === 'k') ||
        (!isMacOs && e.ctrlKey && e.key === 'k')
      ) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="md:col-span-2 py-4 px-4">
      <div
        className="relative max-w-lg mx-auto"
        onClick={() => setIsOpen(true)}
      >
        <input
          ref={searchInputRef}
          type="text"
          placeholder={name ? name : 'Search everything here...'}
          className="w-full px-4 py-3 rounded-lg bg-[#FFF9E7] border text-sm text-gray-400 border-[#FFD84D] focus:outline-none focus:ring-2 focus:ring-[#FFD84D]"
        />
        <div className="absolute inset-5 flex items-center justify-end">
          <SearchIcon className="mr-5 h-5 w-5 text-[#969696]" />
          <Button
            variant="outline"
            size="sm"
            className="bg-[#111111] text-white hover:bg-[#333333] hover:text-white h-[24px]"
          >
            <span
              className="text-sm font-semibold"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              {shortCutKey}
            </span>
          </Button>
        </div>
      </div>

      {isMobile ? (
        <SearchDrawer isOpen={isOpen} openCloser={() => setIsOpen(false)} />
      ) : (
        <SearchDialog isOpen={isOpen} openCloser={() => setIsOpen(false)} />
      )}
    </div>
  );
}
export default MainSearchTag;
