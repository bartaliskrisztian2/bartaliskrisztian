import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import Fade from 'react-reveal/Fade';

export const Footer = () => (
  <Fade>
    <Grid pt={3}>
      <Typography sx={{ color: 'text.primary', textAlign: 'center' }}>
        Handcrafted by me © {new Date().getFullYear()}
      </Typography>
    </Grid>
  </Fade>
);