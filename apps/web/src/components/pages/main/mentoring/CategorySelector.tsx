'use client';

import { useState } from 'react';

export default function PaperStock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const stocks = [
    { name: 'BRIGHT WHITE', color: 'bg-white', foldColor: 'bg-gray-200' },
    { name: 'OFF-WHITE', color: 'bg-neutral-50', foldColor: 'bg-neutral-200' },
    { name: 'PALE BLUE', color: 'bg-sky-100', foldColor: 'bg-sky-200' },
    { name: 'PALE PINK', color: 'bg-pink-100', foldColor: 'bg-pink-200' },
    {
      name: 'BRIGHT YELLOW',
      color: 'bg-yellow-300',
      foldColor: 'bg-yellow-400',
    },
  ];

  return (
    <div className="p-8">
      <h2 className="mb-8 text-2xl font-bold tracking-tight">CATEGORY</h2>
      <div className="flex gap-[-40px] overflow-x-auto pb-4">
        {stocks.map((stock, index) => (
          <div
            key={stock.name}
            className="group relative flex min-w-[280px] cursor-pointer flex-col"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Main paper */}
            <div
              className={`relative flex h-[200px] items-end p-4 shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl ${stock.color}`}
            >
              {/* Folded corner */}
              <div
                className={`absolute right-0 top-0 h-16 w-16 transition-all duration-300 ${
                  hoveredIndex === index ? 'scale-110' : ''
                }`}
                style={{
                  background: `linear-gradient(135deg, transparent 50%, ${stock.foldColor} 50%)`,
                }}
              />
              {/* Small folded corner for 3D effect */}
              <div
                className={`absolute right-0 top-0 h-4 w-4 transition-all duration-300 ${
                  hoveredIndex === index ? 'scale-110' : ''
                }`}
                style={{
                  background: `linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.1) 50%)`,
                }}
              />
              <span className="text-sm font-medium [writing-mode:vertical-lr]">
                {stock.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
