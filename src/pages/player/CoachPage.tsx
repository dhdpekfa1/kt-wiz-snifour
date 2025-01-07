import Banner from '@/features/common/Banner';
import Breadcrumb from '@/features/common/Breadcrumb';
import Layout from '@/features/common/Layout';
import SearchBar from '@/features/media/common/SearchBar';
import { PlayerList } from '@/features/player/components/';
import NotFoundSearch from '@/features/player/components/NotFoundSearch';
import useCoachList from '@/features/player/hooks/useCoachList';
import { useSearchParams } from 'react-router';

const CoachPage = () => {
  const { coachList, isLoading, isError, error } = useCoachList();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchWord = searchParams.get('searchWord') || '';

  if (isError) {
    return <div>Error: {error?.toString()}</div>;
  }

  // 검색 결과 필터링
  const filteredCoachList = coachList?.filter((coach) =>
    coach.playerName.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <Layout
      header={
        <Banner>
          <Banner.Image
            src="https://placehold.co/1200x200/141414/642521?text=COACHING+STEP"
            alt="KT WIZ Coach"
          />
          <Banner.Overlay>
            <Banner.Heading title="KT Wiz 선수단" subtitle="코칭 스텝" />
            <Banner.Description description="최고의 kt wiz 코칭스텝을 소개합니다." />
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
      {!isLoading && !isError && filteredCoachList?.length === 0 ? (
        <NotFoundSearch />
      ) : (
        <PlayerList
          playerList={filteredCoachList ?? []}
          endpoint="coach"
          loading={isLoading}
        />
      )}
    </Layout>
  );
};

export default CoachPage;
