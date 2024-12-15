import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${props =>
    props.as === 'h1' &&
    css`
      font-size: 4rem;
      font-weight: 400;
    `}
  ${props => props.as === 'h2' && css``}
  ${props => props.as === 'h3' && css``}
`;

export default Heading;
