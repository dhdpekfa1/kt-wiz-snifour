import { useGetPlayerList } from '@/features/player/apis/playerApi.query';
import { useParams } from 'react-router';

export const usePlayerList = () => {
  const { position } = useParams();
  const variables = {
    position,
  };

  const {
    data: playerList,
    isLoading,
    isError,
    error,
  } = useGetPlayerList({ variables });

  return { playerList, isLoading, isError, error };
};
