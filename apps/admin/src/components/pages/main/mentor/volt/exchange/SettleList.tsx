import { exchangeDataType } from '@repo/admin/components/types/main/mypage/myPageTypes';
import { Button } from '@repo/ui/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';

export default function SettleList({
  filteredData,
}: {
  filteredData: exchangeDataType[];
}) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>환전 내역</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {filteredData.map((record) => (
            <li
              key={record.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-semibold">{record.volt} 볼트</p>
                <p className="text-sm text-gray-500">{record.date}</p>
              </div>
              <div className="text-right">
                <p>{record.money.toLocaleString()}원</p>
                <p
                  className={`text-sm ${record.status === 'COMPLETED' ? 'text-green-500' : 'text-yellow-500'}`}
                >
                  {record.status === 'COMPLETED' ? '완료' : '처리 중'}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
