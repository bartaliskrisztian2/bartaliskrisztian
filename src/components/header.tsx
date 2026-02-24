import { Typography, Link } from "@mui/material";
import AppBar from "@mui/material/AppBar/AppBar";
import Box from "@mui/material/Box/Box";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import { useWindowPosition } from "../hooks/use-window-position";
import { useMemo } from "react";

const NAV_BG_BASE = 'linear-gradient(90deg, rgba(0, 180, 170, 0.10) 0%, rgba(4, 4, 8, 0.82) 45%, rgba(120, 30, 220, 0.10) 100%)';
const NAV_BG_SCROLLED = 'linear-gradient(90deg, rgba(0, 180, 170, 0.18) 0%, rgba(4, 4, 8, 0.94) 45%, rgba(120, 30, 220, 0.18) 100%)';

const styles = {
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 9000,
    transition: 'all 0.5s ease',
    '-webkit-transform': 'translate3d(0, 0, 0)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    background: NAV_BG_BASE,
    borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
  },
  linkWrapper: {
    pr: 1,
  },
  link: {
    color: 'rgba(255, 255, 255, 0.85)',
    textDecoration: 'none',
    transition: 'all 300ms ease-in-out',
    '&:hover': {
      color: 'rgba(0, 220, 200, 1)',
    },
  },
};

export const Header = () => {
  const { scrollPosition } = useWindowPosition();
  const rootSx = useMemo(() => ({
    ...styles.root,
    background: scrollPosition > 30 ? NAV_BG_SCROLLED : NAV_BG_BASE,
    backdropFilter: scrollPosition > 30 ? 'blur(28px)' : 'blur(18px)',
    WebkitBackdropFilter: scrollPosition > 30 ? 'blur(28px)' : 'blur(18px)',
    borderBottom: scrollPosition > 30
      ? '1px solid rgba(255, 255, 255, 0.11)'
      : '1px solid rgba(255, 255, 255, 0.07)',
  }), [scrollPosition]);

  return (
    <Box sx={rootSx}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Box sx={{ width: { xs: '80%', md: '60%' }, mx: 'auto' }}>
          <Toolbar variant="dense" sx={{ padding: '0 !important', py: { xs: 1, md: 1.5 } }}>
            <Typography sx={styles.linkWrapper}>
              <Link href="#home" sx={styles.link}>home</Link>
            </Typography>
            <Typography sx={styles.linkWrapper}>
              <Link href="#work" sx={styles.link}>work</Link>
            </Typography>
            <Typography sx={styles.linkWrapper}>
              <Link href="#skills" sx={styles.link}>skills</Link>
            </Typography>
            <Typography sx={styles.linkWrapper}>
              <Link href="static/bartalis_krisztian_resume.pdf" target="_blank" sx={styles.link}>resume</Link>
            </Typography>
            <Typography sx={styles.linkWrapper}>
              <Link href="#contact" sx={styles.link}>contact</Link>
            </Typography>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
}
