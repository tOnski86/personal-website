import styled from 'styled-components';

import Heading from '../../ui/Heading';
import HeadingGroup from '../../ui/HeadingGroup';
import { Link } from 'react-router-dom';

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
  const { title, description, image, imageAlt, link } = project;

  return (
    <Link to={link} target='_blank' rel='noopener noreferrer'>
      <StyledCard>
        <img src={image} alt={imageAlt} />
        <HeadingGroup>
          <Heading as='h3'>{title}</Heading>
        </HeadingGroup>
        <p>{description}</p>
      </StyledCard>
    </Link>
  );
}

export default ProjectCard;
