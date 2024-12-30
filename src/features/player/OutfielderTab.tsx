import Breadcrumb from '../common/Breadcrumb';
import { PlayerList } from './components';
import { usePlayerList } from './hooks/usePlayerList';

function OutfielderTab() {
  const { playerList, loading, error } = usePlayerList('outfielder');

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="my-20">
      <Breadcrumb />

      <PlayerList
        playerList={playerList}
        endpoint="outfielder"
        loading={loading}
      />
    </div>
  );
}

export { OutfielderTab };
