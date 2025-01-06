import {
  useGetTeamRanking,
  useGetTeamRankingByBatter,
  useGetTeamRankingByPitcher,
} from '../../apis/ranking/rankingApi.query';

export function useTeamRank(type: 'team' | 'pitcher' | 'batter') {
  switch (type) {
    case 'team': {
      const { data: ranking, isLoading, isError, error } = useGetTeamRanking();

      return { ranking, isLoading, isError, error };
    }
    case 'pitcher': {
      const {
        data: ranking,
        isLoading,
        isError,
        error,
      } = useGetTeamRankingByPitcher();

      return { ranking, isLoading, isError, error };
    }
    case 'batter': {
      const {
        data: ranking,
        isLoading,
        isError,
        error,
      } = useGetTeamRankingByBatter();

      return { ranking, isLoading, isError, error };
    }
    default:
      return {
        ranking: [],
        isLoading: false,
        isError: true,
        error: 'type이 올바르지 않습니다.',
      };
  }
}
