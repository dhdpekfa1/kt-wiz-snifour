import { Button } from '@/components/ui';
import { SearchBar } from '@/features/common';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'react-router';

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <label className="text-neutral-500 text-sm">선수 검색</label>
        <SearchBar
          value={searchParams.get('pname') || ''}
          onSubmit={(searchWord) =>
            setSearchParams({
              ...Object.fromEntries(searchParams.entries()),
              pname: searchWord,
            })
          }
        />
        <Button
          type="button"
          className={cn(
            'shrink-0 rounded-md bg-wiz-white/10 text-white text-center hover:bg-wiz-white/20 transition-colors'
          )}
          onClick={() =>
            setSearchParams({
              ...Object.fromEntries(searchParams.entries()),
              pname: '',
            })
          }
        >
          <span
            className={cn('md:px-1', 'text-wiz-white/80 text-xs md:text-sm')}
          >
            초기화
          </span>
        </Button>
      </div>
    </div>
  );
}

export { Filter };
