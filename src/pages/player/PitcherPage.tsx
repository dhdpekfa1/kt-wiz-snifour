import Banner from '@/features/common/Banner';
import Breadcrumb from '@/features/common/Breadcrumb';
import SearchBar from '@/features/media/common/SearchBar';
import { PlayerList } from '@/features/player/components';
import NotFoundSearch from '@/features/player/components/NotFoundSearch';
import { usePlayerSearch } from '@/features/player/hooks/usePlayerSearch';

function PitcherPage() {
  const { filteredPlayerList, loading, error, searchWord, handleSearch } =
    usePlayerSearch('pitcher');

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
        leftComponent={<SearchBar value={searchWord} onSubmit={handleSearch} />}
      />
      {!loading && !error && filteredPlayerList.length === 0 ? (
        <NotFoundSearch />
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
