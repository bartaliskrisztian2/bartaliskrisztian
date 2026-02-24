import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import JohnHairImage from "../assets/images/work/johnhair.avif";
import TherapistiImage from '../assets/images/work/therapisti.svg';
import HFNImage from '../assets/images/work/hfn_logo.webp';
import BoldingatlanImage from '../assets/images/work/boldingatlan.png';
import { Box, Chip } from "@mui/material";
import useImageLoading from "../hooks/use-image-loading";

const styles = {
  chip: {
    mx: 'auto',
    my: 4,
  },
  imageWrapper: {
    height: 90,
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '12px',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.04)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
    transition: 'all 300ms ease-in-out',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'block',
    '&:hover': {
      borderColor: 'rgba(133, 196, 103, 0.5)',
      boxShadow: '0 8px 32px rgba(133, 196, 103, 0.15)',
      background: 'rgba(255, 255, 255, 0.07)',
      transform: 'translateY(-3px)',
    }
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'scale-down'
  }
};

type Project = {
  image: string;
  url?: string;
};

const projects: Project[] = [
  { image: HFNImage, url: "https://hargitafightnight.ro" },
  { image: TherapistiImage },
  { image: BoldingatlanImage, url: "https://boldingatlan.hu" },
  { image: JohnHairImage, url: "https://johnhair.ro" },
];

export const MyWorks = () => {
  const { onImageLoad } = useImageLoading();

  return (
    <Grid pt={3} width="100%" id="work">
      <Typography variant="h3" sx={{ color: 'text.primary' }}>
        my recent work
      </Typography>
      <Typography variant="body1" pt={2} sx={{ color: '#8d8d8d' }}>
        Here are a few past projects I've worked on.
      </Typography>
      <Grid container>
        <Chip sx={styles.chip} label="Side projects" />
      </Grid>
      <Grid container pt={1} gap={3} justifyContent="center">
        {projects.map((project, i) => (
          <Grid
            key={i}
            item
            xs={12} sm={6} md={4} lg={3}
            component={project.url ? 'a' : 'div'}
            href={project.url}
            target={project.url ? '_blank' : undefined}
            rel={project.url ? 'noreferrer' : undefined}
            sx={{
              ...styles.imageWrapper,
              ...(project.url ? {} : { cursor: 'default', '&:hover': {} }),
            }}
          >
            <Box
              component="img"
              className="smooth-loading"
              onLoad={onImageLoad}
              src={project.image}
              sx={styles.image}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
