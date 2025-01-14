import { useGetPlayerDetail } from '@/features/player/apis/playerApi.query';
import { useParams, useSearchParams } from 'react-router';

export const usePlayer = () => {
  const { position } = useParams();
  const [searchParams] = useSearchParams();
  const pcode = searchParams.get('pcode') ?? '';

  if (!position) {
    return { player: null, loading: false, error: 'position이 없습니다.' };
  }

  if (!pcode.length) {
    return { player: null, loading: false, error: 'pcode가 없습니다.' };
  }

  const variables = {
    position,
    pcode,
  };

  const {
    data: player,
    isLoading,
    isError,
    error,
  } = useGetPlayerDetail({
    variables,
  });

  return { player, isLoading, isError, error };
};
