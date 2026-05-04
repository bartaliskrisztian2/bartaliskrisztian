import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

export const CursorGlow = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 220, 200, 0.055) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
        willChange: 'transform',
        '@media (pointer: coarse)': { display: 'none' },
      }}
    />
  );
};
