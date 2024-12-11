// import { MentoringSessionDataType } from '@repo/admin/components/types/main/mentor/mentoringTypes';
// import MentoringInfoCard from '../session/MentoringInfoCard';
// import MentoringSessionList from '../session/MentoringSessionList';
// import { MentoringDataType } from '@repo/ui/types/CommonType.ts';

// export default function MentoringContent({
//   mentoringInfo,
//   mentoringSessionData,
// }: {
//   mentoringInfo: MentoringDataType;
//   mentoringSessionData: MentoringSessionDataType[];
// }) {
//   return (
//     <main className="w-full p-4">
//       <MentoringInfoCard
//         name={mentoringInfo.name}
//         description={mentoringInfo.description}
//         detail={mentoringInfo.detail}
//         thumbnailUrl={mentoringInfo.thumbnailUrl}
//         mentoringCategoryList={mentoringInfo.categoryList}
//       />
//       {mentoringSessionData?.length === 0 ? (
//         <p>현재 등록된 멘토링 세션이 없습니다.</p>
//       ) : (
//         <section className="container mx-auto p-4">
//           <h1 className="text-2xl font-bold mb-6">멘토링 세션 목록</h1>
//           {mentoringSessionData.map((dateGroup) => (
//             <div key={dateGroup.startDate} className="mb-8">
//               <MentoringSessionList dateGroup={dateGroup} />
//             </div>
//           ))}
//         </section>
//       )}
//     </main>
//   );
// }
