import { addDays, format } from 'date-fns';
import * as React from 'react';

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { ko } from 'date-fns/locale';
import type { DateRange } from 'react-day-picker';

import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';

interface DateRangePickerProps {
  className?: string;
  onDateRangeChange?: (range: DateRange | undefined) => void;
}

export function DateRangePicker({
  className,
  onDateRangeChange,
}: DateRangePickerProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  const handleSelect = (range: DateRange | undefined) => {
    setDate(range);
    onDateRangeChange?.(range);
  };

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              'text-[#c9c9cb] opacity-50',
              'hover:opacity-100 hover:border-wiz-white',
              'border border-solid border-[#6B7280]/50'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'yyyy년 M월 d일', { locale: ko })} -{' '}
                  {format(date.to, 'yyyy년 M월 d일', { locale: ko })}
                </>
              ) : (
                format(date.from, 'yyyy년 M월 d일', { locale: ko })
              )
            ) : (
              <span>날짜를 선택하세요</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 border-none" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
