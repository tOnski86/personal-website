import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import BackgroundLayout from './BackgroundLayout';

const StyledAppLayout = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(
    to bottom right,
    var(--color-black),
    var(--color-grey-3)
  );
`;

const Main = styled.main`
  padding: 4rem 2rem;

  @media (min-width: 768px) {
    padding: 6rem 6rem;
  }
`;

function AppLayout() {
  const location = useLocation();
  const Container =
    location.pathname === '/about' || location.pathname === '/contact'
      ? BackgroundLayout
      : StyledAppLayout;

  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
        <ScrollRestoration />
      </Main>
    </Container>
  );
}

export default AppLayout;
