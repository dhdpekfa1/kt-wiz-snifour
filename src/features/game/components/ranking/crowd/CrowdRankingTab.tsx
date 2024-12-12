import Breadcrumb from '@/features/common/Breadcrumb';
import { CrowdRankingTable } from './CrowdRankingTable';

function CrowdRankingTab() {
  return (
    <div className="my-20">
      <Breadcrumb
        paths={[
          { key: 'home', label: 'Home' },
          { key: 'game', label: 'Game' },
          { key: 'regular', label: '정규 리그' },
          { key: 'ranking', label: '순위 기록' },
          { key: 'crowd', label: '관중 현황', isActive: true },
        ]}
      />

      <div>
        <CrowdRankingTable />
      </div>
    </div>
  );
}

export { CrowdRankingTab };
