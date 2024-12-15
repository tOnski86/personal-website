import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';

const Main = styled.main`
  margin: 4rem 2rem;

  @media (min-width: 768px) {
    margin: 4rem 6rem;
  }
`;

function AppLayout() {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
