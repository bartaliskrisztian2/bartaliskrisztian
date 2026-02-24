import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import Html5Logo from "../assets/images/skills/html5.svg";
import CSS3Logo from "../assets/images/skills/css3.svg";
import TypescriptLogo from "../assets/images/skills/typescript.svg";
import JavascriptLogo from "../assets/images/skills/javascript.svg";
import ReactLogo from "../assets/images/skills/react.svg";
import NodeLogo from "../assets/images/skills/node.svg";
import JavaLogo from "../assets/images/skills/java.svg";
import SpringLogo from "../assets/images/skills/spring.svg";
import MaterialUILogo from "../assets/images/skills/material-ui.svg";
import GraphQlLogo from "../assets/images/skills/graphql.svg";
import DockerLogo from "../assets/images/skills/docker.svg";
import GitLogo from "../assets/images/skills/git.svg";
import ShopifyLogo from "../assets/images/skills/shopify.svg";
import VSCodeLogo from "../assets/images/skills/vscode.svg";
import ElasticsearchLogo from "../assets/images/skills/elasticsearch.svg";
import GrafanaLogo from "../assets/images/skills/grafana.svg";
import IntellijLogo from "../assets/images/skills/intellij.svg";
import MongoLogo from "../assets/images/skills/mongodb.svg";
import Neo4JLogo from "../assets/images/skills/neo4j.svg";
import HerokuLogo from "../assets/images/skills/heroku.svg";
import ReduxLogo from "../assets/images/skills/redux.svg";
import PythonLogo from "../assets/images/skills/python.svg";
import CypherLogo from "../assets/images/skills/cypher.svg";
import SqlLogo from "../assets/images/skills/sql.svg";
import PostmanLogo from "../assets/images/skills/postman.svg";
import SourceTreeLogo from "../assets/images/skills/sourcetree.svg";
import AWSLogo from "../assets/images/skills/aws.svg";
import LambdaLogo from "../assets/images/skills/lambda.svg";
import RedisLogo from "../assets/images/skills/redis.svg";
import StackOverflowLogo from "../assets/images/skills/stack-overflow.svg";
import ChatGPTLogo from "../assets/images/skills/chatgpt.svg";
import NestjsLogo from "../assets/images/skills/nestjs.svg";
import IonicLogo from "../assets/images/skills/ionic.svg";
import DynamodbLogo from "../assets/images/skills/dynamodb.svg";
import S3Logo from "../assets/images/skills/s3.svg";
import PHPLogo from "../assets/images/skills/php.svg";
import Fade from 'react-reveal/Fade';
import { Chip } from "@mui/material";

const styles = {
  icon: {
    width: '100%',
    maxHeight: 40,
  },
  text: {
    color: 'text.primary',
    textAlign: 'center'
  },
  chip: {
    mx: 'auto',
    my: 4,
  },
  subtitle: {
    color: 'text.primary',
    pl: 2
  }
};

const SkillItem = ({ src, alt, label }: { src: string; alt: string; label: string }) => (
  <Grid item xs={4} md={2}>
    <div className="skill-item">
      <img src={src} alt={alt} style={styles.icon} />
      <Typography variant="body1" sx={styles.text}>{label}</Typography>
    </div>
  </Grid>
);

