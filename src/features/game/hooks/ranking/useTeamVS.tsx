import { useGetTeamVS } from '../../apis/ranking/rankingApi.query';

export function useTeamVS() {
  const { data: vs, isLoading, isError, error } = useGetTeamVS();

  return { vs, isLoading, isError, error };
}
