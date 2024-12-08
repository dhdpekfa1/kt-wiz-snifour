import * as React from 'react';

import { cn } from '@/lib/utils';
import { ko } from 'date-fns/locale';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'p-3 bg-wiz-black border border-[rgba(107,114,128,0.3)] rounded-lg',
        className
      )}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium text-wiz-white',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 hover:bg-wiz-white/10 rounded transition-colors'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-gray-400 rounded-md w-8 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: cn(
          'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-wiz-red/10',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md'
        ),
        day: cn(
          'h-8 w-8 p-0 font-normal aria-selected:opacity-100 text-wiz-white hover:bg-white/10 rounded-md transition-colors'
        ),
        day_range_start: 'day-range-start',
        day_range_end: 'day-range-end',
        day_selected:
          'bg-wiz-red text-wiz-white hover:bg-wiz-red hover:text-wiz-white focus:bg-wiz-red focus:text-wiz-white',
        day_today: 'bg-[#6B7280] text-wiz-white',
        day_outside: 'text-gray-600 opacity-50',
        day_disabled: 'text-gray-600 opacity-50',
        day_range_middle:
          'aria-selected:bg-wiz-red/10 aria-selected:text-wiz-white',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeftIcon className="h-4 w-4 text-gray-400" />,
        IconRight: () => <ChevronRightIcon className="h-4 w-4 text-gray-400" />,
      }}
      locale={ko}
      {...props}
    />
  );
}
