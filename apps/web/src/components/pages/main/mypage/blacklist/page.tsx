import React from 'react';

function BlackListComponent() {
  const mentorlist = [
    { id: 0, mentorthumnail: ' ', mentorname: '설찬우' },
    { id: 1, mentorthumnail: ' ', mentorname: '김지환' },
    { id: 2, mentorthumnail: ' ', mentorname: '홍길동' },
    { id: 3, mentorthumnail: ' ', mentorname: '길동우' },
    { id: 4, mentorthumnail: ' ', mentorname: '길동우' },
    { id: 5, mentorthumnail: ' ', mentorname: '길동우' },
    { id: 6, mentorthumnail: ' ', mentorname: '길동우' },
    { id: 7, mentorthumnail: ' ', mentorname: '길동우' },
    { id: 8, mentorthumnail: ' ', mentorname: '길동우' },
  ];
  return (
    <div className="container mx-auto max-w-[90rem]">
      <div className="flex flex-col mx-auto max-w-[82rem]">
        <h1 className="w-full text-3xl font-bold py-12">블랙리스트 목록</h1>
        <ul className="grid grid-cols-5 max-w-[76rem] pb-14 gap-6">
          {mentorlist.map((item) => (
            <li
              key={item.id}
              className="flex flex-col justify-center items-center border-2 border-b-gray-300 rounded-md p-4 py-6"
            >
              <span className="w-[80px] h-[80px] bg-gray-600 rounded-full"></span>
              <span className="text-4xl py-6">{item.mentorname}</span>
              <button className="px-10 bg-slate-300">삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlackListComponent;
