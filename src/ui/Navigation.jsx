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
import { useEffect, useState } from 'react';

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

  & ul {
    display: flex;
    flex-direction: column;
  }

  & li {
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
  }
`;

const MobileNavControl = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, 50%);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--color-primary-dark);
  }

  & svg {
    width: 3rem;
    height: 3rem;
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
          <li>About</li>
          <li>Portfolio</li>
          <li>Proficiencies</li>
          <li>Work Experience</li>
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
            <li onClick={handleMobileNav}>
              <HiOutlineUser />
              <span>About</span>
            </li>
            <li onClick={handleMobileNav}>
              <HiOutlinePhoto />
              <span>Portfolio</span>
            </li>
            <li onClick={handleMobileNav}>
              <HiOutlineAcademicCap />
              <span>Proficiencies</span>
            </li>
            <li onClick={handleMobileNav}>
              <HiOutlineChartBar />
              <span>Work Experience</span>
            </li>
            <li onClick={handleMobileNav}>
              <HiOutlineChatBubbleBottomCenterText />
              <span>Contact</span>
            </li>
          </ul>
        )}
      </MobileNav>
    </>
  );
}

export default Navigation;
