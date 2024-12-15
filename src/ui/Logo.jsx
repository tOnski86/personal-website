import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogo = styled.div`
  display: flex;
  font-size: 3rem;
  font-weight: 600;
  color: var(--color-primary-dark);
`;

function Logo() {
  return (
    <NavLink to='/'>
      <StyledLogo>tOnski</StyledLogo>
    </NavLink>
  );
}

export default Logo;
