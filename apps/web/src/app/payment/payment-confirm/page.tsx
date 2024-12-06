import React from 'react';
import Link from 'next/link';
import { PaymentApproval } from 'src/actions/payment/paymentActions';
import { Button } from '@repo/ui/components/ui/button';

async function page({ searchParams }: { searchParams: { pg_token: string } }) {
  const pg_token = searchParams.pg_token;

  if (pg_token) {
    try {
      const approvalRes = await PaymentApproval(pg_token);
      console.log('결제 승인 성공:', approvalRes);
    } catch (error) {
      console.error('결제 승인 실패:', error);
    }
  }

  return (
    <div className="flex flex-col mt-32 w-[300px] h-[300px] border-2 border-gray-200 justify-center">
      <div className="flex flex-col">
        <span> 결제가 완료되었습니다!.</span>

        <Link href="/mypage/volt">
          <Button className="bg-yellow-200 py-3 mx-4">확인</Button>
        </Link>
      </div>
    </div>
  );
}

export default page;
