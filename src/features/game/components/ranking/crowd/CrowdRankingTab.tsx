import { useEffect, useState } from 'react';
import axios from 'axios';

import { CrowdRank } from '@/features/game/types/crowd-ranking';
import { API_URL } from '@/constants/api-url';
import Breadcrumb from '@/features/common/Breadcrumb';
import { CrowdRankingTable } from './CrowdRankingTable';
import { CrowdRankingChart } from './CrowdRankingChart';
import SubTitle from '@/features/common/SubTitle';
import { Select, SelectContent, SelectItem } from '@/components/ui';
import {
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from '@radix-ui/react-select';
import { seasons } from '@/constants/seasons';
import { ChevronDown } from 'lucide-react';

function CrowdRankingTab() {
  const [ranking, setRanking] = useState<CrowdRank[]>([]);
  const [season, setSeason] = useState<string>('2024');

  useEffect(() => {
    const getCrowdRanking = async () => {
      try {
        const { data, status } = await axios.get(
          `${API_URL}/game/rank/crowd?gyear=${season}`
        );

        if (status === 200 && data) {
          setRanking(data.data.list || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getCrowdRanking();
  }, [season]);

  if (!ranking) {
    return null;
  }

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
            {seasons.map((year) => (
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
        <CrowdRankingTable data={ranking} />
      </div>
    </div>
  );
}

export { CrowdRankingTab };
