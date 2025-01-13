import { useParams } from 'react-router';
import { useGetPlayerList } from '../apis/playerApi.query';

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
