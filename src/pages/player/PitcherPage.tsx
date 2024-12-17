import Breadcrumb from '@/features/common/Breadcrumb';
import { PlayerList } from '@/features/player/components';

function PitcherPage() {
  return (
    <div className="my-20">
      <Breadcrumb />

      {/* 투수 리스트 */}
      <PlayerList playerList={[]} endpoint="pitcher" />
    </div>
  );
}

export default PitcherPage;
