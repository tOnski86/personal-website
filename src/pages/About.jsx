import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HiMapPin, HiChartBar } from 'react-icons/hi2';
import { FaFilm, FaGem } from 'react-icons/fa';
import { TbLegoFilled } from 'react-icons/tb';
import { SiDota2 } from 'react-icons/si';
import { IoHeadsetSharp } from 'react-icons/io5';
import { FaCode } from 'react-icons/fa6';

import { calcAge } from '../utils/helper';

import Button from '../ui/Button';
import ButtonRow from '../ui/ButtonRow';
import Heading from '../ui/Heading';
import HeadingGroup from '../ui/HeadingGroup';
import Pill from '../ui/Pill';

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(auto, 1fr));
  min-height: ${`calc(100vh - 20rem)`};
  align-items: center;
  max-width: 120rem;
  margin: 0 auto;

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

  ${props =>
    props.name === 'content' &&
    css`
      order: 2;
    `}
  ${props =>
    props.name === 'interest' &&
    css`
      order: 1;
      align-self: flex-end;
    `}
      
      @media (min-width: 1024px) {
    padding: 2rem 4rem;

    ${props =>
      props.name === 'content' &&
      css`
        order: 1;
      `}
    ${props =>
      props.name === 'interest' &&
      css`
        order: 2;
        align-self: flex-end;
      `}
  }
`;

const PersonalRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

function About() {
  console.log(process.env.SUPABASE_URL);
  return (
    <Row>
      <Column name='content'>
        <HeadingGroup>
          <span>Antonio Saqueton</span>
          <Heading as='h1'>About Me</Heading>
        </HeadingGroup>

        <div>
          <p>
            I am a seasoned professional in the Business Process Outsourcing and
            Remote Services Industry pursuing my passion for building
            user-centric web applications.
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

        <NavLink to='/work'>
          <Button variant='primary-solid'>
            <HiChartBar />
            <span>Work Experience</span>
          </Button>
        </NavLink>
      </Column>

      <Column name='interest'>
        <PersonalRow>
          <Pill variant='neutral-outline-base'>
            <HiMapPin />
            <span>Philippines</span>
          </Pill>

          <Pill variant='neutral-outline-base'>
            <FaGem />
            <span>{calcAge()}</span>
          </Pill>

          <Pill variant='neutral-outline-base'>
            <IoHeadsetSharp />
            <span>Coheed & Cambria</span>
          </Pill>

          <Pill variant='neutral-outline-base'>
            <TbLegoFilled />
            <span>Lego</span>
          </Pill>

          <Pill variant='neutral-outline-base'>
            <FaCode />
            <span>Coding</span>
          </Pill>

          <Pill variant='neutral-outline-base'>
            <SiDota2 />
            <span>Dota 2</span>
          </Pill>

          <Pill variant='neutral-outline-base'>
            <FaFilm />
            <span>The Sopranos</span>
          </Pill>
        </PersonalRow>
      </Column>
    </Row>
  );
}

export default About;
