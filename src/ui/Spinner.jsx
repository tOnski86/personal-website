import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const Spinner = styled.div`
  margin: 6rem auto;
  width: 4.8rem;
  height: 4.8rem;
  border: 0.5rem solid var(--color-grey-1);
  border-bottom-color: var(--color-primary-light);
  border-radius: 50%;
  display: inline-block;
  animation: ${rotate} 1s linear infinite;
`;

export default Spinner;
