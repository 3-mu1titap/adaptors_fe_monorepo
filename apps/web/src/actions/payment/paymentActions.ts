'use server';
import { PaymentReqType } from '@components/types/payment/paymentType';
import { commonResType } from '@components/types/ResponseTypes';
import { PaymentReadyResType } from '@components/types/payment/paymentType';
import { PaymentApprovalReqType } from '@components/types/payment/paymentType';
import { PaymentApprovalResType } from '@components/types/payment/paymentType';

//결제준비요청
export async function PaymentReq(request: PaymentReqType) {
  'use server';
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
export async function PaymentApproval(request: PaymentApprovalReqType) {
  'use server';
  const uuid = '23993e78-b0af-42de-839f-060ae99a8bf5';
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/payment-service/api/v1/payment/approve?uuid=${uuid}`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      }
    );

    const result = (await res.json()) as commonResType<PaymentApprovalResType>;
    return result.result;
  } catch (error) {
    console.log('결제 준비 중', error);
    return null;
  }
}
