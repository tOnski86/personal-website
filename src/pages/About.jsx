import styled from 'styled-components';
import { HiOutlineChartBar, HiOutlinePhoto } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

import Button from '../ui/Button';
import ButtonRow from '../ui/ButtonRow';
import Heading from '../ui/Heading';
import HeadingGroup from '../ui/HeadingGroup';

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(auto, 1fr));
  min-height: ${`calc(100vh - 20rem)`};
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    gap: 4rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3rem;
  padding: 2rem 0;

  @media (min-width: 900px) {
    padding: 2rem 4rem;
  }
`;

function About() {
  return (
    <Row>
      <Column>
        <HeadingGroup>
          <span>Antonio Saqueton</span>
          <Heading as='h1'>About Me</Heading>
        </HeadingGroup>

        <div>
          <p>
            I am a seasoned professional in the Business Process Outsourcing and
            Remote Services Industry pursuing my passion for building web
            applications.
          </p>
          <p>
            One of the biggest challenges that companies face when developing
            their own software is the effective translation of business
            requirements into executable technical solutions.
          </p>

          <p>
            My ability to collaborate with both technical experts and
            stakeholders ensures that every project achieves clarity, alignment,
            and measurable success.
          </p>
        </div>

        <NavLink to='/work-experience'>
          <Button variant='primary-solid'>
            <HiOutlineChartBar />
            <span>Work Experience</span>
          </Button>
        </NavLink>
      </Column>

      <Column></Column>
    </Row>
  );
}

export default About;
