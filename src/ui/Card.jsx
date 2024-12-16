import styled from 'styled-components';

const Card = styled.div`
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

export default Card;
