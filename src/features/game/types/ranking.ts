import { OverallBatterRank } from '@/features/common/types/batters';
import { OverallPitcherRank } from '@/features/common/types/pitchers';

type RankingDto = {
  gyear?: string;
  pname?: string;
  sortKey?: string;
};

type PitcherRankingResponse = {
  data: {
    list: OverallPitcherRank[];
  };
};

type BatterRankingResponse = {
  data: {
    list: OverallBatterRank[];
  };
};

export type { RankingDto, PitcherRankingResponse, BatterRankingResponse };
