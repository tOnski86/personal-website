import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  HiOutlineAcademicCap,
  HiOutlineBars3,
  HiOutlineChartBar,
  HiOutlineChatBubbleBottomCenter,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlinePhoto,
  HiOutlineUser,
  HiOutlineXMark,
} from 'react-icons/hi2';

import Button from './Button';

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
`;

const DesktopNavLink = styled(NavLink)`
  list-style: none;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--color-primary-dark);
  }
`;

const MobileNav = styled.nav`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }

  & ul {
    display: flex;
    flex-direction: column;
  }
`;

const MobileNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  list-style: none;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--color-primary-dark);
    background-color: var(--color-grey-3);
  }

  & svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const MobileNavControl = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 0.6rem;
  right: 0;
  transform: translate(-50%, 50%);
  color: var(--color-grey-1);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--color-white);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

function Navigation() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  function handleMobileNav() {
    setMobileNavOpen(mobileNavOpen => !mobileNavOpen);
  }

  return (
    <>
      <DesktopNav>
        <ul>
          <DesktopNavLink to='about'>About</DesktopNavLink>
          <DesktopNavLink to='portfolio'>Portfolio</DesktopNavLink>
          <DesktopNavLink to='proficiencies'>Proficiencies</DesktopNavLink>
          <DesktopNavLink to='work-experience'>Work Experience</DesktopNavLink>
        </ul>
        <Button variant='primary solid'>
          <HiOutlineChatBubbleBottomCenter />
          <span>Contact</span>
        </Button>
      </DesktopNav>

      <MobileNav>
        <MobileNavControl onClick={handleMobileNav}>
          {mobileNavOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}

          {mobileNavOpen}
        </MobileNavControl>
        {mobileNavOpen && (
          <ul>
            <MobileNavLink to='about' onClick={handleMobileNav}>
              <HiOutlineUser />
              <span>About</span>
            </MobileNavLink>
            <MobileNavLink to='portfolio' onClick={handleMobileNav}>
              <HiOutlinePhoto />
              <span>Portfolio</span>
            </MobileNavLink>
            <MobileNavLink to='proficiencies' onClick={handleMobileNav}>
              <HiOutlineAcademicCap />
              <span>Proficiencies</span>
            </MobileNavLink>
            <MobileNavLink to='work-experience' onClick={handleMobileNav}>
              <HiOutlineChartBar />
              <span>Work Experience</span>
            </MobileNavLink>
            <MobileNavLink to='contact' onClick={handleMobileNav}>
              <HiOutlineChatBubbleBottomCenterText />
              <span>Contact</span>
            </MobileNavLink>
          </ul>
        )}
      </MobileNav>
    </>
  );
}

export default Navigation;
