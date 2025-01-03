import { useState } from 'react';

import { useSearchParams } from 'react-router';
import SearchBar from '@/features/media/common/SearchBar';
import CustomSelect from '@/features/common/CustomSelect.tsx';
import { seasons } from '@/constants/seasons';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [season, setSeason] = useState<string>(
    searchParams.get('gyear') || seasons[0]
  );

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
      <CustomSelect
        type="year"
        data={seasons}
        value={season}
        onChange={(value) => {
          setSeason(value);
          setSearchParams({
            ...Object.fromEntries(searchParams.entries()),
            gyear: value,
          });
        }}
      />
    </div>
  );
}

export default Filter;
