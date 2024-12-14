import styled from 'styled-components';
import Logo from './Logo';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 4.8rem;
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
        <span>NAVIGATION</span>
      </ContentGroup>

      <button>CONTACT</button>
    </StyledHeader>
  );
}

export default Header;
