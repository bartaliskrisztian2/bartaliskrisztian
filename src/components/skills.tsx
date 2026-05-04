import { useState } from 'react';
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import Fade from 'react-reveal/Fade';
import { Tab, Tabs } from '@mui/material';

const styles = {
  text: {
    color: 'text.primary',
    textAlign: 'center'
  },
};

type Category = 'all' | 'languages' | 'web' | 'database' | 'tools' | 'cloud' | 'ai';

const CATEGORIES: { key: Category; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'languages', label: 'Languages' },
  { key: 'web', label: 'Web' },
  { key: 'database', label: 'Database' },
  { key: 'tools', label: 'Tools' },
  { key: 'cloud', label: 'Cloud' },
  { key: 'ai', label: 'AI' },
];

const SKILL_GROUPS: { category: Category; label: string; skills: string[] }[] = [
  {
    category: 'languages',
    label: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Java', 'PHP', 'Python', 'GraphQL', 'SQL', 'Cypher'],
  },
  {
    category: 'web',
    label: 'Web development',
    skills: ['HTML5', 'CSS3', 'ReactJS', 'NodeJS', 'Spring Boot', 'NestJS', 'MUI', 'Ionic', 'Redux toolkit', 'Shopify'],
  },
  {
    category: 'database',
    label: 'Database and data management',
    skills: ['AWS DynamoDB', 'AWS S3', 'Elasticsearch', 'MongoDB', 'Neo4J', 'Redis', 'PostgreSQL'],
  },
  {
    category: 'tools',
    label: 'Version control and Development Tools',
    skills: ['Docker', 'Grafana', 'Git', 'VSCode', 'IntellIJ', 'Postman', 'SourceTree', 'Lovable', 'n8n'],
  },
  {
    category: 'cloud',
    label: 'Cloud Services',
    skills: ['AWS', 'AWS Lambda', 'Heroku'],
  },
  {
    category: 'ai',
    label: 'AI development',
    skills: ['Anthropic Claude', 'OpenAI', 'Gemini'],
  },
];

const SkillItem = ({ label }: { label: string }) => (
  <Grid item xs="auto">
    <div className="skill-item">
      <Typography variant="body2" sx={styles.text}>{label}</Typography>
    </div>
  </Grid>
);

export const Skills = () => {
  const [active, setActive] = useState<Category>('languages');

  const visible = SKILL_GROUPS.filter(g => active === 'all' || g.category === active);

  return (
    <Fade>
      <Grid pt={3} width="100%" id="skills">
        <Typography variant="h3" sx={{ color: 'text.primary' }}>
          skills
        </Typography>

        <Tabs
          value={active}
          onChange={(_, v) => setActive(v)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            mt: 2.5,
            minHeight: 36,
            '& .MuiTabs-indicator': {
              background: 'linear-gradient(90deg, #00dcc8, #85c467)',
              height: '2px',
              borderRadius: '2px',
            },
            '& .MuiTabs-scrollButtons': {
              color: 'rgba(255,255,255,0.4)',
            },
            '& .MuiTabs-root': { borderBottom: '1px solid rgba(255,255,255,0.08)' },
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {CATEGORIES.map(({ key, label }) => (
            <Tab
              key={key}
              value={key}
              label={label}
              disableRipple
              sx={{
                minHeight: 36,
                py: 0.5,
                px: { xs: 1.5, md: 2 },
                fontSize: '0.8rem',
                textTransform: 'none',
                color: 'rgba(255,255,255,0.45)',
                transition: 'color 200ms ease',
                '&.Mui-selected': { color: '#85c467' },
                '&:hover': { color: 'rgba(255,255,255,0.8)' },
              }}
            />
          ))}
        </Tabs>

        <Grid container pt={2} rowSpacing={2} columnSpacing={2}>
          {visible.map(group => (
            <Grid key={group.category} container item xs={12}>
              {active === 'all' && (
                <Grid container sx={{ mt: 2, mb: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: 'rgba(133, 196, 103, 0.75)',
                      letterSpacing: '2px',
                      fontSize: '0.68rem',
                      borderBottom: '1px solid rgba(133, 196, 103, 0.25)',
                      pb: 0.5,
                      width: { xs: '100%', md: 'auto' },
                      textAlign: { xs: 'center', md: 'left' },
                    }}
                  >
                    {group.label}
                  </Typography>
                </Grid>
              )}
              <Grid container item rowSpacing={2} columnSpacing={2}>
                {group.skills.map(skill => (
                  <SkillItem key={skill} label={skill} />
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Fade>
  );
};
