import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogo = styled(NavLink)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  display: flex;

  & > img {
    height: 100%;
    width: 9rem;
    color: currentColor;
  }
`;

function Logo() {
  return (
    <StyledLogo to='/'>
      <img src='/tonski-logo.svg' alt='Antonio Saqueton Website Logo' />
    </StyledLogo>
  );
}

export default Logo;
