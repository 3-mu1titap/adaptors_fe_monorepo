'use client';
import { Button } from '@repo/ui/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';
import {
  BoltItem,
  PaymentReadyResType,
} from '@repo/web/components/types/payment/paymentType';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PaymentReq } from 'src/actions/payment/paymentActions';
import TextTitleSection from '../main/mypage/compoent/TextTitleSection';

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

  const [selectedItem, setSelectedItem] = useState<BoltItem | null>(null);
  const [Quantity, setQuantity] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);

  const handleItemSelect = (item: BoltItem) => {
    setSelectedItem(item);
    setQuantity(1); // 기본 수량을 1로 설정
    setTotalCount(item.count); // 기본 총수량 설정
    setTotalMoney(item.price); // 기본 결제 금액 설정
  };

  const decreaseCount = () => {
    if (Quantity > 1 && selectedItem) {
      setQuantity(Quantity - 1); // 수량 감소
      setTotalCount(totalCount - selectedItem.count); // 총 수량 감소
    }
  };

  const IncreaseCount = () => {
    if (selectedItem) {
      setQuantity(Quantity + 1); // 수량 증가
      setTotalCount(totalCount + selectedItem.count); // 총 수량 증가
    }
  };

  useEffect(() => {
    if (selectedItem) {
      setTotalMoney(Quantity * selectedItem.price); // 총 결제 금액 업데이트
    } else {
      setTotalMoney(0);
    }
  }, [Quantity, selectedItem]);

  const cid = 'TC0ONETIME';
  const partnerOrderId = 'string';
  const itemName = selectedItem?.itemName || ' ';
  const quantity = totalCount || 0;
  const totalAmount = totalMoney || 0;
  const taxFreeAmount = 0;
  const approvalUrl = 'https://www.adaptors.site//payment/payment-confirm';
  const failUrl = 'https://www.adaptors.site/payment-fail';
  const cancelUrl = 'https://www.adaptors.site/mypage/payment/payment-cancel';
  // const approvalUrl = 'http://localhost:3003/payment/payment-confirm';
  // const failUrl = 'https://www.adaptors.site/payment-fail';
  // const cancelUrl = 'https://www.adaptors.site/mypage/payment/payment-cancel';

  const Paymenthandle = async () => {
    try {
      const res = await PaymentReq(
        cid,
        partnerOrderId,
        itemName,
        quantity,
        totalAmount,
        taxFreeAmount,
        approvalUrl,
        failUrl,
        cancelUrl
      );

      if (res?.nextRedirectPcUrl) {
        router.push(`${res.nextRedirectPcUrl}`);
      }
    } catch (error) {
      console.error('결제 준비 요청 실패:', error);
    }
  };

  return (
    <div className="flex flex-col lg:w-[30rem] lg:h-[40rem] max-w[300px] max-h-[400px] mt-28 items-center justify-center">
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
                className={`w-full hover:bg-ad ${
                  selectedItem?.id === item.id
                    ? 'bg-adaptorsYellow text-white'
                    : 'bg-white text-black'
                }`}
              >
                {item.count}개 ({item.price.toLocaleString()}원)
              </Button>
            ))}
          </div>
          {selectedItem && (
            <>
              <span className="text-sm text-black">
                * 수량이 증가 할때마다 선택한 볼트의 개수만큼 결제금액이
                늘어납니다.!
              </span>
              <div className="flex justify-between mt-6 items-center">
                <div className="flex items-center p-4 justify-start space-x-1">
                  <button
                    onClick={decreaseCount}
                    className="border border-black px-1 py-1"
                  >
                    {'<'}
                  </button>
                  <span className="text-black text-2xl ml-4">{Quantity}</span>
                  <button
                    onClick={IncreaseCount}
                    className="border border-black px-1 py-1"
                  >
                    {'>'}
                  </button>
                </div>
                <div className="flex justify-end">
                  <span className="font-bold text-black">총 수량</span>
                  <span>: {totalCount}</span>
                </div>
              </div>
            </>
          )}
        </CardContent>
        <CardFooter className="flex flex-col ">
          <div className="flex justify-between items-center space-x-10 mb-6">
            <span className="text-lg font-semibold">총 결제 금액:</span>

            <span className="text-2xl font-bold text-green-600">
              {totalMoney.toLocaleString()}원
            </span>
          </div>
          <div>
            <Button
              className="bg-yellow-200 text-2xl text-black py-3 hover:bg-black hover:text-white"
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
