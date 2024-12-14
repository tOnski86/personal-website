import styled from 'styled-components';
import Button from './Button';
import { HiOutlineEnvelope } from 'react-icons/hi2';

const DesktopNav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & ul {
    display: flex;
    gap: 2rem;
  }

  & li {
    list-style: none;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: var(--color-primary-dark);
    }
  }
`;

const MobileNav = styled.nav`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

function Navigation() {
  return (
    <>
      <DesktopNav>
        <ul>
          <li>About</li>
          <li>Portfolio</li>
          <li>Proficiencies</li>
          <li>Work Experience</li>
        </ul>
        <Button variant='primary solid'>
          <HiOutlineEnvelope />
          <span>Contact</span>
        </Button>
      </DesktopNav>

      <MobileNav>MOBILE</MobileNav>
    </>
  );
}

export default Navigation;
