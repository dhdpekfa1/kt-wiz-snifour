import Breadcrumb from '../common/Breadcrumb';
import SearchBar from '../media/common/SearchBar';
import { PlayerList } from './components';
import NotFonudSearch from './components/NotFonudSearch';
import { usePlayerSearch } from './hooks/usePlayerSearch';

function InfielderTab() {
  const { filteredPlayerList, loading, error, searchWord, handleSearch } =
    usePlayerSearch('infielder');

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
          endpoint="infielder"
          loading={loading}
        />
      )}
    </>
  );
}

export { InfielderTab };
