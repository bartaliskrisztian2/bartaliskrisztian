import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Fade from 'react-reveal/Fade';
import { Box } from "@mui/material";

const styles = {
  link: {
    textDecoration: 'none',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    color: '#fff',
  },
};

const iconCardSx = {
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '12px',
  p: 1.5,
  transition: 'all 300ms ease-in-out',
  '&:hover': {
    background: 'rgba(133, 196, 103, 0.12)',
    borderColor: 'rgba(133, 196, 103, 0.4)',
    boxShadow: '0 4px 16px rgba(133, 196, 103, 0.2)',
    transform: 'translateY(-2px)',
  },
};

export const Contact = () => (
  <Fade>
    <Grid pt={3} width="100%" id="contact">
      <Typography variant="h3" sx={{ color: 'text.primary' }}>
        follow me
      </Typography>
     
      <Grid pt={3} display="flex" gap={1.5}>
        <Box sx={iconCardSx}>
          <a style={styles.link} target="_blank" rel="noreferrer" href='mailto:bartaliskrisztian4@gmail.com'>
            <EmailIcon style={styles.icon} />
          </a>
        </Box>
        <Box sx={iconCardSx}>
          <a style={styles.link} target="_blank" rel="noreferrer" href='https://github.com/bartaliskrisztian'>
            <GitHubIcon style={styles.icon} />
          </a>
        </Box>
        <Box sx={iconCardSx}>
          <a style={styles.link} target="_blank" rel="noreferrer" href='https://www.facebook.com/bartalis.krisztian'>
            <FacebookIcon style={styles.icon} />
          </a>
        </Box>
        <Box sx={iconCardSx}>
          <a style={styles.link} target="_blank" rel="noreferrer" href='https://www.instagram.com/bartaliskrisztian'>
            <InstagramIcon style={styles.icon} />
          </a>
        </Box>
        <Box sx={iconCardSx}>
          <a style={styles.link} target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/bartaliskrisztian'>
            <LinkedInIcon style={styles.icon} />
          </a>
        </Box>
      </Grid>
    </Grid>
  </Fade>
);