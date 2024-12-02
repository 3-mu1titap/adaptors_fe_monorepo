import { Button } from '@repo/ui/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';

interface ExchangeRecord {
  id: number;
  date: string;
  volt: number;
  status: 'processing' | 'complete';
  money: number;
}

export default function SettleList({
  filteredData,
  handleCancel,
}: {
  filteredData: ExchangeRecord[];
  handleCancel: (id: number) => void;
}) {
  return (
    <Card>
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
                  className={`text-sm ${record.status === 'complete' ? 'text-green-500' : 'text-yellow-500'}`}
                >
                  {record.status === 'complete' ? '완료' : '처리 중'}
                </p>
              </div>
              {record.status === 'processing' && (
                <Button
                  variant="destructive"
                  onClick={() => handleCancel(record.id)}
                >
                  취소
                </Button>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
