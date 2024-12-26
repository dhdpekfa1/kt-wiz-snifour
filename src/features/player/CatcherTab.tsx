import Breadcrumb from '../common/Breadcrumb';
import { PlayerList } from './components';
import { usePlayerList } from './hooks/usePlayerList';

function CatcherTab() {
  const { playerList, loading, error } = usePlayerList('catcher');

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="my-20">
      <Breadcrumb />

      <PlayerList
        playerList={playerList}
        endpoint="catcher"
        loading={loading}
      />
    </div>
  );
}

export { CatcherTab };