export const Skills = () => (
  <Fade>
    <Grid pt={3} width="100%" id="skills">
      <Typography variant="h3" sx={{ color: 'text.primary' }}>
        skills
      </Typography>
      <Grid container pt={3} rowSpacing={2} columnSpacing={2}>
        <Grid container>
          <Chip sx={styles.chip} label="Languages" />
        </Grid>
        <Grid container item pt={3} rowSpacing={2} columnSpacing={2}>
          <SkillItem src={JavascriptLogo} alt="javascript logo" label="JavaScript" />
          <SkillItem src={TypescriptLogo} alt="typescript logo" label="TypeScript" />
          <SkillItem src={JavaLogo} alt="java logo" label="Java" />
          <SkillItem src={PHPLogo} alt="php logo" label="PHP" />
          <SkillItem src={PythonLogo} alt="python logo" label="Python" />
          <SkillItem src={GraphQlLogo} alt="graphql logo" label="GraphQL" />
          <SkillItem src={SqlLogo} alt="SQL logo" label="SQL" />
          <SkillItem src={CypherLogo} alt="cypher logo" label="Cypher" />
        </Grid>
        <Grid container>
          <Chip sx={styles.chip} label="Web development" />
        </Grid>
        <Grid container item pt={3} rowSpacing={2} columnSpacing={2}>
          <SkillItem src={Html5Logo} alt="html5 logo" label="HTML5" />
          <SkillItem src={CSS3Logo} alt="css3 logo" label="CSS3" />
          <SkillItem src={ReactLogo} alt="react logo" label="ReactJS" />
          <SkillItem src={NodeLogo} alt="node logo" label="NodeJS" />
          <SkillItem src={SpringLogo} alt="spring logo" label="Spring Boot" />
          <SkillItem src={NestjsLogo} alt="nestjs logo" label="NestJS" />
          <SkillItem src={MaterialUILogo} alt="material ui logo" label="MUI" />
          <SkillItem src={IonicLogo} alt="ionic logo" label="Ionic" />
          <SkillItem src={ReduxLogo} alt="redux logo" label="Redux toolkit" />
          <SkillItem src={ShopifyLogo} alt="shopify logo" label="Shopify" />
        </Grid>
        <Grid container>
          <Chip sx={styles.chip} label="Database and data management" />
        </Grid>
        <Grid container item pt={3} rowSpacing={2} columnSpacing={2}>
          <SkillItem src={DynamodbLogo} alt="dynamodb logo" label="AWS DynamoDB" />
          <SkillItem src={S3Logo} alt="s3 logo" label="AWS S3" />
          <SkillItem src={ElasticsearchLogo} alt="elasticsearch logo" label="Elasticsearch" />
          <SkillItem src={MongoLogo} alt="mongodb logo" label="MongoDB" />
          <SkillItem src={Neo4JLogo} alt="neo4j logo" label="Neo4J" />
          <SkillItem src={RedisLogo} alt="redis logo" label="Redis" />
        </Grid>
        <Grid container>
          <Chip sx={styles.chip} label="Version control and Development Tools" />
        </Grid>
        <Grid container item pt={3} rowSpacing={2} columnSpacing={2}>
          <SkillItem src={DockerLogo} alt="docker logo" label="Docker" />
          <SkillItem src={GrafanaLogo} alt="grafana logo" label="Grafana" />
          <SkillItem src={GitLogo} alt="git logo" label="Git" />
          <SkillItem src={VSCodeLogo} alt="vscode logo" label="VSCode" />
          <SkillItem src={IntellijLogo} alt="intellij logo" label="IntellIJ" />
          <SkillItem src={PostmanLogo} alt="postman logo" label="Postman" />
          <SkillItem src={SourceTreeLogo} alt="sourcetree logo" label="SourceTree" />
        </Grid>
        <Grid container>
          <Chip sx={styles.chip} label="Cloud Services" />
        </Grid>
        <Grid container item pt={3} rowSpacing={2} columnSpacing={2}>
          <SkillItem src={AWSLogo} alt="aws logo" label="AWS" />
          <SkillItem src={LambdaLogo} alt="aws lambda" label="AWS Lambda" />
          <SkillItem src={HerokuLogo} alt="heroku logo" label="Heroku" />
        </Grid>
      </Grid>
      <Grid pt={3}>
        <Typography variant="h5" sx={styles.text}>...and most importantly</Typography>
      </Grid>
      <Grid container pt={3} columnSpacing={2} justifyContent="center">
        <Grid item xs={4} md={2}>
          <div className="skill-item">
            <img src={StackOverflowLogo} alt="stack overflow logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>Stack Overflow</Typography>
          </div>
        </Grid>
        <Grid item xs={4} md={2}>
          <div className="skill-item">
            <img src={ChatGPTLogo} alt="chatgpt logo" style={styles.icon} />
            <Typography variant="body1" sx={styles.text}>ChatGPT</Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  </Fade>
);
