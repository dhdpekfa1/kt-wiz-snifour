import SEO from '@/components/SEO';
import { Banner, Breadcrumb, SearchBar } from '@/features/common';
import { NotFoundSearch, PlayerList } from '@/features/player';
import { usePlayerSearch } from '@/features/player/hooks/usePlayerSearch';

function PitcherPage() {
  const {
    filteredPlayerList,
    isLoading,
    isError,
    error,
    searchWord,
    handleSearch,
  } = usePlayerSearch();

  if (isError) {
    return <div>Error: {error?.toString()}</div>;
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
      <SEO
        title="wiz 선수단"
        description='KT Wiz의 자랑스런 "첫 번째 선수단"을 소개합니다.'
        keywords="ktwiz, 야구, 선수, 투수"
      />
      <Breadcrumb
        leftComponent={<SearchBar value={searchWord} onSubmit={handleSearch} />}
      />
      {!isLoading && !isError && filteredPlayerList?.length === 0 ? (
        <NotFoundSearch />
      ) : (
        <PlayerList
          playerList={filteredPlayerList ?? []}
          endpoint="pitcher"
          loading={isLoading}
        />
      )}
    </div>
  );
}

export default PitcherPage;
