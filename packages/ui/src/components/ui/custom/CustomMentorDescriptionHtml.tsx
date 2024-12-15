'use client';
import { Button } from '@repo/ui/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function CustomMentorDescriptionHtml({
  content,
}: {
  content: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState<number | 'auto'>(300); // 초기 높이
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    if (isExpanded) {
      // 접을 때: 고정 높이로 전환
      setContentHeight(300);
    } else {
      // 펼칠 때: 컨텐츠 전체 높이 계산
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    }
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    // 화면 크기 조정 시 높이 재계산
    const handleResize = () => {
      if (contentRef.current && isExpanded) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  return (
    <section className="relative w-full">
      <div
        ref={contentRef}
        dangerouslySetInnerHTML={{ __html: content }}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
        style={{ height: isExpanded ? contentHeight : 300 }}
      />
      {!isExpanded && (
        <div className="absolute bottom-10 left-0 right-0 h-16 bg-gradient-to-t from-[#c9c9c9]/70 to-transparent pointer-events-none" />
      )}
      <div className="relative flex justify-center -bottom-2 left-0">
        <Button
          onClick={toggleExpand}
          className="text-white bg-[#c5c5c5]/90 hover:bg-[#c5c5c5] rounded-3xl px-6 text-md"
        >
          <ChevronDown
            className={`w-4 h-4 mr-2 transform transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
          <span>{isExpanded ? '접기' : '펼쳐보기'}</span>
        </Button>
      </div>
    </section>
  );
}
