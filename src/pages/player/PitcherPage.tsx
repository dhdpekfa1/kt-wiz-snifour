import Banner from '@/features/common/Banner';
import Breadcrumb from '@/features/common/Breadcrumb';
import SearchBar from '@/features/media/common/SearchBar';
import { PlayerList } from '@/features/player/components';
import { usePlayerList } from '@/features/player/hooks/usePlayerList';
import { useSearchParams } from 'react-router';

function PitcherPage() {
  const { playerList, loading, error } = usePlayerList('pitcher');
  const [searchParams, setSearchParams] = useSearchParams();

  const searchWord = searchParams.get('searchWord') || '';

  // 검색 결과 필터링
  const filteredPlayerList = playerList.filter((coach) =>
    coach.playerName.toLowerCase().includes(searchWord.toLowerCase())
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Banner>
        <Banner.Image
          src="https://placehold.co/1200x200/141414/642521?text=WIZ+PITCHERS"
          alt="KT WIZ 투수"
        />
        <Banner.Overlay>
          <Banner.Heading title="KT Wiz 선수단" subtitle="투수" />
          <Banner.Description description="KT Wiz의 자랑스런 '첫 번째 선수단'을 소개합니다." />
        </Banner.Overlay>
      </Banner>
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
      {!loading && !error && filteredPlayerList.length === 0 ? (
        <p className="h-screen text-wiz-white font-bold text-center pt-4 text-xs md:text-base lg:text-xl">
          검색 결과가 없습니다.
        </p>
      ) : (
        <PlayerList
          playerList={error ? [] : filteredPlayerList}
          endpoint="pitcher"
          loading={loading}
        />
      )}
    </div>
  );
}

export default PitcherPage;
