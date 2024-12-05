import React from 'react';
import Link from 'next/link';
import { PaymentApproval } from 'src/actions/payment/paymentActions';

async function page({
  searchParams,
}: {
  searchParams: { pg_token: string; tid: string; partnerOrderId: string };
}) {
  const pg_token = searchParams.pg_token;
  const tid = searchParams.tid;
  const partnerOrderId = searchParams.partnerOrderId;

  console.log(pg_token, 'asfasfasfasf');
  console.log(tid, 'asfasfasfasf');
  console.log(partnerOrderId, 'asfasfasfasf');

  const data = {
    cid: 'TC0ONETIME',
    tid: tid,
    partnerOrderId: partnerOrderId,
    partnerUserId: '23993e78-b0af-42de-839f-060ae99a8bf5',
    pgToken: pg_token || '',
    quantity: 10,
  };

  try {
    if (pg_token) {
      const approvalRes = await PaymentApproval(data);
      console.log('결제 승인 성공:', approvalRes);
    }
  } catch (error) {
    console.error('결제 승인 실패:', error);
  }

  return (
    <div className="flex mt-32 w-[200px] h-200px] border-2 border-gray-200">
      <span>결제가 완료되었습니다!</span>
    </div>
  );
}

export default page;
