'use client';
import { TopCategoryType } from '@repo/ui/types/CommonType.js';
import ChevronText from '@repo/web/components/ui/Text/ChevronText';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function CategoriesSection({
  categoryParam,
  categorise,
  type = 'DOMAIN',
  flip = false,
  text,
}: {
  categoryParam: string;
  categorise: TopCategoryType[];
  type?: string;
  flip?: boolean;
  text: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false); // 상태 관리

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  const filteredCategories = categorise.filter(
    (category) => category.categoryType === type
  );

  return (
    <>
      <ChevronText text={text} />
      <nav className="backdrop-blur-lg mx-auto w-full max">
        <div
          className={`relative transition-all duration-300 ${
            isExpanded ? 'max-h-full' : 'max-h-[70px]'
          } overflow-hidden`}
        >
          <ul className="pt-6 flex justify-center gap-5 flex-wrap">
            {filteredCategories.map((category) => (
              <Link
                key={category.id}
                href={`/mentoring?category=${category.topCategoryCode}`}
                className={`bg-black hover:bg-adaptorsYellow/50 rounded-3xl text-white py-2 px-5 text-md ${
                  category.topCategoryCode === categoryParam
                    ? `text-extrabold`
                    : ``
                }`}
              >
                {category.topCategoryName}
              </Link>
            ))}
          </ul>
        </div>
        {filteredCategories.length > 1 && flip && (
          <button
            onClick={toggleExpanded}
            className="mt-2 w-full flex justify-center mx-auto px-4"
          >
            {!isExpanded ? (
              <ChevronDown size={20} color="black" />
            ) : (
              <ChevronUp size={20} color="black" />
            )}
          </button>
        )}
      </nav>
    </>
  );
}
