import styled, { css } from 'styled-components';

const StyledPill = styled.span`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border-radius: 50rem;
  padding: 0.6rem 1.2rem;

  ${props =>
    props.$variant === 'neutral-outline-sm' &&
    css`
      font-size: 1.1rem;
      color: var(--color-grey-1);
      border: var(--border-sm);
    `}

  ${props =>
    props.$variant === 'neutral-outline-base' &&
    css`
      font-size: 1.4rem;
      color: var(--color-grey-1);
      border: var(--border-sm);
    `}

    & svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

function Pill({ variant, children }) {
  return <StyledPill $variant={variant}>{children}</StyledPill>;
}

export default Pill;
