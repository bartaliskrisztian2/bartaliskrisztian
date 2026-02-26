import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import Fade from 'react-reveal/Fade';

const styles = {
  text: {
    color: 'text.primary',
    textAlign: 'center'
  },
};

const SkillItem = ({ label }: { label: string }) => (
  <Grid item xs="auto">
    <div className="skill-item">
      <Typography variant="body2" sx={styles.text}>{label}</Typography>
    </div>
  </Grid>
);

const GroupLabel = ({ label }: { label: string }) => (
  <Grid container sx={{ mt: 4, mb: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
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
      {label}
    </Typography>
  </Grid>
);

export const Skills = () => (
  <Fade>
    <Grid pt={3} width="100%" id="skills">
      <Typography variant="h3" sx={{ color: 'text.primary' }}>
        skills
      </Typography>
      <Grid container pt={3} rowSpacing={2} columnSpacing={2}>
        <GroupLabel label="Languages" />
        <Grid container item rowSpacing={2} columnSpacing={2}>
          <SkillItem label="JavaScript" />
          <SkillItem label="TypeScript" />
          <SkillItem label="Java" />
          <SkillItem label="PHP" />
          <SkillItem label="Python" />
          <SkillItem label="GraphQL" />
          <SkillItem label="SQL" />
          <SkillItem label="Cypher" />
        </Grid>
        <GroupLabel label="Web development" />
        <Grid container item rowSpacing={2} columnSpacing={2}>
          <SkillItem label="HTML5" />
          <SkillItem label="CSS3" />
          <SkillItem label="ReactJS" />
          <SkillItem label="NodeJS" />
          <SkillItem label="Spring Boot" />
          <SkillItem label="NestJS" />
          <SkillItem label="MUI" />
          <SkillItem label="Ionic" />
          <SkillItem label="Redux toolkit" />
          <SkillItem label="Shopify" />
        </Grid>
        <GroupLabel label="Database and data management" />
        <Grid container item rowSpacing={2} columnSpacing={2}>
          <SkillItem label="AWS DynamoDB" />
          <SkillItem label="AWS S3" />
          <SkillItem label="Elasticsearch" />
          <SkillItem label="MongoDB" />
          <SkillItem label="Neo4J" />
          <SkillItem label="Redis" />
          <SkillItem label="PostgreSQL" />
        </Grid>
        <GroupLabel label="Version control and Development Tools" />
        <Grid container item rowSpacing={2} columnSpacing={2}>
          <SkillItem label="Docker" />
          <SkillItem label="Grafana" />
          <SkillItem label="Git" />
          <SkillItem label="VSCode" />
          <SkillItem label="IntellIJ" />
          <SkillItem label="Postman" />
          <SkillItem label="SourceTree" />
          <SkillItem label="Lovable" />
          <SkillItem label="n8n" />
        </Grid>
        <GroupLabel label="Cloud Services" />
        <Grid container item rowSpacing={2} columnSpacing={2}>
          <SkillItem label="AWS" />
          <SkillItem label="AWS Lambda" />
          <SkillItem label="Heroku" />
        </Grid>
        <GroupLabel label="AI development" />
        <Grid container item rowSpacing={2} columnSpacing={2}>
          <SkillItem label="Anthropic Claude" />
          <SkillItem label="OpenAI" />
          <SkillItem label="Gemini" />
        </Grid>
      </Grid>
    </Grid>
  </Fade>
);
