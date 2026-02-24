import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import { techStacks } from "../assets/techStacks";
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { ReactNode } from "react";
import useImageLoading from "../hooks/use-image-loading";
import WebsiteIcon from '@mui/icons-material/Language';

const styles = {
  icon: {
    width: 20,
    height: 20
  },
  divider: {
    width: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)',
    my: 3
  },
  chip: {
    mx: 'auto',
    my: 4,
  },
  imageWrapper: {
    height: 90,
    px: '20px',
    maxWidth: '300px',
    mx: 'auto'
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'scale-down'
  },
  url: {
    textDecoration: 'none',
    textAlign: 'center',
    mx: 'auto',
    mt: 3,
    transition: 'all 300ms ease-in-out',
    '&:hover': {
      color: '#856a6a'
    } 
  }
};

interface IProjectDrawer {
  image: string;
  description: ReactNode;
  techStack: any[];
  duration: string;
  url?: {
    displayName: string;
    link: string;
  };
}

export const ProjectDrawer = ({ description, techStack, duration, image, url }: IProjectDrawer) => {
  const { onImageLoad } = useImageLoading();

  return (
    <Grid container flexDirection="column" padding="30px">
      <Grid item sx={styles.imageWrapper}>
        <Box
          component="img"
          className="smooth-loading"
          onLoad={onImageLoad}
          src={image}
          sx={styles.image}
        />
      </Grid>
      {url && (
        <Link href={url.link} target="_blank" sx={styles.url}>
          <Grid container gap="4px">
            <WebsiteIcon />
            <Typography>
              {url.displayName}
            </Typography>
          </Grid>
        </Link>
      )}
      <Divider sx={styles.divider} />
      <Typography variant="body2">
        {description}
      </Typography>
      <Divider sx={styles.divider} />
      <Grid>
        <Typography variant="subtitle1" fontWeight={700} mb={1}>Tech stack</Typography>
        <Grid container gap="8px">
          {techStack?.map((techName: string) => {
            const tech = techStacks?.[techName];
            return (
              <Typography variant="body2" display="flex" gap="4px">
                <img src={tech?.logo} alt={tech?.alt} style={styles.icon} />
                {tech?.name}
              </Typography>
            )
          })}
        </Grid>
      </Grid>
      <Divider sx={styles.divider} />
      <Grid>
        <Typography variant="subtitle1" fontWeight={700} mb={1}>Duration</Typography>
        <Typography variant="body2" display="flex" gap="4px">
          <HourglassBottomIcon />
          {duration}
        </Typography>
      </Grid>
    </Grid>
  );
};