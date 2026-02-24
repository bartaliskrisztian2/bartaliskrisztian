import createTheme from "@mui/material/styles/createTheme";
import SpaceGrotesk from "../assets/styles/space-grotesk.ttf";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      dark: '#779393'
    },
    text: {
      primary: '#fff',
      secondary: '#779393'
    }
  },
  typography: {
    fontFamily: 'SpaceGrotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    fontSize: 14,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: SpaceGrotesk;
          src: url(${SpaceGrotesk});
          font-weight: normal;
          font-style: normal;
        }
      `,
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.06)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          color: '#fff',
          fontWeight: 600,
          letterSpacing: '0.5px',
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
          color: '#fff',
          '&:hover': {
            background: 'rgba(133, 196, 103, 0.15)',
            borderColor: 'rgba(133, 196, 103, 0.5)',
            boxShadow: '0 4px 20px rgba(133, 196, 103, 0.25)',
          },
        },
      },
    },
  }
});