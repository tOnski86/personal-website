import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import {
  SiHtml5,
  SiSass,
  SiCsswizardry,
  SiTailwindcss,
  SiStyledcomponents,
  SiCssmodules,
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiReactquery,
  SiRedux,
  SiReacthookform,
  SiSupabase,
  SiVite,
  SiCreatereactapp,
  SiVercel,
  SiGithub,
  SiFacebook,
  SiGoogleads,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGooglesearchconsole,
  SiHootsuite,
  SiMailchimp,
  SiIntercom,
  SiLooker,
  SiLucid,
  SiDiagramsdotnet,
  SiJira,
  SiAsana,
  SiClickup,
  SiConfluence,
  SiNotion,
  SiGoogledrive,
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiOpenai,
  SiTypescript,
  SiNodedotjs,
  SiObsidian,
} from 'react-icons/si';

import Heading from '../ui/Heading';
import Card from '../ui/Card';

const StyledProficiencies = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(10rem, 1fr));
  gap: 1rem;
  margin-bottom: 6rem;

  @media (min-width: 425px) {
    grid-template-columns: repeat(2, minmax(10rem, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(20rem, 1fr));
  }

  @media (min-width: 1020px) {
    grid-template-columns: repeat(4, minmax(20rem, 1fr));
  }
`;

const SectionHeading = styled(Heading)`
  margin-bottom: 4rem;
`;

const StyledCard = styled(Card)`
  cursor: auto;

  & > p {
    color: var(--color-grey-1);
  }

  &:hover {
    background-color: transparent;
  }
`;

const CardHeading = styled(Heading)`
  display: flex;
  align-items: center;
  gap: 1rem;

  & svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const ContentHeading = styled(Heading)`
  grid-column: 1 / -1;
  color: var(--color-primary-light);
`;

function Proficiencies() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>tOnski | Proficiencies</title>
        <meta
          name='description'
          content='Discover key proficiencies in React, Tailwind CSS, Vite, and web analytics tools, enabling optimized and scalable web applications.'
        />
        <link rel='canonical' href='https://tonski.vercel.app/proficiencies' />
      </Helmet>

      <StyledProficiencies>
        <SectionHeading as='h1'>Software Proficiency</SectionHeading>

        <Content>
          <ContentHeading as='h3'>Project and Team Management</ContentHeading>
          <StyledCard>
            <CardHeading as='h4'>
              <SiOpenai />
              <span>OpenAI</span>
            </CardHeading>
            <p>
              Leveraging AI-powered tools for automating tasks to streamline
              project workflows and decision-making.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiIntercom />
              <span>Intercom</span>
            </CardHeading>
            <p>
              Utilized Intercom internally for tracking and resolving team
              issues, and creating company knowledge base.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiLooker />
              <span>Looker Studio</span>
            </CardHeading>
            <p>
              Creating interactive reports and dashboards, providing insights
              for data-driven decision-making.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiLucid />
              <span>Lucidchart</span>
            </CardHeading>
            <p>
              Designing flowcharts and diagrams to facilitate clear project
              requirements when working with teams.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiDiagramsdotnet />
              <span>Draw.io</span>
            </CardHeading>
            <p>
              Creating detailed diagrams, process flows, and wireframes to plan
              website design and data flow.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiJira />
              <span>Jira</span>
            </CardHeading>
            <p>
              Utilized Jira for tracking project progress and managing tasks
              through sprints and issues.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiAsana />
              <span>Asana</span>
            </CardHeading>
            <p>
              Leveraged Asana to organize tasks, track project timelines, and
              coordinate team efforts.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiClickup />
              <span>ClickUp</span>
            </CardHeading>
            <p>
              Streamline tasks, and track team progress for efficient project
              execution.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiConfluence />
              <span>Confluence</span>
            </CardHeading>
            <p>
              Creating project documentation to ensure knowledge sharing across
              departments.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiNotion />
              <span>Notion</span>
            </CardHeading>
            <p>
              Creating collaborative content workspaces for efficient knowledge
              sharing.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiGoogledrive />
              <span>Google Suite</span>
            </CardHeading>
            <p>
              Managed users through the Admin Console, while utilizing
              productivity and collaboration tools in Google Suite.
            </p>
          </StyledCard>
        </Content>

        <Content>
          <ContentHeading as='h3'>Web Development</ContentHeading>
          <StyledCard>
            <CardHeading as='h4'>
              <SiHtml5 />
              <span>HTML</span>
            </CardHeading>
            <p>
              Creating well-structured, accessible content using semantic markup
              to ensure SEO-compliant websites.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiCsswizardry />
              <span>CSS</span>
            </CardHeading>
            <p>
              Implementing user-friendly, brand-compliant websites that are
              responsive and cross-browser compatible.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiSass />
              <span>Sass</span>
            </CardHeading>
            <p>
              Writing maintainable styles using variables, mixins, and BEM class
              names for improved readability and scalability.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiTailwindcss />
              <span>Tailwind CSS</span>
            </CardHeading>
            <p>
              Building responsive, utility styles with Tailwind’s pre-defined
              classes for rapid development and consistent layouts.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiCssmodules />
              <span>CSS Modules</span>
            </CardHeading>
            <p>
              Scoping component styles to avoid styling conflicts, ensuring
              maintainable and reusable React applications.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiStyledcomponents />
              <span>Styled Components</span>
            </CardHeading>
            <p>
              Writing component-level styles in JavaScript enabling dynamic
              styles within React applications.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiJavascript />
              <span>JavaScript</span>
            </CardHeading>
            <p>
              Building interactive web features using pure JavaScript, without
              external libraries or frameworks.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiReact />
              <span>React</span>
            </CardHeading>
            <p>
              Developing dynamic, component-based application that keeps state
              and the user interface in sync.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiReactrouter />
              <span>React Router</span>
            </CardHeading>
            <p>
              Implementing client-side routing in React applications with
              efficient single-page app behavior.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiReactquery />
              <span>React Query</span>
            </CardHeading>
            <p>
              Managing remote state and caching, facilitating communication
              between applications and external APIs.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiRedux />
              <span>Redux</span>
            </CardHeading>
            <p>
              Centralizing global state management, enabling predictable state
              flow across components via the store.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiReacthookform />
              <span>React Hook Form</span>
            </CardHeading>
            <p>
              Simplifing form handling by efficiently registering inputs and
              implementing custom form validations.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiSupabase />
              <span>Supabase</span>
            </CardHeading>
            <p>
              Integrating real-time databases, authentication, and APIs to build
              full-stack applications with ease.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiVite />
              <span>Vite</span>
            </CardHeading>
            <p>
              Optimizing development workflows for fast bundling, and efficient
              hot module reloading during development.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiCreatereactapp />
              <span>Create React App</span>
            </CardHeading>
            <p>
              Setting up React projects quickly with Create React App to focus
              on rapid development.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiVercel />
              <span>Vercel</span>
            </CardHeading>
            <p>
              Deploying frontend projects using serverless hosting with
              continuous deployment.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiGithub />
              <span>GitHub</span>
            </CardHeading>
            <p>
              Managing code repositories, collaborating, and version controlling
              for efficient project development.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiObsidian />
              <span>Obsidian</span>
            </CardHeading>
            <p>
              Organizing and managing technical notes using markdown for
              efficient information links.
            </p>
          </StyledCard>
        </Content>

        <Content>
          <ContentHeading as='h3'>Graphic Design</ContentHeading>
          <StyledCard>
            <CardHeading as='h4'>
              <SiAdobephotoshop />
              <span>Adobe Photoshop</span>
            </CardHeading>
            <p>
              Creating high-quality graphics assets that are visual appealing
              and brand consistent.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiAdobeillustrator />
              <span>Adobe Illustrator</span>
            </CardHeading>
            <p>
              Designing vector-based graphics, logos, and illustrations,
              ensuring scalability and brand alignment.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiFigma />
              <span>Figma</span>
            </CardHeading>
            <p>
              Creating UI/UX design wireframes and prototypes for web
              applications to ensure functionality and ease of use.
            </p>
          </StyledCard>
        </Content>

        <Content>
          <ContentHeading as='h3'>Online Marketing</ContentHeading>
          <StyledCard>
            <CardHeading as='h4'>
              <SiFacebook />
              <span>Business Manager</span>
            </CardHeading>
            <p>
              Managed ad campaigns to target key audiences and driving
              measurable business results.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiGoogleads />
              <span>Google Ads</span>
            </CardHeading>
            <p>
              Created and optimized ads to target keywords to drive traffic and
              increase visibility in search results.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiGoogleanalytics />
              <span>Google Analytics</span>
            </CardHeading>
            <p>
              Tracking website performance, analyze user behavior, and generate
              insights to guide data-driven strategies.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiGoogletagmanager />
              <span>Google Tag Manager</span>
            </CardHeading>
            <p>
              Implemented custom event tracking to enhance website analytics for
              better decision-making.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiGooglesearchconsole />
              <span>Google Search Console</span>
            </CardHeading>
            <p>
              Analyzing search traffic, indexing status, and resolving technical
              issues to improve site visibility in search results.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiHootsuite />
              <span>Hootsuite</span>
            </CardHeading>
            <p>
              Consolidated multiple social media accounts to streamline content
              and engagement across channels.
            </p>
          </StyledCard>

          <StyledCard>
            <CardHeading as='h4'>
              <SiMailchimp />
              <span>Mailchimp</span>
            </CardHeading>
            <p>
              Executed email marketing campaigns to managing subscribers, and
              automated outreach campaigns.
            </p>
          </StyledCard>
        </Content>
      </StyledProficiencies>
    </>
  );
}

export default Proficiencies;
