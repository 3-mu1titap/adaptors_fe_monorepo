import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';

export default function TotalExchange({
  totalProcessing,
  totalComplete,
  totalMoney,
}: {
  totalProcessing: number;
  totalComplete: number;
  totalMoney: number;
}) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>총 정산 정보</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-500">총 정산대기</p>
            <p className="text-2xl font-bold">{totalProcessing}건</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">총 정상 완료</p>
            <p className="text-2xl font-bold">{totalComplete}건</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">총 정산 금액</p>
            <p className="text-2xl font-bold">
              {totalMoney.toLocaleString()}원
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
