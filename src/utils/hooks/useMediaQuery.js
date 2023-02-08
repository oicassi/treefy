import { useEffect, useState } from 'react';
import { browser } from '..';

const BASE_SIZES = {
  mobile: '(max-width: 480px)',
  tablet: '(max-width: 768px)',
  desktop: '(max-width: 1024px)',
};

const useMediaQuery = (size) => {
  const [matches, setMatches] = useState(false);

  const query = BASE_SIZES[size] ?? `(max-width: ${size}px)`;

  useEffect(() => {
    if (!browser.isClient()) return;
    const handleResize = () => setMatches(window.matchMedia(query).matches);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return matches;
};

export default useMediaQuery;
