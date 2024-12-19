import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogo = styled.div`
  padding: 1rem 2rem;
  display: flex;
  font-size: 3rem;
  font-weight: 600;
  color: var(--color-primary-dark);

  & > img {
    height: 100%;
    width: 9rem;
    color: currentColor;
  }
`;

function Logo() {
  return (
    <NavLink to='/'>
      <StyledLogo>
        <img src='/tonski-logo.svg' alt='Antonio Saqueton Website Logo' />
      </StyledLogo>
    </NavLink>
  );
}

export default Logo;
