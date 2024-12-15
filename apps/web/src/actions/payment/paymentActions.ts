'use server';
import {
  commonRes,
  commonResType,
} from '@repo/web/components/types/ResponseTypes';
import {
  GetMemberPointListResType,
  PaymentApprovalResType,
  PaymentReadyResType,
} from '@repo/web/components/types/payment/paymentType';
import { getServerSession } from 'next-auth';
import { options } from '../../app/api/auth/[...nextauth]/options';

//결제준비요청
export async function PaymentReq(
  cid: string,
  partnerOrderId: string,
  itemName: string,
  quantity: number,
  totalAmount: number,
  taxFreeAmount: number,
  approvalUrl: string,
  failUrl: string,
  cancelUrl: string
) {
  'use server';

  const session = await getServerSession(options);
  const partnerUserId = session?.user.uuid;
  const request = {
    cid,
    partnerOrderId,
    partnerUserId,
    itemName,
    quantity,
    totalAmount,
    taxFreeAmount,
    approvalUrl,
    failUrl,
    cancelUrl,
  };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PAYMENT_URL}/api/v1/payment/ready`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.user.accessToken}`,
        },
        body: JSON.stringify(request),
      }
    );
    console.log(res);
    const result = (await res.json()) as commonResType<PaymentReadyResType>;
    // console.log('결제 준비 result: ', result);
    return result.result;
  } catch (error) {
    // console.log('결제 준비 중', error);
    return null;
  }
}

//결제 승인요청
export async function PaymentApproval(pg_token: string) {
  'use server';

  const session = await getServerSession(options);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PAYMENT_URL}/payment-service/api/v1/payment/approve?pg_token=${pg_token}`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.user.accessToken}`,
        },
      }
    );

    const result = (await res.json()) as commonResType<PaymentApprovalResType>;
    return result.result;
  } catch (error) {
    // console.log('결제 준비 중', error);
    return null;
  }
}

//결제 후 포인트 조회
export async function GetMemberPoint() {
  'use server';

  const session = await getServerSession(options);
  const userUuid = session?.user.uuid;

  try {
    const res = await fetch(
      `${process.env.MEMBER_URL}/api/v1/member/points?userUuid=${userUuid}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.user.accessToken}`,
        },
      }
    );

    const result: commonRes = await res.json();
    console.log(result, '포인트 조회 완료');
    return result;
  } catch (error) {
    console.log('회원 포인트 조회', error);
    return null;
  }
}

//결제 리스트 조회
export async function GetPointList() {
  'use server';

  const session = await getServerSession(options);
  const menteeUuid = session?.user.uuid;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PAYMENT_URL}/payment-service/api/v1/payment/points/history?menteeUuid=${menteeUuid}&page=${0}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.user.accessToken}`,
        },
      }
    );

    const result = (await res.json()) as commonResType<
      GetMemberPointListResType[]
    >;
    console.log(result.result, '포인트 리스트 조회');
    return result.result;
  } catch (error) {
    console.log('포인트 리스트 조회', error);
    return null;
  }
}
