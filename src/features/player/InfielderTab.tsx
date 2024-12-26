import Breadcrumb from '../common/Breadcrumb';
import { PlayerList } from './components';
import { usePlayerList } from './hooks/usePlayerList';

function InfielderTab() {
  const { playerList, loading, error } = usePlayerList('infielder');

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="my-20">
      <Breadcrumb />

      <PlayerList
        playerList={playerList}
        endpoint="infielder"
        loading={loading}
      />
    </div>
  );
}

export { InfielderTab };
