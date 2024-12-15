import styled from 'styled-components';
import { HiOutlineChartBar, HiOutlinePhoto } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

import Row from '../ui/Row';
import Button from '../ui/Button';
import Heading from '../ui/Heading';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 0;

  @media (min-width: 900px) {
    padding: 2rem 4rem;
  }
`;

const HeadingGroup = styled.div`
  & > span {
    font-family: monospace;
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: var(--color-primary-light);
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
`;

function About() {
  return (
    <Row columns='2'>
      <Column>
        <HeadingGroup>
          <span>Antonio Saqueton</span>
          <Heading as='h1'>About Me</Heading>
        </HeadingGroup>

        <div>
          <p>
            I am a seasoned professional in the Business Process Outsourcing and
            Remote Services Industry pursuing my passion of developing web
            applications.
          </p>
          <p>
            One of the biggest challenges that companies face when developing
            their own software is the effective translation of business
            requirements into executable technical solutions.
          </p>
          <p>
            <p>
              My ability to collaborate with both technical experts and
              stakeholders ensures that every project achieves clarity,
              alignment, and measurable success.
            </p>
          </p>
        </div>

        <ButtonRow>
          <NavLink to='/portfolio'>
            <Button variant='primary solid'>
              <HiOutlinePhoto />
              <span>Portfolio</span>
            </Button>
          </NavLink>
          <NavLink to='/work-experience'>
            <Button variant='primary outline'>
              <HiOutlineChartBar />
              <span>Work Experience</span>
            </Button>
          </NavLink>
        </ButtonRow>
      </Column>
    </Row>
  );
}

export default About;
