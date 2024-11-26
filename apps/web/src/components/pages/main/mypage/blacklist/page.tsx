import React from 'react';
import BlackListCard from './BlackListCard';
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
    { id: 8, mentorthumnail: ' ', mentorname: '후동이' },
    { id: 8, mentorthumnail: ' ', mentorname: '길동이' },
    { id: 8, mentorthumnail: ' ', mentorname: '기동이' },
    { id: 8, mentorthumnail: ' ', mentorname: '홍기동이' },
  ];
  return (
    <div className="container mx-auto">
      <div className="flex flex-col  max-w-screen-xl">
        <h1 className="text-3xl font-bold py-12 px-20">블랙리스트 목록</h1>

        <ul className="flex flex-col max-w-screen-xl gap-y-4 sm:max-w-[11rem] sm:min-w-[10rem]">
          {mentorlist.map((item) => (
            <BlackListCard CardItem={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlackListComponent;
