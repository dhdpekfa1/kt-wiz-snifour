import SEO from '@/components/SEO';
import { Tabs, TabsContent, TabsList } from '@/components/ui';
import {
  Banner,
  Breadcrumb,
  SearchBar,
  SubTabsTrigger,
} from '@/features/common';
import { NotFoundSearch, PlayerList } from '@/features/player';
import { usePlayerSearch } from '@/features/player/hooks/usePlayerSearch';
import { useTabFromUrl } from '@/hooks/useTabFromUrl';

const REG_TABS_CONFIG = [
  { value: 'catcher', path: '/catcher' },
  { value: 'infielder', path: '/infielder' },
  { value: 'outfielder', path: '/outfielder' },
];

function BatterPage() {
  const { currentTab, handleTabChange } = useTabFromUrl({
    basePath: '/player',
    tabs: REG_TABS_CONFIG,
    defaultTab: 'catcher',
  });

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
    <div className="text-white">
      <Banner>
        <Banner.Image
          src="https://placehold.co/1200x200/141414/642521?text=WIZ+BATTERS"
          alt="KT WIZ 타자"
        />
        <Banner.Overlay>
          <Banner.Heading title="KT Wiz 선수단" subtitle="타자" />
          <Banner.Description description="KT Wiz의 자랑스런 '첫 번째 선수단'을 소개합니다." />
        </Banner.Overlay>
      </Banner>
      <SEO
        title="wiz 선수단"
        description='KT Wiz의 자랑스런 "첫 번째 선수단"을 소개합니다.'
        keywords="ktwiz, 야구, 선수, 타자"
      />
      <Tabs defaultValue={currentTab} onValueChange={handleTabChange}>
        <TabsList>
          <SubTabsTrigger value="catcher">포수</SubTabsTrigger>
          <SubTabsTrigger value="infielder">내야수</SubTabsTrigger>
          <SubTabsTrigger value="outfielder">외야수</SubTabsTrigger>
        </TabsList>
        {REG_TABS_CONFIG.map(({ value }) => (
          <TabsContent value={value} key={value}>
            <>
              <Breadcrumb
                leftComponent={
                  <SearchBar value={searchWord} onSubmit={handleSearch} />
                }
              />
              {!isLoading && !isError && filteredPlayerList?.length === 0 ? (
                <NotFoundSearch />
              ) : (
                <PlayerList
                  playerList={filteredPlayerList ?? []}
                  endpoint={value}
                  loading={isLoading}
                />
              )}
            </>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default BatterPage;
