import styled from 'styled-components';

import Heading from '../../ui/Heading';
import HeadingGroup from '../../ui/HeadingGroup';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  & > p {
    font-size: 1.2rem;
  }

  & > img {
    border-radius: 0.4rem;
  }
  &:hover {
    background-color: var(--color-grey-3);
  }
`;

function ProjectCard({ project }) {
  const { title, description, image, tags } = project;

  return (
    <StyledCard>
      <img src={image} alt='' />
      <HeadingGroup>
        <Heading as='h3'>{title}</Heading>
      </HeadingGroup>
      <p>{description}</p>
      <span>{tags}</span>
    </StyledCard>
  );
}

export default ProjectCard;
