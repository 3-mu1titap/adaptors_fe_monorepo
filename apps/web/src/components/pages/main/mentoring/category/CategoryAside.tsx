import { TopCategoryType } from '@repo/ui/types/CommonType.js';
import Thunder from '@repo/web/components/assets/icons/Thunder';

import Link from 'next/link';

export default function CategoryAside({
  categoryParam,
  categorise,
}: {
  categoryParam: string;
  categorise: TopCategoryType[];
}) {
  return (
    <aside className="lg:fixed lg:left-0 static backdrop-blur-lg max-w-[330px] mx-auto ">
      <ul className="lg:min-w-36 pt-10 flex lg:block justify-center lg:justify-normal">
        {categorise
          ?.filter((category) => category.categoryType === 'DOMAIN')
          .map((category) => (
            <li
              className="text-md mobile:text-lg w-full text-center lg:text-start lg:px-10 mb-10 relative"
              key={category.id}
            >
              <Link
                href={`/mentoring?category=${category.topCategoryCode}`}
                className={`${category.topCategoryCode == categoryParam ? `text-extrabold p-2 border-b-[1px] border-black` : `text-gray-400`}`}
              >
                {category.topCategoryName}
              </Link>
              <Thunder
                className={`${category.topCategoryCode == categoryParam ? `absolute top-[-15px] right-4` : `hidden`}`}
              />
            </li>
          ))}
      </ul>
    </aside>
  );
}
