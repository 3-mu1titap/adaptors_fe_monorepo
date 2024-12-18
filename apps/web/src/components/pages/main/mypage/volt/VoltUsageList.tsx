'use client';

import { GetPointList } from '@repo/web/actions/payment/paymentActions';
import { PaymentResponseDto } from '@repo/web/components/types/payment/paymentType';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import VoltCargeListCard from './VoltCargeList/VoltCargeListCard';
function VoltUsageList({
  item,
  total,
}: {
  item?: PaymentResponseDto[];
  total: number;
}) {
  if (!item) return null; // 안전한 처리
  const [page, setPage] = useState(0);
  const [totalPage, settotalPage] = useState(total);
  const [PaymentList, setPaymentList] = useState<PaymentResponseDto[]>(item);
  const fetchMentoringData = async (page: number) => {
    try {
      const data = await GetPointList(page);
      setPaymentList(data?.result.paymentResponseDtoList || []);
    } catch (error) {
      console.error('Error fetching mentoring data:', error);
      setPaymentList([]);
    }
  };
  useEffect(() => {
    fetchMentoringData(page); // 페이지 변경 감지
  }, [page]);

  return (
    <>
      <div className="flex flex-col mt-10 mx-4">
        {PaymentList && PaymentList ? (
          <>
            <ul className="flex flex-col bg-white gap-y-3 rounded-xl">
              {PaymentList.map((item, index) => (
                <VoltCargeListCard item={item} key={index} />
              ))}
            </ul>
            <div className="py-16 flex justify-center space-x-4 items-center rounded-lg">
              <button
                disabled={page <= 0}
                onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                className="text-xl px-2 py-2 bg-white text-gray-300 border-2 border-gray-100 rounded-lg"
              >
                <ChevronLeft />
              </button>
              <div className="flex gap-x-2">
                {Array.from({ length: totalPage }).map((_, index) => (
                  <button
                    onClick={() => setPage(index)} // 페이지 상태 변경
                    key={index}
                    className={`px-3 py-1 border-2 border-gray-100 rounded-lg ${
                      page === index
                        ? 'bg-green-500 text-white'
                        : 'bg-green-200 text-white'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <button
                disabled={page >= totalPage - 1}
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPage - 1))
                }
                className="px-2 py-2 text-xl bg-white text-gray-300 border-2 border-gray-100 rounded-lg"
              >
                <ChevronRight />
              </button>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default VoltUsageList;
