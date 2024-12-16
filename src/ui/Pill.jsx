import styled, { css } from 'styled-components';

const StyledPill = styled.span`
  font-size: 1.1rem;
  border-radius: 50rem;
  padding: 0.6rem 1.2rem;

  ${props =>
    props.$variant === 'neutral-outline' &&
    css`
      color: var(--color-grey-1);
      border: var(--border-sm);
    `}
`;

function Pill({ variant, children }) {
  return <StyledPill $variant={variant}>{children}</StyledPill>;
}

export default Pill;
