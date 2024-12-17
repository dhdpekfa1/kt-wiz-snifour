import { useState } from 'react';

import Breadcrumb from '@/features/common/Breadcrumb';
import { CrowdRankingChart } from './CrowdRankingChart';
import SubTitle from '@/features/common/SubTitle';
import { Select, SelectContent, SelectItem } from '@/components/ui';
import { SelectTrigger } from '@radix-ui/react-select';
import { seasons } from '@/constants/seasons';
import { ChevronDown } from 'lucide-react';
// import { useCrowdRank } from '@/assets/hooks/ranking';
import { crowd } from '@/assets/data/__test__/mockRanking.json';
import DataTable from '@/features/common/DataTable';
import { crowdRankColumns } from '@/constants/crowd-columns';

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
        <Select onValueChange={(value) => setSeason(value)} defaultValue="2024">
          <SelectTrigger
            asChild
            className="bg-wiz-white rounded pl-4 pr-2 py-1 text-black"
          >
            <div className="flex items-center gap-1">
              {season} 시즌
              <ChevronDown className="w-4" />
            </div>
          </SelectTrigger>
          <SelectContent className="w-fit">
            {seasons
              .filter((year) => Number(year) > 2018)
              .map((year) => (
                <SelectItem
                  value={year}
                  className="bg-wiz-white focus:bg-wiz-red focus:text-white"
                >
                  {year}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
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
