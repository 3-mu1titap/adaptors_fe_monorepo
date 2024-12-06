import { PaymentApproval } from 'src/actions/payment/paymentActions';

async function page({ searchParams }: { searchParams: { pg_token: string } }) {
  const pg_token = searchParams.pg_token;
  console.log(pg_token);

  const data = {
    cid: 'TC0ONETIME',
    tid: 'T7512c2728c505084444',
    partnerOrderId: 'string',
    partnerUserId: '23993e78-b0af-42de-839f-060ae99a8bf5',
    pgToken: pg_token || '',
    quantity: 10,
  };

  try {
    console.log('Start');

    const approvalRes = await PaymentApproval(data);
    console.log('결제 승인 성공:', approvalRes);
  } catch (error) {
    console.error('결제 승인 실패:', error);
  }

  return (
    <div>
      <span className="text-4xl text-black">{pg_token}</span>
    </div>
  );
}
export default page;

// 강사님 작성부분
// 'use client';
// import { useSearchParams } from 'next/navigation';
// import React from 'react';
// function page() {
//   const searchParams = useSearchParams();
//   console.log(searchParams.get('pg_token'));
//   return <div></div>;
// }
// export default page;
