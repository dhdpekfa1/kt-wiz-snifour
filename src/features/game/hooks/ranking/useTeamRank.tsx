import {
  useGetTeamRanking,
  useGetTeamRankingByBatter,
  useGetTeamRankingByPitcher,
} from '../../apis/ranking/rankingApi.query';

export function useTeamRank(type: 'team' | 'pitcher' | 'batter') {
  switch (type) {
    case 'team': {
      const {
        data: ranking,
        isLoading,
        isError,
        isSuccess,
        error,
      } = useGetTeamRanking();

      return { ranking, isLoading, isSuccess, isError, error };
    }
    case 'pitcher': {
      const {
        data: ranking,
        isLoading,
        isError,
        isSuccess,
        error,
      } = useGetTeamRankingByPitcher();

      return { ranking, isLoading, isSuccess, isError, error };
    }
    case 'batter': {
      const {
        data: ranking,
        isLoading,
        isSuccess,
        isError,
        error,
      } = useGetTeamRankingByBatter();

      return { ranking, isLoading, isSuccess, isError, error };
    }
    default:
      return {
        ranking: [],
        isLoading: false,
        isError: true,
        isSuccess: false,
        error: 'type이 올바르지 않습니다.',
      };
  }
}
