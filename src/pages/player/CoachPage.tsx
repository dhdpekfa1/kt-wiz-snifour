import Breadcrumb from '@/features/common/Breadcrumb';
import SearchBar from '@/features/media/common/SearchBar';
import { getCoachList } from '@/features/player/apis';
import { PlayerList } from '@/features/player/components/';
import { Coach } from '@/features/player/types/player';
import { useEffect, useState } from 'react';

const CoachPage = () => {
  const [coachList, setCoachList] = useState<Coach[]>([]);

  useEffect(() => {
    fetchCoachData();
  }, []);

  const fetchCoachData = async () => {
    const res = await getCoachList();
    setCoachList(res);
  };

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
