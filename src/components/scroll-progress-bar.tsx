import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

export const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollable = scrollHeight - clientHeight;
      setProgress(scrollable > 0 ? (scrollTop / scrollable) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: `${progress}%`,
      height: '2px',
      background: 'linear-gradient(90deg, #00dcc8, #85c467)',
      zIndex: 9999,
      transition: 'width 80ms linear',
      boxShadow: '0 0 8px rgba(0, 220, 200, 0.6)',
    }} />
  );
};
