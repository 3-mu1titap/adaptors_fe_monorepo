'use client';
import {
  FileUser,
  GalleryVerticalEnd,
  Speech,
  SpellCheck2,
} from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const categories = [
  { id: 'TC-CD7877C0', name: '이력서', icon: FileUser },
  { id: 'TC-8C93C5F5', name: '자기소개서', icon: SpellCheck2 },
  { id: 'TC-0489394A', name: '면접', icon: Speech },
  { id: 'TC-8E506504', name: '포트폴리오', icon: GalleryVerticalEnd },
];

export default function FeedbackNavbar() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  return (
    <div className="mt-[2.5em] sm:mt-10 w-[80%] max-w-[400px] h-[70px] mx-auto my-10">
      {/* Main Navigation Bar */}
      <nav className="relative w-full h-full rounded-[35px] flex items-center justify-center ">
        <ul className="relative flex items-center justify-between w-full px-8">
          {categories.map((category, index) => {
            const isActive = currentCategory === category.id;
            const Icon = category.icon;
            return (
              <li key={category.id} className="relative">
                <Link
                  href={`/mypage/feedback?category=${category.id}`}
                  className={`flex flex-col items-center transition-all duration-300 ${
                    isActive
                      ? '-translate-y-6 text-black font-extrabold'
                      : 'text-black/70 hover:-translate-y-2'
                  }`}
                >
                  <div
                    className={`p-3 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-black text-[#F6D84C]' : 'bg-adaptorsYellow'
                    }`}
                  >
                    <Icon size={24} />
                  </div>
                  <span className="text-sm mt-1 font-medium">
                    {category.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
