import { Button } from '@/components/ui';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { debounce } from 'lodash-es';
import { Search as SearchIcon } from 'lucide-react';
import { useCallback, useDeferredValue, useEffect, useState } from 'react';

const SearchBar = () => {
  // TODO: store
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearchTerm = useDeferredValue(searchTerm);

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      if (term.trim()) {
        // api call
      }
    }, 500),
    []
  );

  useEffect(() => {
    debouncedSearch(deferredSearchTerm);
    return () => debouncedSearch.cancel();
  }, [deferredSearchTerm, debouncedSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={cn('p-0')}>
      <form onSubmit={handleSubmit} className={cn('flex-1 flex gap-2')}>
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon
            className={cn(
              'absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500'
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
          <span className={cn('px-1', 'text-wiz-white/80')}>검색</span>
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
