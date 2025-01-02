import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';
import { format, subDays } from 'date-fns';

import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { ko } from 'date-fns/locale';
import type { DateRange } from 'react-day-picker';

import { CalendarIcon } from 'lucide-react';

interface DateRangePickerProps {
  className?: string;
}

export function DateRangePicker({ className }: DateRangePickerProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [date, setDate] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  });

  useEffect(() => {
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    if (!startDate && !endDate) {
      setDate({
        from: subDays(new Date(), 7),
        to: new Date(),
      });
    }
    if (startDate) {
      setDate({
        from: new Date(startDate),
        to: endDate ? new Date(endDate) : new Date(),
      });
    }
  }, [searchParams]);

  const handleSubmitDate = () => {
    if (!date || !date.from) return;

    const { from, to } = date;
    const startDate = format(from, 'yyyy-MM-dd');
    const endDate = format(to || from, 'yyyy-MM-dd');

    const updatedSearchParams = new URLSearchParams();
    updatedSearchParams.set('startDate', startDate);
    updatedSearchParams.set('endDate', endDate);

    setSearchParams(updatedSearchParams);
  };

  const handleSelect = (range: DateRange | undefined) => {
    setDate(range);
  };

  return (
    <div className={cn('flex items-center gap-2 w-fit', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              'justify-start text-left font-normal',
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
      <Button
        type="button"
        className={cn(
          'shrink-0 rounded-md bg-wiz-white/10 text-white text-center hover:bg-wiz-white/20 transition-colors'
        )}
        onClick={() => handleSubmitDate()}
      >
        <span className={cn('px-1', 'text-wiz-white/80')}>검색</span>
      </Button>
    </div>
  );
}
