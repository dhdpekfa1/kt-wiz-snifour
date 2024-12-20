import { useState } from 'react';

// import { useCrowdRank } from '@/assets/hooks/ranking';
import { crowd } from '@/assets/data/__test__/mockRanking.json';
import { crowdRankColumns } from '@/constants/crowd-columns';
import { seasons } from '@/constants/seasons';
import Breadcrumb from '@/features/common/Breadcrumb';
import CustomSelect from '@/features/common/CustomSelect.tsx';
import DataTable from '@/features/common/DataTable';
import SubTitle from '@/features/common/SubTitle';
import { CrowdRankingChart } from './CrowdRankingChart';

function CrowdRankingTab() {
  const [season, setSeason] = useState<string>('2024');
  // const { ranking, loading, error } = useCrowdRank(season);

  // if (!ranking.length || loading) {
  //   return null;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  const ranking = crowd;

  return (
    <div className="my-20">
      <Breadcrumb />

      <div className="flex items-center justify-between">
        <SubTitle title={`${season} 시즌 누적 관중`} className="my-6" />

        {/* 시즌 선택 */}
        <CustomSelect
          type="year"
          data={seasons.filter((year) => Number(year) > 2018)}
          value={season}
          onChange={(value) => setSeason(value)}
        />
      </div>

      <div>
        <CrowdRankingChart data={ranking} />
        {/* <CrowdRankingTable data={ranking} /> */}
        <DataTable data={ranking} columns={crowdRankColumns} domain="all" />
      </div>
    </div>
  );
}

export { CrowdRankingTab };
