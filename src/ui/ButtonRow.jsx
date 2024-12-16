import styled, { css } from 'styled-components';

const StyledButtonRow = styled.div`
  display: flex;

  ${props =>
    props.$spacing === 'gap-none' &&
    css`
      gap: 0rem;
    `}

  ${props =>
    props.$spacing === 'gap-sm' &&
    css`
      gap: 1rem;
    `}
`;

function ButtonRow({ children, spacing }) {
  return <StyledButtonRow $spacing={spacing}>{children}</StyledButtonRow>;
}

export default ButtonRow;
