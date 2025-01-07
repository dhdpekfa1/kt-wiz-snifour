import { useSearchParams } from 'react-router';
import { usePlayerList } from './usePlayerList';

function usePlayerSearch() {
  const { playerList, isLoading, isError, error } = usePlayerList();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchWord = searchParams.get('searchWord') || '';

  // 검색 결과 필터링
  const filteredPlayerList = playerList?.filter((player) =>
    player.playerName.toLowerCase().includes(searchWord.toLowerCase())
  );

  const handleSearch = (searchWord: string) => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      searchWord,
    });
  };

  return {
    filteredPlayerList,
    isLoading,
    isError,
    error,
    searchWord,
    handleSearch,
  };
}

export { usePlayerSearch };
