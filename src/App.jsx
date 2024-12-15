import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import AppLayout from './ui/AppLayout';
import PageNotFound from './pages/PageNotFound';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Proficiencies from './pages/Proficiencies';
import WorkExperience from './pages/WorkExperience';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <Navigate replace to='about' /> },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/works',
        element: <Portfolio />,
      },
      {
        path: '/proficiencies',
        element: <Proficiencies />,
      },
      {
        path: '/experience',
        element: <WorkExperience />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
