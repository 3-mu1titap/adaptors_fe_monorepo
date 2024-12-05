import Link from 'next/link';
import { getTopCategoryList } from 'src/actions/category/getCategory';

export default async function CategoryAside({
  categoryParam,
}: {
  categoryParam: string;
}) {
  const categorise = await getTopCategoryList();
  return (
    <aside>
      <ul className="min-w-32 pt-10">
        {categorise?.map((category) => (
          <li className="w-full text-start pl-10 mb-10" key={category.id}>
            <Link
              href={`/mentoring?category=${category.topCategoryCode}`}
              className={`${category.topCategoryCode == categoryParam ? `text-extrabold` : ``}`}
            >
              {category.topCategoryName}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
