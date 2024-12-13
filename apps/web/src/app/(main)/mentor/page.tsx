import { GetMentorList } from '@repo/web/actions/mentor/mentorAction';

import React from 'react';
import MentorListCard from '@repo/web/components/pages/mentor/mentor/MentorListCard';
import { getMentorProfileImage } from '@repo/web/actions/profile/getProfileData';
async function page() {
  const res = await GetMentorList();
  // console.log(res, '성공');
  const data = await Promise.all(
    res.map(async (item) => {
      const Image = await getMentorProfileImage(item);
      return {
        mentorUuid: item,
        nickName: Image.nickName || '',
        profileImageUrl: Image.profileImageUrl || '',
      };
    })
  );

  return (
    <>
      <section className="container mx-auto max-w-[64rem] mt-32">
        <ul className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-auto lg:max-w-[64rem] md:max-w-[50rem] sm:max-w-[25rem]">
          {data && (
            <>
              {data.map((item) => (
                <MentorListCard item={item} />
              ))}
            </>
          )}
        </ul>
      </section>
    </>
  );
}

export default page;
