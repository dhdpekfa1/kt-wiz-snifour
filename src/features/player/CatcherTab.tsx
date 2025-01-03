import { useSearchParams } from 'react-router';
import Breadcrumb from '../common/Breadcrumb';
import SearchBar from '../media/common/SearchBar';
import { PlayerList } from './components';
import NotFonudSearch from './components/NotFonudSearch';
import { usePlayerList } from './hooks/usePlayerList';

function CatcherTab() {
  const { playerList, loading, error } = usePlayerList('catcher');
  const [searchParams, setSearchParams] = useSearchParams();

  const searchWord = searchParams.get('searchWord') || '';

  // 검색 결과 필터링
  const filteredCatcherList = playerList.filter((player) =>
    player.playerName.toLowerCase().includes(searchWord.toLowerCase())
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Breadcrumb
        leftComponent={
          <SearchBar
            value={searchParams.get('searchWord') || ''}
            onSubmit={(searchWord) =>
              setSearchParams({
                ...Object.fromEntries(searchParams.entries()),
                searchWord,
              })
            }
          />
        }
      />
      {!loading && !error && filteredCatcherList.length === 0 ? (
        <NotFonudSearch />
      ) : (
        <PlayerList
          playerList={error ? [] : filteredCatcherList}
          endpoint="catcher"
          loading={loading}
        />
      )}
    </>
  );
}

export { CatcherTab };
