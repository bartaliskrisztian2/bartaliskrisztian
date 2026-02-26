import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import PlaceIcon from '@mui/icons-material/Place';
import Image3 from '../assets/images/home/bartalis-krisztian-3.png';
import Fade from 'react-reveal/Fade';
import { Box, Link } from "@mui/material";
import useImageLoading from "../hooks/use-image-loading";

const styles = {
  link: {
    textDecoration: 'none',
    color: "#85c467"
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    opacity: 0,
    transition: 'all 0.75s ease',
  },
  photoWrapper: {
    borderRadius: '50%',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.09)',
    boxShadow: '0 8px 40px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(0, 220, 200, 0.05)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    lineHeight: 0,
    aspectRatio: '1 / 1',
  }
} as any;

export const Home = () => {
  const { onImageLoad } = useImageLoading();

  return (
    <Fade>
      <Grid pt={{ xs: 1, md: 4 }} width="100%" id="home">

        {/* Hero: greeting + location */}
        <Grid container direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-end', md: 'center' }} gap={2}>
          <Typography variant="h3" sx={{ color: 'text.primary', pb: { xs: 2, md: 0 }, order: { xs: 1, md: 0 }, alignSelf: 'flex-start' }}>
            hi, I'm Krisz
            <span className="wave">👋</span>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.primary', order: { xs: 0, md: 1 }, pb: { xs: 1, md: 0 } }}>
            <PlaceIcon sx={{ pr: 1, verticalAlign: 'bottom' }} />
            Székelyudvarhely, Romania
          </Typography>
        </Grid>

        {/* Professional bio */}
        <Grid pt={2}>
          <Typography sx={{ color: '#8d8d8d' }} variant="body2">
            I'm a full stack web developer with almost 5 years experience and I currently work as a software engineer at <Link sx={styles.link} target="_blank" href="https://www.sonrisa.hu/">Sonrisa Technologies</Link>.
            As an enthusiastic software engineer, my constant pursuit involves acquiring new knowledge and seeking
            streamlined solutions to address current problems and challenges.
          </Typography>
          <Typography sx={{ color: '#8d8d8d', pt: 1 }} variant="body2">
            I very much enjoy working on both the front-end and back-end development. I find it important to maintain
            a balance between these two areas. I typically work with the technologies listed below, but I am always open
            to exploring new things. I understand that mastering various programming techniques and methodologies is
            more crucial than delving into the details of specific technologies.
          </Typography>
          <Typography sx={{ color: '#8d8d8d', pt: 1 }} variant="body2">
            Programming is also a hobby for me, and I greatly enjoy it. However, it is equally important for me to
            work in a friendly environment where I can continually improve.
          </Typography>
        </Grid>

        {/* About me: text left, photo right */}
        <Grid container pt={4} spacing={{ xs: 3, md: 5 }} alignItems="flex-start">
          <Grid item xs={12} md={7}>
            <Typography variant="h3" sx={{ color: 'text.primary', pb: 2 }}>
              a bit about me
            </Typography>
            <Grid container flexDirection="column" rowGap="12px">
              <Typography sx={{ color: '#8d8d8d' }} variant="body2">
                Just a guy trying to squeeze every drop out of life. Whether it's a side project, a pet project, or just diving into something new, there's always something brewing in my world. If only the day had more than 24 hours—then maybe I'd have enough time to build cool stuff, stay in shape, and nurture my relationships.
              </Typography>
              <Typography sx={{ color: '#8d8d8d' }} variant="body2">
                Balancing all these passions is a challenge, but that's what keeps life exciting. I thrive on self-improvement, pushing limits, and making every moment count. My interests? Personal growth, self-discipline, craft beer, and MMA. I play football, hit the gym whenever I can, and enjoy hiking or fishing when I need a reset.
              </Typography>
              <Typography sx={{ color: '#8d8d8d' }} variant="body2">
                And of course, life wouldn't be the same without my crew—an amazing bunch of friends who make every hangout legendary.
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, order: { xs: -1, md: 1 } }}>
            <Box sx={{ width: { xs: '65%', sm: '50%', md: '100%' }, maxWidth: '340px', ...styles.photoWrapper }}>
              <img
                src={Image3}
                alt="Bartalis Krisztian"
                onLoad={onImageLoad}
                style={styles.photo}
              />
            </Box>
          </Grid>
        </Grid>

      </Grid>
    </Fade>
  );
}
