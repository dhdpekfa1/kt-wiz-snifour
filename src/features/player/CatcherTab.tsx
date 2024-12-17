import Breadcrumb from '../common/Breadcrumb';
import { PlayerList } from './components';

function CatcherTab() {
  return (
    <div className="my-20">
      <Breadcrumb />

      <PlayerList playerList={[]} endpoint="catcher" />
    </div>
  );
}

export { CatcherTab };
