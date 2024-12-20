import { Outlet, ScrollRestoration } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';

const StyledAppLayout = styled.div`
  background-image: url('bg-grunge.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

const Main = styled.main`
  padding: 4rem 2rem;

  @media (min-width: 768px) {
    padding: 6rem 6rem;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Outlet />
        <ScrollRestoration />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
