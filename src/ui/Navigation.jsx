import { useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  HiOutlineAcademicCap,
  HiOutlineBars3,
  HiOutlineChartBar,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlinePhoto,
  HiOutlineUser,
  HiOutlineXMark,
} from 'react-icons/hi2';

import Button from './Button';
import ButtonRow from './ButtonRow';

const DesktopNav = styled.nav`
  display: none;

  @media (min-width: 900px) {
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

  &.active {
    color: var(--color-primary-light);
  }

  &:hover {
    color: var(--color-primary-dark);
  }
`;

const MobileNav = styled.nav`
  display: block;

  @media (min-width: 900px) {
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

  &.active {
    color: var(--color-primary-light);
    background-color: var(--color-grey-3);
  }

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
          <DesktopNavLink to='work-experience'>Work</DesktopNavLink>
          <DesktopNavLink to='proficiencies'>Proficiencies</DesktopNavLink>
          <DesktopNavLink to='contact'>Contact</DesktopNavLink>
        </ul>

        <ButtonRow>
          <Link
            to='https://github.com/tOnski86'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button variant='primary outline'>
              <FaGithub />
              <span>GitHub</span>
            </Button>
          </Link>

          <Link
            to='https://www.linkedin.com/in/antonio-saqueton/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button variant='primary solid'>
              <FaLinkedin />
              <span>LinkedIn</span>
            </Button>
          </Link>
        </ButtonRow>
      </DesktopNav>

      <MobileNav>
        <MobileNavControl onClick={handleMobileNav}>
          {mobileNavOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
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

            <MobileNavLink to='work-experience' onClick={handleMobileNav}>
              <HiOutlineChartBar />
              <span>Work Experience</span>
            </MobileNavLink>

            <MobileNavLink to='proficiencies' onClick={handleMobileNav}>
              <HiOutlineAcademicCap />
              <span>Proficiencies</span>
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
