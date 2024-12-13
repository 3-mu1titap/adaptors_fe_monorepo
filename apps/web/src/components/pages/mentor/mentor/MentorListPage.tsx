// 'use client';

// import React, { useEffect, useState } from 'react';
// import { MentorListType } from '@repo/web/components/types/mentor/mentorType';
// import MentorListCard from './MentorListCard';
// import { getMentorProfileImage } from '@repo/web/actions/profile/getProfileData';
// import { userProfileType } from '@repo/web/components/types/profile/RequestType';

// function MentorListPage({ Mentor }: { Mentor: MentorListType[] }) {
//   const [mentorList, setMentorList] = useState<userProfileType[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // 빈 배열 처리
//     if (!Mentor || Mentor.length === 0) {
//       setLoading(false); // 데이터가 없을 경우 로딩을 바로 끝냄
//       return;
//     }

//     // 데이터가 있을 때만 프로필 데이터를 가져옴
//     const fetchMentorProfiles = async () => {
//       setLoading(true);
//       try {
//         const profiles = await Promise.all(
//           Mentor.map((mentor) => getMentorProfileImage(mentor.mentorUuid))
//         );
//         setMentorList(profiles);
//       } catch (error) {
//         console.error('Error fetching mentor profiles:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMentorProfiles();
//   }, [Mentor]);

//   if (loading) {
//     return <div>Loading...</div>; // 로딩 상태 표시
//   }

//   if (mentorList.length === 0) {
//     return <div>No mentors available.</div>; // 빈 배열일 때 메시지 표시
//   }

//   return (
//     <section className="container mx-auto max-w-[80rem]">
//       <div className="mx-auto max-x-[80rem]">
//         <ul className="grid grid-cols-4 gap-4">
//           {mentorList.map((item, index) => (
//             <MentorListCard key={index} item={item} />
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default MentorListPage;
