import { useSearchParams } from 'react-router';
import { usePlayerList } from './usePlayerList';

function usePlayerSearch(playerType: string) {
  const { playerList, loading, error } = usePlayerList(playerType);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchWord = searchParams.get('searchWord') || '';

  // 검색 결과 필터링
  const filteredPlayerList = playerList.filter((player) =>
    player.playerName.toLowerCase().includes(searchWord.toLowerCase())
  );

  const handleSearch = (searchWord: string) => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      searchWord,
    });
  };

  return { filteredPlayerList, loading, error, searchWord, handleSearch };
}

export { usePlayerSearch };
