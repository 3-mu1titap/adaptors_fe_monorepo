'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useLayoutEffect, useRef, useState } from 'react';

interface Category {
  id: string;
  name: string;
}

interface AnimatedCategoriesProps {
  categories: Category[];
}

export function AnimatedCategories({ categories }: AnimatedCategoriesProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const containerRef = useRef<HTMLUListElement>(null);
  const [indicatorStyles, setIndicatorStyles] = useState({ left: 0, width: 0 });
  const router = useRouter();
  const updateIndicatorStyles = () => {
    if (containerRef.current) {
      const activeElement = containerRef.current.querySelector(
        `[aria-current="page"]`
      ) as HTMLElement;
      if (activeElement) {
        setIndicatorStyles({
          left: activeElement.offsetLeft,
          width: activeElement.offsetWidth,
        });
      }
    }
  };

  useLayoutEffect(() => {
    updateIndicatorStyles();
    window.addEventListener('resize', updateIndicatorStyles);
    return () => {
      window.removeEventListener('resize', updateIndicatorStyles);
    };
  }, [activeCategory]); // activeCategory 변경 시에도 업데이트

  const onClickCategoryButotn = (categoryId: string) => {
    setActiveCategory(categoryId);
    router.push(`?category=${categoryId}`);
  };

  return (
    <nav className="relative w-full mt-20 mb-4">
      <ul className="flex space-x-4 justify-center" ref={containerRef}>
        {categories.map((category) => (
          <li key={category.id}>
            <button
              className={`px-3 py-2 text-lg transition-colors z-20 ${
                activeCategory === category.id
                  ? 'text-primary '
                  : 'text-muted-foreground rounded-md hover:text-primary hover:bg-adaptorsYellow/20'
              }`}
              onClick={() => onClickCategoryButotn(category.id)}
              aria-current={activeCategory === category.id ? 'page' : undefined}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
      <motion.div
        className="absolute bottom-0 h-full bg-adaptorsYellow/30 rounded-md z-10"
        animate={indicatorStyles}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      />
    </nav>
  );
}
