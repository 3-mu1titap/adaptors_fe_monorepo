'use client';
import { Button } from '@repo/ui/components/ui/button';
import useMobile from '@repo/ui/hooks/use-mobile.tsx';
import { cn } from '@repo/ui/lib/utils';
import { TopCategoryType } from '@repo/ui/types/CommonType.js';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';

export default function CategoriesSection({
  categoryParam,
  categories,
  text,
}: {
  categoryParam: string;
  categories: TopCategoryType[];
  type?: string;
  flip?: boolean;
  text: string;
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();
  const handleCategoryClick = (activeCategory: string) => {
    router.replace(`/mentoring?category=${activeCategory}&page=1`);
  };

  const handleChevronButton = () => {
    setIsOpen((prev) => !prev);
  };

  const sliceNumber = !isOpen && isMobile ? 7 : categories.length;

  return (
    <div className="mx-auto w-full mb-10 max-w-[1024px]">
      <h2 className={`text-[1rem] font-semibold flex gap-2 items-center mb-6`}>
        <ChevronRight
          className={`w-5 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
          onClick={handleChevronButton}
        />
        {text}
      </h2>
      <Suspense
        fallback={
          <div className="flex flex-wrap">
            {[...Array(24)].map((_, index) => (
              <div
                key={index}
                className="w-[80px] h-[40px] bg-gray-300 animate-pulse mb-2 mr-2"
              ></div>
            ))}
          </div>
        }
      >
        <div className="backdrop-blur-lg mx-auto w-full px-auto mb-8">
          {categories.slice(0, sliceNumber).map((category, index) => (
            <Button
              key={index}
              className={cn(
                'mr-2 mb-2 opacity-80 bg-black hover:bg-yellow-500 text-sm',
                categoryParam === category.topCategoryCode &&
                  'bg-adaptorsYellow font-extrabold text-black'
              )}
              title={category.topCategoryName}
              onClick={() => handleCategoryClick(category.topCategoryCode)}
            >
              {`${category.imageUrl ? category.imageUrl : ''} 
            ${category.topCategoryName}`}
            </Button>
          ))}
        </div>
      </Suspense>
    </div>
  );
}
