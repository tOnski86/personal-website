import styled from 'styled-components';
import Logo from './Logo';
import Button from './Button';
import Navigation from './Navigation';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 8rem;
  border-bottom: var(--border-sm);
`;

const ContentGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

function Header() {
  return (
    <StyledHeader>
      <ContentGroup>
        <Logo />
        <Navigation />
      </ContentGroup>

      <ContentGroup>
        <Button variant='primary solid'>Contact</Button>
      </ContentGroup>
    </StyledHeader>
  );
}

export default Header;
