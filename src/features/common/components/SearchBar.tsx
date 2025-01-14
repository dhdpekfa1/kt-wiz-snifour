import { Button } from '@/components/ui';
import { Input } from '@/components/ui';
import { cn } from '@/lib/utils';
import { Search as SearchIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

const SearchBar = ({
  value,
  onSubmit,
}: {
  value?: string;
  onSubmit: (search: string) => void;
}) => {
  const [search, setSearch] = useState(value || '');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setSearch(searchParams.get('searchWord') || '');
  }, [searchParams]);

  return (
    <div className={cn('p-0')}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(search.trim());
        }}
        className={cn('flex-1 flex gap-3')}
      >
        <div className={cn('relative w-full md:w-[300px]')}>
          <Input
            type="text"
            placeholder="검색어를 입력해주세요"
            className={cn(
              'border border-[#6B7280]/50 rounded-md pr-8 text-xs md:text-sm',
              'placeholder:text-[#c9c9cb] opacity-50',
              'hover:opacity-100 hover:border-wiz-white',
              'px-8',
              'text-wiz-white'
            )}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon
            className={cn(
              'absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500',
              'w-3.5 md:w-4 h-auto'
            )}
            size={18}
          />
        </div>
        <Button
          type="submit"
          className={cn(
            'shrink-0 rounded-md bg-wiz-white/10 text-white text-center hover:bg-wiz-white/20 transition-colors'
          )}
        >
          <span
            className={cn('md:px-1', 'text-wiz-white/80 text-xs md:text-sm')}
          >
            검색
          </span>
        </Button>
      </form>
    </div>
  );
};

export { SearchBar };
