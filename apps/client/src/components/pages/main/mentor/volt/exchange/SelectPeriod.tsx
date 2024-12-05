import { Button } from '@repo/ui/components/ui/button';
import { Calendar } from '@repo/ui/components/ui/calendar';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@repo/ui/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/ui/components/ui/select';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

interface DateRange {
  from: Date;
  to: Date;
}

export default function SelectPeriod({
  period,
  setPeriod,
  dateRange,
  handleDateRangeSelect,
}: {
  period: string;
  setPeriod: React.Dispatch<React.SetStateAction<string>>;
  dateRange: DateRange;
  handleDateRangeSelect: (range: DateRange | undefined) => void;
}) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>기간 선택</CardTitle>
      </CardHeader>
      <CardContent className="flex space-x-4">
        <Select onValueChange={setPeriod} defaultValue={period}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="기간 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="오늘">오늘</SelectItem>
            <SelectItem value="1주일">1주일</SelectItem>
            <SelectItem value="1개월">1개월</SelectItem>
            <SelectItem value="기간 선택">기간 선택</SelectItem>
          </SelectContent>
        </Select>
        {period === '기간 선택' && (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={`w-[300px] justify-start text-left font-normal ${
                  !dateRange.from && 'text-muted-foreground'
                }`}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateRange.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, 'LLL dd, y')} -{' '}
                      {format(dateRange.to, 'LLL dd, y')}
                    </>
                  ) : (
                    format(dateRange.from, 'LLL dd, y')
                  )
                ) : (
                  <span>기간을 선택하세요</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={dateRange.from}
                selected={dateRange}
                onSelect={handleDateRangeSelect}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        )}
      </CardContent>
    </Card>
  );
}
