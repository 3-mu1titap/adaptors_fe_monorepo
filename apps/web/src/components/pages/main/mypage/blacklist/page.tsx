import { CommonLayout } from '@repo/ui/components/ui/commomLayout';
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
    <CommonLayout className="container mx-auto w-full px-6">
      <div className="flex flex-col  max-w-screen-xl w-full">
        <h1 className="text-3xl font-bold py-12 px-20 mt-20 w-full mx-auto text-center">
          블랙리스트 목록
        </h1>

        <ul className="flex flex-col max-w-screen-xl gap-y-4  sm:min-w-[10rem] w-full">
          {mentorlist.map((item) => (
            <BlackListCard CardItem={item} />
          ))}
        </ul>
      </div>
    </CommonLayout>
  );
}

export default BlackListComponent;
