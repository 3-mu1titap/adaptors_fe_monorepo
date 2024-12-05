import Link from 'next/link';

interface Category {
  id: string;
  name: string;
}
export function AnimatedCategories({
  categories,
  categoryParam,
}: {
  categories: Category[];
  categoryParam: string;
}) {
  return (
    <nav className="relative w-full mt-20 mb-10">
      <ul className="flex space-x-4 justify-center">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={`/AI-feedback/${category.id}`}
              className={`px-3 py-2 text-lg transition-colors z-20 rounded-md hover:bg-adaptorsYellow/20 ${
                categoryParam === category.id
                  ? 'text-primary bg-adaptorsYellow/30'
                  : 'text-muted-foreground hover:text-primary'
              }`}
              aria-current={categoryParam === category.id ? 'page' : undefined}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
