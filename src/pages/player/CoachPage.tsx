import { useCoachList } from '@/features/game/hooks/useCoachList';
import Breadcrumb from '@/features/common/Breadcrumb';
import SearchBar from '@/features/media/common/SearchBar';
import { PlayerList } from '@/features/player/components/';

const CoachPage = () => {
  const { coachList, loading, error } = useCoachList();

  if (!coachList.length || loading) {
    return null;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Breadcrumb
        leftComponent={<SearchBar />}
        paths={[
          { key: 'home', label: 'Home' },
          { key: 'player', label: 'Player' },
          { key: 'wiz-player', label: 'Wiz Plyer' },
          { key: 'coach', label: '코치', isActive: true },
        ]}
      />
      <PlayerList playerList={coachList} endpoint={'coach'} />
    </div>
  );
};

export default CoachPage;
