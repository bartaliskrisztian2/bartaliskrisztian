import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import Fade from 'react-reveal/Fade';
import { Box } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';

type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  description: string;
  tech?: string[];
};

const entries: ExperienceEntry[] = [
  {
    company: 'Sonrisa Technologies',
    role: 'Tech Lead & Software Engineer',
    period: '2021 – Present',
    description:
      'Leading technical direction across multiple client products — from architectural decisions and effort estimation to direct client communication. Building and maintaining scalable full-stack applications, driving code quality, and making sure the team ships the right thing in the right way.',
    tech: ['React', 'TypeScript', 'NestJS', 'AWS', 'PostgreSQL', 'Docker'],
  },
  {
    company: 'Freelance',
    role: 'Full-Stack Developer',
    period: '',
    description:
      'End-to-end ownership of client projects — booking platforms, real estate portals, event websites and more. Handled everything from initial scoping and design decisions to client communication, iterative feedback loops, and production deployment.',
    tech: ['React', 'NodeJS', 'PHP', 'MySQL'],
  },
];

export const Experience = () => (
  <Fade>
    <Grid pt={3} width="100%" id="experience">
      <Typography variant="h3" sx={{ color: 'text.primary' }}>
        experience
      </Typography>

      <Box sx={{ mt: 3, position: 'relative' }}>
        {/* Vertical line */}
        <Box sx={{
          position: 'absolute',
          left: { xs: 16, md: 20 },
          top: 8,
          bottom: 8,
          width: '1px',
          background: 'linear-gradient(180deg, rgba(133,196,103,0.5) 0%, rgba(133,196,103,0.1) 100%)',
        }} />

        {entries.map((entry, i) => (
          <Box key={i} sx={{ display: 'flex', gap: { xs: 3, md: 4 }, mb: i < entries.length - 1 ? 4 : 0 }}>
            {/* Icon dot */}
            <Box sx={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
              <Box sx={{
                width: { xs: 34, md: 42 },
                height: { xs: 34, md: 42 },
                borderRadius: '50%',
                background: 'rgba(133, 196, 103, 0.1)',
                border: '1px solid rgba(133, 196, 103, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(8px)',
              }}>
                <WorkIcon sx={{ fontSize: { xs: 16, md: 18 }, color: '#85c467' }} />
              </Box>
            </Box>

            {/* Content */}
            <Box sx={{
              flex: 1,
              pb: 3,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '12px',
              p: 2.5,
              backdropFilter: 'blur(12px)',
              transition: 'border-color 300ms ease, box-shadow 300ms ease',
              '&:hover': {
                borderColor: 'rgba(133,196,103,0.25)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              },
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                <Box>
                  <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 600 }}>
                    {entry.role}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#85c467', fontSize: '0.82rem' }}>
                    {entry.company}
                  </Typography>
                </Box>
                {entry.period && (
                  <Typography variant="caption" sx={{
                    color: 'rgba(255,255,255,0.35)',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '20px',
                    px: 1.5,
                    py: 0.25,
                    whiteSpace: 'nowrap',
                  }}>
                    {entry.period}
                  </Typography>
                )}
              </Box>

              <Typography variant="body2" sx={{ color: '#8d8d8d', lineHeight: 1.7 }}>
                {entry.description}
              </Typography>

              {entry.tech && (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 1.5 }}>
                  {entry.tech.map(t => (
                    <Typography key={t} variant="caption" sx={{
                      color: 'rgba(133,196,103,0.8)',
                      background: 'rgba(133,196,103,0.07)',
                      border: '1px solid rgba(133,196,103,0.2)',
                      borderRadius: '4px',
                      px: 1,
                      py: 0.25,
                      fontSize: '0.7rem',
                    }}>
                      {t}
                    </Typography>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Grid>
  </Fade>
);
