import { useSearchParams } from 'react-router';
import Breadcrumb from '../common/Breadcrumb';
import SearchBar from '../media/common/SearchBar';
import { PlayerList } from './components';
import { usePlayerList } from './hooks/usePlayerList';

function OutfielderTab() {
  const { playerList, loading, error } = usePlayerList('outfielder');
  const [searchParams, setSearchParams] = useSearchParams();

  const searchWord = searchParams.get('searchWord') || '';

  // 검색 결과 필터링
  const filteredOutfielderList = playerList.filter((player) =>
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
      {!loading && !error && filteredOutfielderList.length === 0 ? (
        <p className="h-screen text-wiz-white font-bold text-center pt-4 text-xs md:text-base lg:text-xl">
          검색 결과가 없습니다.
        </p>
      ) : (
        <PlayerList
          playerList={error ? [] : filteredOutfielderList}
          endpoint="outfielder"
          loading={loading}
        />
      )}
    </>
  );
}

export { OutfielderTab };
