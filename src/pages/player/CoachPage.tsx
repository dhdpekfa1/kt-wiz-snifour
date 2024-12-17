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
      <Breadcrumb leftComponent={<SearchBar onSubmit={() => {}} />} />
      <PlayerList playerList={coachList} endpoint={'coach'} />
    </div>
  );
};

export default CoachPage;
