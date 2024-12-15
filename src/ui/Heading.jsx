import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${props =>
    props.as === 'h1' &&
    css`
      font-size: 4rem;
      font-weight: 400;
    `}
  ${props =>
    props.as === 'h2' &&
    css`
      font-size: 2.8rem;
      font-weight: 400;
    `}
  ${props => props.as === 'h3' && css``}
  
  line-height: 1.4;
`;

export default Heading;