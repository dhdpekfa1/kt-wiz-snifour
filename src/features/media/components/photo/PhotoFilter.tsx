import { Button } from '@/components/ui';
import { Input } from '@/components/ui/input';
import { DateRangePicker } from '@/features/media/components/photo/DateRangePicker';
import { cn } from '@/lib/utils';
import { Search as SearchIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';

const PhotoFilter = () => {
  const handleDateRangeChange = (range: DateRange | undefined) => {
    if (!range) return;
    console.log('Date range changed:', range);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-4">
      <form onSubmit={handleSubmit} className={cn('flex items-center gap-3')}>
        <DateRangePicker onDateRangeChange={handleDateRangeChange} />
        <div className={cn('relative w-full md:w-[300px]')}>
          <Input
            type="text"
            placeholder="검색어를 입력해주세요"
            className={cn(
              'border border-[#6B7280]/50 rounded-md pr-8 text-sm',
              'placeholder:text-[#c9c9cb] opacity-50',
              'hover:opacity-100 hover:border-wiz-white',
              'px-8'
            )}
          />
          <SearchIcon
            className={cn(
              'absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500'
            )}
            size={18}
          />
        </div>
        <Button
          className={cn(
            'shrink-0 rounded-md bg-wiz-white/10 text-white text-center hover:bg-wiz-white/20 transition-colors'
          )}
        >
          <span className={cn('px-1', 'text-wiz-white/80')}>검색</span>
        </Button>
      </form>
    </div>
  );
};

export default PhotoFilter;
