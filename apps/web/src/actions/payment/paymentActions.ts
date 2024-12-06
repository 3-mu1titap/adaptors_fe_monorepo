'use server';
import { PaymentReqType } from '@components/types/payment/paymentType';
import { commonResType } from '@components/types/ResponseTypes';
import { PaymentReadyResType } from '@components/types/payment/paymentType';
import { PaymentApprovalReqType } from '@components/types/payment/paymentType';
import { PaymentApprovalResType } from '@components/types/payment/paymentType';
import { options } from '../../app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

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
  console.log(session?.user.uuid, 'userUuid testatast');
  // const partnerUserId = session?.user.uuid;
  const partnerUserId = 'uuid-0001';
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
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/payment-service/api/v1/payment/ready`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      }
    );

    const result = (await res.json()) as commonResType<PaymentReadyResType>;
    console.log('결제 준비 result: ', result);
    return result.result;
  } catch (error) {
    console.log('결제 준비 중', error);
    return null;
  }
}

//결제 승인요청
export async function PaymentApproval(pg_token: string) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/payment-service/api/v1/payment/approve?pg_token=${pg_token}`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = (await res.json()) as commonResType<PaymentApprovalResType>;
    return result.result;
  } catch (error) {
    console.log('결제 준비 중', error);
    return null;
  }
}
