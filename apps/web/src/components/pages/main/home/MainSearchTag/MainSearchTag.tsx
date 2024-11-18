import React from 'react';
import SearchIcon from '../../../../assets/icons/Search';

function MainSearchTag() {
  return (
    <div className="md:col-span-2 py-12">
      <div className="relative max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search everything here..."
          className="w-full px-4 py-3 rounded-full bg-[#FFF9E7] border text-sm text-gray-400 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFD84D]"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 hover:cursor-pointer group">
          <SearchIcon className="w-5 h-5 text-gray-400 group-hover:stroke-blue-500" />
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        {['#멘토링', '#아이돌멘토링', '#오디션', '#케팝'].map((tag) => (
          <button
            key={tag}
            className="px-4 py-1 rounded-full text-lg text-gray-600 hover:bg-gray-100"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
export default MainSearchTag;
