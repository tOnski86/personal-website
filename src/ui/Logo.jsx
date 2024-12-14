import styled from 'styled-components';

const StyledLogo = styled.div`
  display: flex;
  font-size: 3rem;
  font-weight: 600;
  color: var(--color-primary-dark);
`;

function Logo() {
  return <StyledLogo>LOGO</StyledLogo>;
}

export default Logo;
