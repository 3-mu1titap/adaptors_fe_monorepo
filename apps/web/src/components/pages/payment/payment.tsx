'use client';
import React, { useState } from 'react';
import { Button } from '@repo/ui/components/ui/button';
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
    { id: 0, count: 10, price: 1000 },
    { id: 1, count: 30, price: 3000 },
    { id: 2, count: 50, price: 5000 },
    { id: 3, count: 100, price: 10000 },
    { id: 4, count: 300, price: 30000 },
    { id: 5, count: 500, price: 50000 },
  ];

  const [selectedItem, setSelectedItem] = useState<BoltItem | null>(null);
  //아이템 갯수 최소 1개
  const [Quantity, setQuantity] = useState(10);

  //총 갯수
  const [totalCount, setTotalCoutnt] = useState(0);
  const handleItemSelect = (item: BoltItem) => {
    setSelectedItem(item);
  };

  const decreaseCount = () => {
    if (Quantity > 10) {
      setQuantity(Quantity - 10);
    }

    let total = Quantity - (selectedItem?.count || 0);
    setTotalCoutnt(total);
  };

  const IncreaseCount = () => {
    setQuantity(Quantity + 10);

    let total = Quantity + (selectedItem?.count || 0);
    setTotalCoutnt(total);
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
                className={`w-full ${selectedItem?.id === item.id ? 'bg-blue-500 text-white' : ''}`}
              >
                {item.count}개 ({item.price.toLocaleString()}원)
              </Button>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">결제 수단</h3>
            <div className="flex items-center space-x-2 bg-yellow-50 p-3 rounded-md">
              <span className="text-sm font-medium">카카오페이</span>
            </div>
          </div>

          {selectedItem && (
            <div className="flex justify-between mt-6 items-center">
              <div className="flex items-center p-4 justify-start">
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
                <span>: {selectedItem.count}</span>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <span className="text-lg font-semibold">총 결제 금액:</span>
          <span className="text-2xl font-bold text-green-600">
            {selectedItem ? selectedItem.price.toLocaleString() : '0'}원
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Payment;
