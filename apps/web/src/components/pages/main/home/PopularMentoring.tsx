'use client';

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

export default function PopularMentoring() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const categories = [
    { icon: '💻', name: 'Web Development', courses: '206 Courses' },
    { icon: '📱', name: 'Digital Marketing', courses: '206 Courses' },
    { icon: '🎨', name: 'UI/UX Design', courses: '206 Courses' },
    { icon: '📊', name: 'UI/UX Design', courses: '206 Courses' },
    { icon: '📈', name: 'Graph', courses: '206 Courses' },
  ];

  const courses = [
    {
      title: 'Education Software and PHP and JS System Script',
      duration: '55 WEEKS',
      rating: 4.5,
      reviews: 142,
      instructor: 'Max Alexis',
    },
    {
      title: 'Learn Figma — UI/UX Design Essential Training',
      duration: '55 WEEKS',
      rating: 4.8,
      reviews: 171,
      instructor: 'Max Alexis',
    },
    {
      title: 'Advanced Android 12 & Kotlin Development Course',
      duration: '55 WEEKS',
      rating: 4.6,
      reviews: 163,
      instructor: 'Max Alexis',
    },
    {
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
      const scrollAmount = 200;
      const newPosition =
        direction === 'left'
          ? scrollPosition - scrollAmount
          : scrollPosition + scrollAmount;
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  return (
    <section className="bg-[#FFF9E7] px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <span className="text-sm text-gray-600 uppercase tracking-wider">
            POPULAR COURSES
          </span>
          <h2 className="text-2xl font-bold mt-2">인기멘토링</h2>
        </div>

        <div className="relative mb-12">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div
            id="category-scroll"
            className="flex gap-4 overflow-hidden snap-x mx-12"
            style={{ scrollBehavior: 'smooth' }}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-none snap-start bg-white rounded-xl p-4 min-w-[200px] hover:shadow-md transition-shadow m-1"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <p className="font-medium">{category.name}</p>
                    <p className="text-sm text-gray-500">{category.courses}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <div className="aspect-video bg-gray-200" />
                <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-medium px-2 py-1 rounded-full">
                  {course.duration}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-200'}`}
                      fill={
                        i < Math.floor(course.rating) ? 'currentColor' : 'none'
                      }
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">
                    ({course.reviews})
                  </span>
                </div>
                <h3 className="font-medium mb-4 line-clamp-2">
                  {course.title}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full" />
                  <span className="text-sm text-gray-600">
                    {course.instructor}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-md transition-shadow">
            전체 멘토링 보기
          </button>
        </div>
      </div>
    </section>
  );
}
