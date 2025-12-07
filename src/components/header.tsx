import { Typography, useMediaQuery, useTheme, Link } from "@mui/material";
import AppBar from "@mui/material/AppBar/AppBar";
import Box from "@mui/material/Box/Box";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import { useWindowPosition } from "../hooks/use-window-position";
import { useMemo } from "react";

const styles = {
  root: {
    width: '100%',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    transition: 'background-color 1s ease',
    zIndex: 9000,
   '-webkit-transform': 'translate3d(0, 0, 0)',
  },
  linkWrapper: {
    pr: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    transition: 'all 300ms ease-in-out',
    '&:hover': {
      color: '#856a6a'
    } 
  }
};

export const Header = () => {
  const { scrollPosition } = useWindowPosition();
  const theme = useTheme();
  const isMobileView = useMediaQuery(() => theme.breakpoints.down('sm'));
  const rootSx = useMemo(() => ({
    ...styles.root,
    ...(isMobileView ? {
      position: 'initial',
    } : {}),
    backgroundColor: scrollPosition > 30 ? 'rgba(1, 1, 1, 0.8)' : 'transparent',
  }), [isMobileView, scrollPosition]);
  
  return (
    <Box sx={rootSx}>
      <AppBar position="static" sx={{ backgroundColor: 'inherit', pt: { xs: 0, md: 2 } }}>
        <Toolbar variant="dense" sx={{ padding: '0 !important' }}>
          <Typography sx={styles.linkWrapper}>
            <Link href="#home" sx={styles.link}>
              home
            </Link>
          </Typography>
          <Typography sx={styles.linkWrapper}>
            <Link href="#work" sx={styles.link}>
              work
            </Link>
          </Typography>
          <Typography sx={styles.linkWrapper}>
            <Link href="#skills" sx={styles.link}>
              skills
            </Link>
          </Typography>
          <Typography sx={styles.linkWrapper}>
            <Link href="static/bartalis_krisztian_resume.pdf" target="_blank" sx={styles.link}>
              resume
            </Link>
          </Typography>
          <Typography sx={styles.linkWrapper}>
            <Link href="#contact" sx={styles.link}>
              contact
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
