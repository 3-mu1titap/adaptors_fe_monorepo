'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import BestMentorCard from '../../main/home/bestMentor/BestMentorCard';
import { BestMentorType } from '@repo/web/components/types/mentor/mentorType';
import { GetAllMentorListPagination } from '@repo/web/actions/mentor/mentorAction';

function MentorAllList() {
  const [mentorList, setMentorList] = useState<BestMentorType[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastMentorElementRef = useCallback(
    (node: HTMLLIElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const getAllMentorList = async (pageNum: number) => {
    try {
      setLoading(true);
      setError(null);
      const nextMentorList = await GetAllMentorListPagination(pageNum);
      if (nextMentorList && nextMentorList.content) {
        setMentorList((prev) => [...prev, ...nextMentorList.content]);
        setHasMore(nextMentorList.content.length > 0);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      setError('Error fetching mentor list. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllMentorList(page);
  }, [page]);

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">우리의 멘토들</h2>
      {mentorList.length > 0 && (
        <ul className="mx-auto w-full grid mobile:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10 gap-x-4 gap-y-6 max-w-[1024px]">
          {mentorList.map((item, index) => (
            <li
              key={item.mentorUuid}
              ref={
                index === mentorList.length - 1 ? lastMentorElementRef : null
              }
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <BestMentorCard item={item} isRole="mentor" index={index} />
            </li>
          ))}
        </ul>
      )}
      {loading && <p className="text-center">Loading more mentors...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!hasMore && mentorList.length > 0 && (
        <p className="text-center text-gray-500">No more mentors to load.</p>
      )}
      {mentorList.length === 0 && !loading && !error && (
        <p className="text-center">No mentors found.</p>
      )}
    </section>
  );
}

export default MentorAllList;
