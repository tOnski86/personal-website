import styled from 'styled-components';

const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: 500;
  padding-right: 2rem;
  color: var(--color-primary-dark);
`;

function Logo() {
  return <StyledLogo>LOGO</StyledLogo>;
}

export default Logo;
