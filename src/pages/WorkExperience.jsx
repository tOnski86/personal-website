import styled from 'styled-components';

import Heading from '../ui/Heading';
import HeadingGroup from '../ui/HeadingGroup';
import Pill from '../ui/Pill';

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
            <Pill variant='neutral outline'>Leadership</Pill>
            <Pill variant='neutral outline'>Strategy</Pill>
            <Pill variant='neutral outline'>Web Design</Pill>
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
            <Pill variant='neutral outline'>Marketing</Pill>
            <Pill variant='neutral outline'>Content</Pill>
            <Pill variant='neutral outline'>Web Design</Pill>
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
            <span>Convergys &middot; Jul 2010 - Aug 2013</span>
            <Heading as='h2'>TSR and Sales</Heading>
          </HeadingGroup>

          <Skills>
            <Pill variant='neutral outline'>Technical Support</Pill>
            <Pill variant='neutral outline'>Sales</Pill>
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
            <Pill variant='neutral outline'>Leadership</Pill>
            <Pill variant='neutral outline'>Training</Pill>
            <Pill variant='neutral outline'>Coaching</Pill>
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
            <Pill variant='neutral outline'>Data Entry</Pill>
            <Pill variant='neutral outline'>Soft Skills</Pill>
            <Pill variant='neutral outline'>Problem-Solving</Pill>
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
