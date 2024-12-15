import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  ${props =>
    props.$variant === 'primary outline' &&
    css`
      color: var(--color-primary-dark);
      background-color: transparent;
      border: 0.1rem solid var(--color-primary-dark);

      &:hover {
        color: var(--color-primary-light);
        border: 0.1rem solid var(--color-primary-light);
      }
    `}

  ${props =>
    props.$variant === 'primary solid' &&
    css`
      color: var(--color-white);
      background-color: var(--color-primary-dark);
      border: 0.1rem solid var(--color-primary-dark);

      &:hover {
        background-color: var(--color-primary-light);
      }
    `}

    & svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.8rem;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
`;

function Button({ children, variant }) {
  return <StyledButton $variant={variant}>{children}</StyledButton>;
}

export default Button;
