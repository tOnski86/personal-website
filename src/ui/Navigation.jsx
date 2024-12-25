import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  HiAcademicCap,
  HiBars3,
  HiChartBar,
  HiChatBubbleBottomCenterText,
  HiPhoto,
  HiUser,
  HiXMark,
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
  background-color: var(--color-effect-glass);

  @media (min-width: 900px) {
    display: none;
  }
`;

const MobileNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
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

const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
`;

function Navigation() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function mobileNavClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setMobileNavOpen(false);
      }
    }
    document.addEventListener('click', mobileNavClick, true);

    return () => document.removeEventListener('click', mobileNavClick, true);
  }, []);

  function handleMobileNav() {
    setMobileNavOpen(mobileNavOpen => !mobileNavOpen);
  }

  return (
    <>
      <DesktopNav>
        <ul>
          <DesktopNavLink to='about'>About</DesktopNavLink>
          <DesktopNavLink to='projects'>Projects</DesktopNavLink>
          <DesktopNavLink to='work'>Work</DesktopNavLink>
          <DesktopNavLink to='proficiencies'>Proficiencies</DesktopNavLink>
          <DesktopNavLink to='contact'>Contact</DesktopNavLink>
        </ul>

        <ButtonRow spacing='gap-sm'>
          <Link
            to='https://github.com/tOnski86'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button variant='primary-outline' role='button'>
              <FaGithub />
              <span>GitHub</span>
            </Button>
          </Link>

          <Link
            to='https://www.linkedin.com/in/antonio-saqueton/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button variant='primary-solid' role='button'>
              <FaLinkedin />
              <span>LinkedIn</span>
            </Button>
          </Link>
        </ButtonRow>
      </DesktopNav>

      <MobileNav>
        <MobileNavControl onClick={handleMobileNav} role='button'>
          {mobileNavOpen ? <HiXMark /> : <HiBars3 />}
        </MobileNavControl>

        {mobileNavOpen && (
          <MobileNavList ref={ref}>
            <MobileNavLink to='about' onClick={handleMobileNav}>
              <HiUser />
              <span>About</span>
            </MobileNavLink>

            <MobileNavLink to='projects' onClick={handleMobileNav}>
              <HiPhoto />
              <span>Projects</span>
            </MobileNavLink>

            <MobileNavLink to='work' onClick={handleMobileNav}>
              <HiChartBar />
              <span>Work</span>
            </MobileNavLink>

            <MobileNavLink to='proficiencies' onClick={handleMobileNav}>
              <HiAcademicCap />
              <span>Proficiencies</span>
            </MobileNavLink>

            <MobileNavLink to='contact' onClick={handleMobileNav}>
              <HiChatBubbleBottomCenterText />
              <span>Contact</span>
            </MobileNavLink>
          </MobileNavList>
        )}
      </MobileNav>
    </>
  );
}

export default Navigation;
