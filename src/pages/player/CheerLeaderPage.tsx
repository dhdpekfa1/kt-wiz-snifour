import Banner from '@/features/common/Banner';
import Breadcrumb from '@/features/common/Breadcrumb';
import Layout from '@/features/common/Layout';
import SearchBar from '@/features/media/common/SearchBar';
import NotFonudSearch from '@/features/player/components/NotFonudSearch';
import CheerleaderDialog from '@/features/player/components/cheerleader/CheerleaderDialog';
import useCheerleaderList from '@/features/player/hooks/useCheerleaderList';
import { useSearchParams } from 'react-router';

function CheerleaderPage() {
  const { cheerleaderList, loading, error } = useCheerleaderList();

  if (error) return <div>{error}</div>;

  const [searchParams, setSearchParams] = useSearchParams();

  const searchWord = searchParams.get('searchWord') || '';

  // 검색 결과 필터링
  const filteredCheerleaderList = cheerleaderList.filter((cheerleader) =>
    cheerleader.leaderName.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <Layout
      header={
        <Banner>
          <Banner.Image
            src="https://placehold.co/1200x200/141414/642521?text=CHEERLEADER"
            alt="KT WIZ Coach"
          />
          <Banner.Overlay>
            <Banner.Heading title="KT Wiz 선수단" subtitle="응원단" />
            <Banner.Description description="KT wiz의 꽃! KT wiz의 응원단" />
          </Banner.Overlay>
        </Banner>
      }
    >
      <Breadcrumb
        leftComponent={
          <SearchBar
            value={searchParams.get('searchWord') || ''}
            onSubmit={(searchWord) =>
              setSearchParams({
                ...Object.fromEntries(searchParams.entries()),
                searchWord,
              })
            }
          />
        }
      />
      {filteredCheerleaderList.length === 0 && !error && !loading ? (
        // 검색 결과 없음
        <NotFonudSearch />
      ) : (
        // 컴포넌트
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {filteredCheerleaderList.map((cheerleader) => (
            <CheerleaderDialog
              data={cheerleader}
              key={cheerleader.leaderName}
              loading={loading}
            />
          ))}
        </div>
      )}
    </Layout>
  );
}

export default CheerleaderPage;
