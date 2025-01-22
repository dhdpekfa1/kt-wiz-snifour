import { SearchBar } from '@/features/common';
import { DateRangePicker } from '@/features/media';
import { useSearchParams } from 'react-router';

const PhotoFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="w-full flex flex-row items-center justify-between gap-4 lg:mt-4">
      <DateRangePicker />
      <SearchBar
        value={searchParams.get('searchWord') || ''}
        onSubmit={(searchWord) =>
          setSearchParams({
            ...Object.fromEntries(searchParams.entries()),
            searchWord,
          })
        }
      />
    </div>
  );
};

export { PhotoFilter };
