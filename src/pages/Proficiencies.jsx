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
`;

function Proficiencies() {
  return (
    <StyledProficiencies>
      <SectionHeading as='h1'>Software Proficiency</SectionHeading>

      <Content>
        <ContentHeading as='h3'>Web Development</ContentHeading>
        <StyledCard>
          <CardHeading as='h4'>
            <SiHtml5 />
            <span>HTML</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiCsswizardry />
            <span>CSS</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiSass />
            <span>Sass</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiTailwindcss />
            <span>Tailwind CSS</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiCssmodules />
            <span>CSS Modules</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiStyledcomponents />
            <span>Styled Components</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiJavascript />
            <span>JavaScript</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiReact />
            <span>React</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiReactrouter />
            <span>React Router</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiReactquery />
            <span>React Query</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiRedux />
            <span>Redux</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiReacthookform />
            <span>React Hook Form</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiSupabase />
            <span>Supabase</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiVite />
            <span>Vite</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiCreatereactapp />
            <span>Create React App</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiVercel />
            <span>Vercel</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiGithub />
            <span>GitHub</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>
      </Content>

      <Content>
        <ContentHeading as='h3'>Project and Team Management</ContentHeading>
        <StyledCard>
          <CardHeading as='h4'>
            <SiOpenai />
            <span>OpenAI</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiIntercom />
            <span>Intercom</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiLooker />
            <span>Looker Studio</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiLucid />
            <span>Lucidchart</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiDiagramsdotnet />
            <span>Draw.io</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiJira />
            <span>Jira</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiAsana />
            <span>Asana</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiClickup />
            <span>ClickUp</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiConfluence />
            <span>Confluence</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiNotion />
            <span>Notion</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiGoogledrive />
            <span>Google Suite</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiAdobeillustrator />
            <span>Adobe Illustrator</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiFigma />
            <span>Figma</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiGoogleads />
            <span>Google Ads</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiGoogleanalytics />
            <span>Google Analytics</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiGoogletagmanager />
            <span>Google Tag Manager</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiGooglesearchconsole />
            <span>Google Search Console</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiHootsuite />
            <span>Hootsuite</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>

        <StyledCard>
          <CardHeading as='h4'>
            <SiMailchimp />
            <span>Mailchimp</span>
          </CardHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eius.
          </p>
        </StyledCard>
      </Content>
    </StyledProficiencies>
  );
}

export default Proficiencies;
