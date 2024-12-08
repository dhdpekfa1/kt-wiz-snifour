import { useEffect } from 'react';

const useScrollTo = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return null;
};

export default useScrollTo;
