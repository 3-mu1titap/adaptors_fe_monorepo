'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  PaymentReadyResType,
  PaymentReqType,
} from '@components/types/payment/paymentType';
import { Button } from '@repo/ui/components/ui/button';
import { PaymentReq } from 'src/actions/payment/paymentActions';
import { PaymentApproval } from 'src/actions/payment/paymentActions';
import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from '@repo/ui/components/ui/card';
import TextTitleSection from '../main/mypage/compoent/TextTitleSection';
import { BoltItem } from '@components/types/payment/paymentType';

function Payment() {
  const BoltItem = [
    { id: 0, itemName: 'Volt', count: 10, price: 1000 },
    { id: 1, itemName: 'Volt', count: 30, price: 3000 },
    { id: 2, itemName: 'Volt', count: 50, price: 5000 },
    { id: 3, itemName: 'Volt', count: 100, price: 10000 },
    { id: 4, itemName: 'Volt', count: 300, price: 30000 },
    { id: 5, itemName: 'Volt', count: 500, price: 50000 },
  ];
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedItem, setSelectedItem] = useState<BoltItem | null>(null);
  const [Quantity, setQuantity] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);
  const [Res, setRes] = useState<PaymentReadyResType | undefined>();
  const [pgToken, setPgToken] = useState('');

  const handleItemSelect = (item: BoltItem) => {
    if (selectedItem?.id !== item.id) {
      setQuantity(0);
      setTotalCount(0);
      setTotalMoney(0);
    }
    setSelectedItem(item);
  };

  const decreaseCount = () => {
    if (Quantity > 0) {
      setQuantity(Quantity - 10);
    }
  };

  const IncreaseCount = () => {
    setQuantity(Quantity + 10);
  };

  useEffect(() => {
    // //결제 리다이랙트시 pg_token 값을 찾는다
    // const pgToken = searchParams.get('pg_token');

    // //pg_token값이 있을경우
    // if (pgToken) {
    //   PaymentApprove(pgToken);
    // }

    setTotalCount(Quantity + (selectedItem?.count || 0));
    setTotalMoney(totalCount * 100);
  }, [Quantity, selectedItem, totalCount, pgToken]);

  const data = {
    cid: 'TC0ONETIME',
    partnerOrderId: 'string',
    partnerUserId: '23993e78-b0af-42de-839f-060ae99a8bf5',
    itemName: selectedItem?.itemName || ' ',
    quantity: totalCount || 0,
    totalAmount: totalMoney || 0,
    taxFreeAmount: 0,
    approvalUrl: 'http://localhost:3003/payment/payment-confirm',
    failUrl: 'http://localhost:3003/mypage/volt/payment-fail',
    cancelUrl: 'http://localhost:3003/mypage/volt/payment-cancel',
  };

  const Paymenthandle = async () => {
    try {
      const res = await PaymentReq(data);
      console.log(res?.nextRedirectPcUrl, 'url url ');
      console.log(res?.partnerOrderId, 'order');
      console.log(res?.tid, 'tid, tid');

      if (res?.nextRedirectPcUrl) {
        setRes(res);
        router.push(`${res.nextRedirectPcUrl}`);

        console.log('이동합니다!~!~');
      }
    } catch (error) {
      console.error('결제 준비 요청 실패:', error);
    }
  };

  return (
    <div className="flex flex-col w-[30rem] h-[40rem] items-center justify-center">
      <Card className="flex flex-col w-full max-w-[30rem] max-h-[40rem] mx-auto border-2">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            <TextTitleSection title="볼트 충전" subtitle="Volt charge" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {BoltItem.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleItemSelect(item)}
                variant={selectedItem?.id === item.id ? 'default' : 'outline'}
                className={`w-full ${selectedItem?.id === item.id ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
              >
                {item.count}개 ({item.price.toLocaleString()}원)
              </Button>
            ))}
          </div>
          {selectedItem && (
            <div className="flex justify-between mt-6 items-center">
              <div className="flex items-center p-4 justify-start space-x-1">
                <button onClick={decreaseCount} className="border border-black">
                  {'<'}
                </button>
                <span className="text-black text-2xl">{Quantity}</span>
                <button onClick={IncreaseCount} className="border border-black">
                  {'>'}
                </button>
              </div>
              <div className="flex justify-end">
                <span className="font bold text-black">총 개수</span>
                <span>: {totalCount}</span>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col ">
          <div className="flex justify-between items-center space-x-10 mb-6">
            <span className="text-lg font-semibold">총 결제 금액:</span>
            <span className="text-2xl font-bold text-green-600">
              {selectedItem ? totalMoney.toLocaleString() : '0'}원
            </span>
          </div>
          <div>
            <Button
              className="bg-yellow-200 text-2xl text-black py-3 hover:bg-yellow-200"
              onClick={Paymenthandle}
            >
              결제
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Payment;
