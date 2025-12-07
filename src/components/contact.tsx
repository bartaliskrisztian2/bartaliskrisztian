import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Fade from 'react-reveal/Fade';

const styles = {
  link: {
    textDecoration: 'none',
    color: '#fff'
  },
  icon: {
    width: '100%',
    height: 40,
    color: 'text.primary',
  },
  iconWrapper: {
    textDecoration: 'none',
  }
};

export const Contact = () => (
  <Fade>
    <Grid pt={3} width="100%" id="contact">
      <Typography variant="h3" sx={{ color: 'text.primary' }}>
        contact
      </Typography>
      <Grid pt={2}>
        <Typography sx={{ color: '#8d8d8d' }}>
          follow me
        </Typography>
      </Grid>
      <Grid pt={3} columnSpacing={1} display="flex">
        <Grid p={1}>
          <a style={styles.link} target="_blank" rel="noreferrer" href='mailto:bartaliskrisztian4@gmail.com'>
            <EmailIcon style={styles.icon} />
          </a>
        </Grid>
        <Grid p={1}>
          <a style={styles.link} target="_blank" rel="noreferrer" href='https://github.com/bartaliskrisztian'>
            <GitHubIcon style={styles.icon} />
          </a>
        </Grid>
        <Grid p={1}>
          <a style={styles.link} target="_blank" rel="noreferrer" href='https://www.facebook.com/bartalis.krisztian'>
            <FacebookIcon style={styles.icon} />
          </a>
        </Grid>
        <Grid p={1}>
          <a style={styles.link} target="_blank" rel="noreferrer" href='https://www.instagram.com/bartaliskrisztian'>
            <InstagramIcon style={styles.icon} />
          </a>
        </Grid>
        <Grid p={1}>
          <a style={styles.link} target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/bartaliskrisztian'>
            <LinkedInIcon style={styles.icon} />
          </a>
        </Grid>
      </Grid>
    </Grid>
  </Fade>
);