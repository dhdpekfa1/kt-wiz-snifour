import { OverallPitcherRank } from '@/features/common/types/pitchers';

type RankingDto = {
  gyear?: string;
  pname?: string;
  sortKey?: string;
};

type RankingResponse = {
  data: {
    list: OverallPitcherRank[];
  };
};

export type { RankingDto, RankingResponse };
