'use client';
import { Button } from '@repo/ui/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function MentoringContents({ content }: { content: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="relative w-full">
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-[9999px]' : 'max-h-[300px] sm:max-h-[500px]'
        }`}
      />
      {!isExpanded && (
        <div className="absolute bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      )}
      <div className="relative flex justify-center bottom-10 left-0">
        <Button
          onClick={toggleExpand}
          className="text-white bg-[#c5c5c5]/50 hover:bg-[#c5c5c5] rounded-3xl px-8 text-md"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-2" />
              <span>접기</span>
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-2" />
              <span>펼쳐보기</span>
            </>
          )}
        </Button>
      </div>
    </section>
  );
}
