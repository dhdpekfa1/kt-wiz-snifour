import { crowdRankColumns } from '@/constants/columns/crowd-columns';
import { seasons } from '@/constants/seasons';
import Breadcrumb from '@/features/common/Breadcrumb';
import CustomSelect from '@/features/common/CustomSelect.tsx';
import DataTable from '@/features/common/DataTable';
import SubTitle from '@/features/common/SubTitle';
import { useCrowdRank } from '@/features/game/hooks/ranking';
import { CrowdRankingChart } from './CrowdRankingChart';
import { useSearchParams } from 'react-router';

function CrowdRankingTab() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { ranking, isLoading, isError, error } = useCrowdRank();
  const season = searchParams.get('gyear') || seasons[0];

  if (isError) {
    return <div>{error?.toString()}</div>;
  }

  if (!ranking?.length) {
    return null;
  }

  return (
    <div>
      <Breadcrumb />

      <div className="flex items-center justify-between">
        <SubTitle title={`${season} 시즌 누적 관중`} className="my-6" />

        {/* 시즌 선택 */}
        <CustomSelect
          type="year"
          data={seasons.filter((year) => Number(year) > 2018)}
          value={season}
          onChange={(value) =>
            setSearchParams({
              gyear: value,
            })
          }
        />
      </div>

      <div>
        <CrowdRankingChart data={ranking} loading={isLoading} />
        <DataTable
          data={ranking}
          columns={crowdRankColumns}
          domain="all"
          loading={isLoading}
        />
      </div>
    </div>
  );
}

export { CrowdRankingTab };
