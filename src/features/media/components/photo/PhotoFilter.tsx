import { DateRangePicker } from '@/features/media/components/photo/DateRangePicker';
import { useSearchParams } from 'react-router';
import SearchBar from '../../common/SearchBar';

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

export default PhotoFilter;
