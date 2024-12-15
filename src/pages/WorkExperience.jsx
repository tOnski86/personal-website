import styled from 'styled-components';
import { HiBriefcase } from 'react-icons/hi2';

import Heading from '../ui/Heading';
import HeadingGroup from '../ui/HeadingGroup';

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(auto, 1fr));
  justify-content: center;
  align-items: start;
  row-gap: 6rem;
  column-gap: 2rem;
  margin-bottom: 8rem;

  @media (min-width: 768px) {
    grid-template-columns: 6rem minmax(auto, 60rem);
  }
`;

const Timeline = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    border-right: var(--border-sm);
  }
`;

const GridHeading = styled(Heading)`
  grid-column: 1 / -1;
`;

const Company = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Skills = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

const Pill = styled.span`
  font-size: 1.1rem;
  color: var(--color-grey-1);
  border: var(--border-sm);
  border-radius: 50rem;
  padding: 0.6rem 1.2rem;
`;

function WorkExperience() {
  return (
    <>
      <Row>
        <GridHeading as='h1'>Work History</GridHeading>
        <Timeline />

        <Company>
          <HeadingGroup>
            <span>Go2 &middot; Jul 2016 - Oct 2024</span>
            <Heading as='h2'>Project and Team Manager</Heading>
          </HeadingGroup>

          <Skills>
            <Pill>Leadership</Pill>
            <Pill>Strategy</Pill>
            <Pill>Web Design</Pill>
          </Skills>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            dolorum ullam officia? Illum quis autem eaque cupiditate ab culpa
            magni quia at? Harum repellendus sapiente voluptatem maxime, dolorem
            maiores velit.
          </p>
        </Company>

        <Timeline />
        <Company>
          <HeadingGroup>
            <span>Fountain Property Group &middot; Sep 2013 - Dec 2015</span>
            <Heading as='h2'>Virtual Assistant</Heading>
          </HeadingGroup>

          <Skills>
            <Pill>Online Marketing</Pill>
            <Pill>Content Creation</Pill>
            <Pill>Web Design</Pill>
          </Skills>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            dolorum ullam officia? Illum quis autem eaque cupiditate ab culpa
            magni quia at? Harum repellendus sapiente voluptatem maxime, dolorem
            maiores velit.
          </p>
        </Company>

        <Timeline />
        <Company>
          <HeadingGroup>
            <span>Teleperformance &middot; Dec 2009 - Jun 2010</span>
            <Heading as='h2'>Team Leader</Heading>
          </HeadingGroup>

          <Skills>
            <Pill>Leadership</Pill>
            <Pill>Training</Pill>
            <Pill>Coaching</Pill>
          </Skills>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            dolorum ullam officia? Illum quis autem eaque cupiditate ab culpa
            magni quia at? Harum repellendus sapiente voluptatem maxime, dolorem
            maiores velit.
          </p>
        </Company>

        <Timeline />
        <Company>
          <HeadingGroup>
            <span>Teleperformance &middot; Sep 2006 - Dec 2009</span>
            <Heading as='h2'>Technical Support Representative</Heading>
          </HeadingGroup>

          <Skills>
            <Pill>Data Entry</Pill>
            <Pill>Soft Skills</Pill>
            <Pill>Problem-Solving</Pill>
          </Skills>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            dolorum ullam officia? Illum quis autem eaque cupiditate ab culpa
            magni quia at? Harum repellendus sapiente voluptatem maxime, dolorem
            maiores velit.
          </p>
        </Company>
      </Row>
    </>
  );
}

export default WorkExperience;
