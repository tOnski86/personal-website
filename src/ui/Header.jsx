import styled from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 8rem;
  border-bottom: var(--border-sm);

  & > :nth-child(2) {
    flex: 1;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 4rem;
    padding: 1rem 6rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
    </StyledHeader>
  );
}

export default Header;
