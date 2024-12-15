import styled from 'styled-components';

const HeadingGroup = styled.div`
  & > span {
    font-family: monospace;
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: var(--color-primary-light);
  }
`;

export default HeadingGroup;
