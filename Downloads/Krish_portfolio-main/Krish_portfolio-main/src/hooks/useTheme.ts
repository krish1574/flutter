import { useState, useCallback, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(true);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('light', !isDark);
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      setIsDark(prev => !prev);
      setTimeout(() => setTransitioning(false), 600);
    }, 50);
  }, []);

  return { isDark, toggleTheme, transitioning };
}
