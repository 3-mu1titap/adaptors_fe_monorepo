'use client';

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';
import PopularCategory from './PopularCategory';
import PopularCategoryMentoring from './PopularCategoryMentoring';
export default function PopularMentoring() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [SelectId, setSelectId] = useState(0);

  const categories = [
    { id: 0, icon: '💻', name: 'Web Development', courses: '206 Courses' },
    { id: 1, icon: '📱', name: 'Digital Marketing', courses: '206 Courses' },
    { id: 2, icon: '🎨', name: 'UI/UX Design', courses: '206 Courses' },
    { id: 3, icon: '📊', name: 'FrontEnd Development', courses: '206 Courses' },
    { id: 4, icon: '📈', name: 'Graph', courses: '206 Courses' },
    { id: 5, icon: '📊', name: 'Android Development', courses: '206 Courses' },
    { id: 6, icon: '📈', name: 'Backend Development', courses: '206 Courses' },
    { id: 7, icon: '📈', name: 'Backend Development', courses: '206 Courses' },
    { id: 8, icon: '📈', name: 'Backend Development', courses: '206 Courses' },
    { id: 9, icon: '📈', name: 'Backend Development', courses: '206 Courses' },
    { id: 10, icon: '📈', name: 'Backend Development', courses: '206 Courses' },
  ];

  const courses = [
    {
      id: 0,
      title: 'Education Software and PHP and JS System Script',
      duration: '55 WEEKS',
      rating: 4.5,
      reviews: 142,
      instructor: 'Max Alexis',
    },

    {
      id: 0,
      title: 'Education Software and PHP and JS System Script',
      duration: '55 WEEKS',
      rating: 4.5,
      reviews: 142,
      instructor: 'Max Alexis',
    },

    {
      id: 0,
      title: 'Education Software and PHP and JS System Script',
      duration: '55 WEEKS',
      rating: 4.5,
      reviews: 142,
      instructor: 'Max Alexis',
    },

    {
      id: 0,
      title: 'Education Software and PHP and JS System Script',
      duration: '55 WEEKS',
      rating: 4.5,
      reviews: 142,
      instructor: 'Max Alexis',
    },

    {
      id: 1,
      title: 'Learn Figma — UI/UX Design Essential Training',
      duration: '55 WEEKS',
      rating: 4.8,
      reviews: 171,
      instructor: 'Max Alexis',
    },

    {
      id: 1,
      title: 'Learn Figma — UI/UX Design Essential Training',
      duration: '55 WEEKS',
      rating: 4.8,
      reviews: 171,
      instructor: 'Max Alexis',
    },

    {
      id: 1,
      title: 'Learn Figma — UI/UX Design Essential Training',
      duration: '55 WEEKS',
      rating: 4.8,
      reviews: 171,
      instructor: 'Max Alexis',
    },

    {
      id: 1,
      title: 'Learn Figma — UI/UX Design Essential Training',
      duration: '55 WEEKS',
      rating: 4.8,
      reviews: 171,
      instructor: 'Max Alexis',
    },

    {
      id: 2,
      title: 'Advanced Android 12 & Kotlin Development Course',
      duration: '55 WEEKS',
      rating: 4.6,
      reviews: 163,
      instructor: 'Max Alexis',
    },
    {
      id: 3,
      title: 'IT Statistics Data Science and Business Analysis',
      duration: '55 WEEKS',
      rating: 4.7,
      reviews: 157,
      instructor: 'Max Alexis',
    },
    {
      id: 4,
      title: 'IT Statistics Data Science and Business Analysis',
      duration: '55 WEEKS',
      rating: 4.7,
      reviews: 157,
      instructor: 'Max Alexis',
    },
    {
      id: 5,
      title: 'IT Statistics Data Science and Business Analysis',
      duration: '55 WEEKS',
      rating: 4.7,
      reviews: 157,
      instructor: 'Max Alexis',
    },
    {
      id: 6,
      title: 'IT Statistics Data Science and Business Analysis',
      duration: '55 WEEKS',
      rating: 4.7,
      reviews: 157,
      instructor: 'Max Alexis',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('category-scroll');
    if (container) {
      const scrollAmount = 400;
      let newPosition = scrollPosition;
      const maxScrollPosition = container.scrollWidth - container.clientWidth;

      if (direction === 'left') {
        newPosition = Math.max(scrollPosition - scrollAmount, 0); // 왼쪽 끝을 넘지 않도록
      } else if (direction === 'right') {
        newPosition = Math.min(
          scrollPosition + scrollAmount,
          maxScrollPosition
        ); // 오른쪽 끝을 넘지 않도록
      }

      // 스크롤 위치가 변경된 경우에만 스크롤 및 상태 업데이트 수행
      if (newPosition !== scrollPosition) {
        container.scrollTo({ left: newPosition, behavior: 'smooth' });
        setScrollPosition(newPosition);
      }
    }
  };

  const filteredCourses = courses.filter((course) => course.id === SelectId);

  return (
    <section className="container bg-[#FFF9E7] mx-auto max-w-full py-24">
      <div className=" mx-auto max-w-[78rem]">
        <div className="text-center mb-8">
          <span className="text-sm text-gray-600 uppercase tracking-wider">
            POPULAR COURSES
          </span>
          <h2 className="text-4xl font-bold mt-2">인기멘토링</h2>
        </div>

        <div className="relative mb-6">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div
            id="category-scroll"
            className="flex gap-4 overflow-hidden snap-x mx-auto max-w-[70rem]"
            style={{ scrollBehavior: 'smooth' }}
          >
            <ul className={`flex gap-4`}>
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`flex-none snap-start rounded-xl min-w-[265px] py-2 ${category.id === SelectId ? 'bg-black text-white' : 'bg-white text-black'}`}
                  onClick={() => setSelectId(category.id)}
                >
                  <PopularCategory item={category} />
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <ul className="grid gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-[71rem] justify-items-stretch">
          {filteredCourses.map((course, index) => (
            <PopularCategoryMentoring key={index} item={course} />
          ))}
        </ul>

        <div className="text-center mt-12">
          <button className="bg-[#FFD84D] text-white px-6 py-4 rounded-xl text-2xl font-medium hover:shadow-md transition-shadow">
            전체 멘토링 보기
          </button>
        </div>
      </div>
    </section>
  );
}
