import Breadcrumb from '../common/Breadcrumb';
import { PlayerList } from './components';
import { Player } from './types/player';
import data from '@/assets/data/__test__/outfielderlist.json';

function OutfielderTab() {
  const playerList: Player[] = data as Player[];

  return (
    <div className="my-20">
      <Breadcrumb />

      <PlayerList playerList={playerList} endpoint="catcher" />
    </div>
  );
}

export { OutfielderTab };
