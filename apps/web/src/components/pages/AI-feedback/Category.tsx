import MainHeaderGNBMenuItem from '@components/header/MainGNBMenuItem';
// import { CategoryData } from 'src/store/initialStore';
export const CategoryData = [
  { label: '자기소개서', href: '/cover-letter' },
  { label: '포트폴리오', href: '/portfolio' },
  { label: '이력서', href: '/resume' },
];

export default function Category() {
  return (
    <nav className="hidden lg:flex w-full justify-center ml-12">
      <ul className="text-base lg:text-lg flex gap-x-4 lg:gap-x-8">
        {CategoryData.map((item) => (
          <MainHeaderGNBMenuItem key={item.label} menuItem={item} />
        ))}
      </ul>
    </nav>
  );
}
