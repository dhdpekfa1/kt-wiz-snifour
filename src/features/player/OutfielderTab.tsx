import Breadcrumb from '../common/Breadcrumb';
import SearchBar from '../media/common/SearchBar';
import { PlayerList } from './components';
import NotFonudSearch from './components/NotFoundSearch';
import { usePlayerSearch } from './hooks/usePlayerSearch';

function OutfielderTab() {
  const { filteredPlayerList, loading, error, searchWord, handleSearch } =
    usePlayerSearch('outfielder');

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Breadcrumb
        leftComponent={<SearchBar value={searchWord} onSubmit={handleSearch} />}
      />
      {!loading && !error && filteredPlayerList.length === 0 ? (
        <NotFonudSearch />
      ) : (
        <PlayerList
          playerList={error ? [] : filteredPlayerList}
          endpoint="outfielder"
          loading={loading}
        />
      )}
    </>
  );
}

export { OutfielderTab };
