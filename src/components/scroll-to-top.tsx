import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Fab, Tooltip } from '@mui/material';
import { useMemo } from 'react';
import { useWindowPosition } from '../hooks/use-window-position';

const styles = {
  root: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 10,
    visibility: 'hidden',
    opacity: 0,
    transition: 'opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 500ms',
  },
};

export const ScrollToTop = () => {
  const { scrollPosition, scrollToTop } = useWindowPosition();
  const rootSx = useMemo(() => ({
    ...styles.root,
    ...(scrollPosition > 30 ? {
      opacity: 1,
      visibility: 'visible',
    } : {})
  }), [scrollPosition]);

  return (
    <Box sx={rootSx} onClick={scrollToTop}>
      <Tooltip title="Scroll to top">
        <Fab size="small">
          <KeyboardArrowUpIcon fontSize="small" />
        </Fab>
      </Tooltip>
    </Box>
  );
}