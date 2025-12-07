import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import PlaceIcon from '@mui/icons-material/Place';
import Image1 from '../assets/images/home/bartalis-krisztian-1.jpg';
import Image2 from '../assets/images/home/bartalis-krisztian-2.jpg';
import Image3 from '../assets/images/home/bartalis-krisztian-3.png';
import Image4 from '../assets/images/home/alex.jpg';
import Image5 from '../assets/images/home/bartalis-krisztian-4.jpg';
import Image6 from '../assets/images/home/workspace.jpg';
import Fade from 'react-reveal/Fade';
import { Link } from "@mui/material";
import useImageLoading from "../hooks/use-image-loading";

const styles = {
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    objectFit: 'cover',
    opacity: 0,
    transition: 'all 0.75s ease',
    '-webkit-transition': 'all 0.75s ease',
    '-moz-transition': 'all 0.75s ease',
    '-ms-transition': 'all 0.75s ease',
    '-o-transition': 'all 0.75s ease',
  },
  link: {
    textDecoration: 'none',
    color: "#85c467"
  }
} as any;

export const Home = () => {
  const { onImageLoad } = useImageLoading();

  return (
    <Fade>
      <Grid pt={{ xs: 1, md: 4 }} width="100%" id="home">
        <Grid container direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
          <Typography variant="h3" sx={{ color: 'text.primary', pb: { xs: 2, md: 0 }, m: { xs: 'auto', md: 0 } }}>
            hi, I'm Krisz
            <span className="wave">👋</span>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.primary', m: { xs: 'auto', md: 0 } }}>
            <PlaceIcon sx={{ pr: 1, verticalAlign: 'bottom' }} />
            Székelyudvarhely, Romania
          </Typography>
        </Grid>
        <Grid pt={2}>
          <Typography sx={{ color: '#8d8d8d' }}>
            I’m a full stack web developer with 3 years experience and I currently work as a software engineer at <Link sx={styles.link} target="_blank" href="https://www.sonrisa.hu/">Sonrisa Technologies</Link>.
            As an enthusiastic software engineer, my constant pursuit involves acquiring new knowledge and seeking
            streamlined solutions to address current problems and challenges.
          </Typography>
          <Typography sx={{ color: '#8d8d8d', pt: 1 }}>
            I very much enjoy working on both the front-end and back-end development. I find it important to maintain
            a balance between these two areas. I typically work with the technologies listed below, but I am always open
            to exploring new things. I understand that mastering various programming techniques and methodologies is
            more crucial than delving into the details of specific technologies.
          </Typography>
          <Typography sx={{ color: '#8d8d8d', pt: 1 }}>
            Programming is a also hobby for me, and I
            greatly enjoy it. However, it is equally important for me to work in a friendly environment where I can
            continually improve.
          </Typography>
        </Grid>
        <Typography pt={3} variant="h3" sx={{ color: 'text.primary' }}>
          a bit about me
        </Typography>
        <Grid container pt={2} flexDirection="column" rowGap="12px">
          <Typography sx={{ color: '#8d8d8d' }} variant="body2">
            Just a guy trying to squeeze every drop out of life. Whether it's a side project, a pet project, or just diving into something new, there's always something brewing in my world. If only the day had more than 24 hours—then maybe I’d have enough time to build cool stuff, stay in shape, and nurture my relationships.
          </Typography >
          <Typography sx={{ color: '#8d8d8d' }} variant="body2">
            Balancing all these passions is a challenge, but that’s what keeps life exciting. I thrive on self-improvement, pushing limits, and making every moment count. My interests? Personal growth, self-discipline, craft beer, and MMA. I play football, hit the gym whenever I can, and enjoy hiking or fishing when I need a reset.
          </Typography >
          <Typography sx={{ color: '#8d8d8d' }} variant="body2">
            And of course, life wouldn’t be the same without my crew—an amazing bunch of friends who make every hangout legendary.
          </Typography>
        </Grid>
        <Grid container flexDirection="row" columnSpacing={1} rowSpacing={1} pt={3}>
          <Grid container item xs={6} md={4} rowSpacing={1}>
            <Grid item>
              <img src={Image6} alt="" onLoad={onImageLoad} style={styles.image} />
            </Grid>
            <Grid item>
              <img src={Image2} alt="" onLoad={onImageLoad} style={styles.image} />
            </Grid>
          </Grid>
          <Grid container item xs={6} md={4} rowSpacing={1}>
            <Grid item>
              <img src={Image3} alt="" onLoad={onImageLoad} style={styles.image} />
            </Grid>
            <Grid item>
              <img src={Image4} alt="" onLoad={onImageLoad} style={styles.image} />
            </Grid>
          </Grid>
          <Grid container item xs={12} md={4} columnSpacing={1} rowSpacing={1}>
            <Grid item xs={6} md={12}>
              <img src={Image5} alt="" onLoad={onImageLoad} style={styles.image} />
            </Grid>
            <Grid item xs={6} md={12}>
              <img src={Image1} alt="" onLoad={onImageLoad} style={styles.image} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fade>
  );
}
