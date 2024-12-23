import Breadcrumb from '../common/Breadcrumb';
import { PlayerList } from './components';
import data from '@/assets/data/__test__/catcherlist.json';
import { Player } from './types/player';

function CatcherTab() {
  const playerList: Player[] = data as Player[];

  return (
    <div className="my-20">
      <Breadcrumb />

      <PlayerList playerList={playerList} endpoint="catcher" />
    </div>
  );
}

export { CatcherTab };
