import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { seasons } from '@/constants/seasons';
import { rankingApi } from '@/features/game/apis/ranking/rankingApi';
import { findMaxStats } from '../services/find-maxstats.service';

interface MaxStats {
  [key: string]: number;
}

export function useMaxStats() {
  const { position } = useParams();

  switch (position) {
    case 'pitcher': {
      const {
        data: maxStats,
        isLoading,
        isError,
        error,
      } = useQuery({
        queryKey: ['max-stats', position],
        queryFn: async () => {
          const response = await rankingApi.getKTPitcherRanking({
            gyear: seasons[0],
            pname: '',
            sortKey: 'ERA',
          });
          return response;
        },
        select: (data) => {
          return findMaxStats(data.data.list ?? [], position);
        },
      });

      return { maxStats, isLoading, isError, error };
    }
    case 'catcher':
    case 'infielder':
    case 'outfielder': {
      const {
        data: maxStats,
        isLoading,
        isError,
        error,
      } = useQuery({
        queryKey: ['max-stats', position],
        queryFn: async () => {
          const response = await rankingApi.getKTBatterRanking({
            gyear: seasons[0],
            pname: '',
            sortKey: 'HRA',
          });
          return response;
        },
        select: (data) => {
          return findMaxStats(data.data.list ?? [], position);
        },
      });

      return { maxStats, isLoading, isError, error };
    }
    default: {
      return {
        maxStats: {} as MaxStats,
        isLoading: false,
        isError: true,
        error: 'position이 잘못되었습니다.',
      };
    }
  }
}
