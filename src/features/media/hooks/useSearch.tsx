import { debounce } from 'lodash-es';
import { useCallback, useDeferredValue, useEffect, useState } from 'react';

interface UseSearchProps {
  onSearch: (term: string) => void;
  delay?: number;
}

export const useSearch = ({ onSearch, delay = 500 }: UseSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearchTerm = useDeferredValue(searchTerm);

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      if (term.trim()) {
        onSearch(term);
      }
    }, delay),
    []
  );

  useEffect(() => {
    debouncedSearch(deferredSearchTerm);
    return () => debouncedSearch.cancel();
  }, [deferredSearchTerm, debouncedSearch]);

  return {
    searchTerm,
    setSearchTerm,
  };
};
