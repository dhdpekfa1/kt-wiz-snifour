import Banner from '@/features/common/Banner';
import Breadcrumb from '@/features/common/Breadcrumb';
import Layout from '@/features/common/Layout';
import { useCoachList } from '@/features/game/hooks/useCoachList';
import SearchBar from '@/features/media/common/SearchBar';
import { PlayerList } from '@/features/player/components/';

const CoachPage = () => {
  const { coachList, loading, error } = useCoachList();

  const handleSubmit = () => {
    console.log('TODO: 이벤트 구현');
  };

  return (
    <Layout
      header={
        <Banner>
          <Banner.Image
            src="https://placehold.co/1200x200/141414/642521?text=COACHING+STEP"
            alt="KT WIZ Coach"
          />
          <Banner.Overlay>
            <Banner.Heading
              title="코칭 스텝"
              subtitle="최고의 kt wiz 코칭스텝을 소개합니다."
            />
            <Banner.Description description="" />
          </Banner.Overlay>
        </Banner>
      }
    >
      <Breadcrumb
        leftComponent={<SearchBar onSubmit={handleSubmit} />}
        paths={[
          { key: 'home', label: 'Home' },
          { key: 'player', label: 'Player' },
          { key: 'wiz-player', label: 'Wiz Plyer' },
          { key: 'coach', label: '코치', isActive: true },
        ]}
      />
      <PlayerList
        playerList={error ? [] : coachList}
        endpoint="coach"
        loading={loading}
      />
    </Layout>
  );
};

export default CoachPage;
