'use client';
import { Button } from '@repo/ui/components/ui/button';
import { cn } from '@repo/ui/lib/utils';
import { TopCategoryType } from '@repo/ui/types/CommonType.js';
import ChevronText from '@repo/web/components/ui/Text/ChevronText';
import { useRouter } from 'next/navigation';

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
  const handleCategoryClick = (activeCategory: string) => {
    router.replace(`/mentoring?category=${activeCategory}`);
  };
  return (
    <>
      <ChevronText text={text} className="mb-6" />
      <nav className="backdrop-blur-lg mx-auto w-full px-auto">
        {categories.map((category, index) => (
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
      </nav>
    </>
  );
}
