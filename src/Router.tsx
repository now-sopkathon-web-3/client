import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/home/Home';
import Record from '@pages/record/Record';
import SuccessPage from '@pages/record/SuccessPage';
import FailPage from '@pages/record/FailPage';

const Router = () => {
  const routerData = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/record',
      element: <Record />,
    },
    {
      path: '/record/success',
      element: <SuccessPage />,
    },
    {
      path: '/record/fail',
      element: <FailPage />,
    },
  ]);

  return <RouterProvider router={routerData} />;
};

export default Router;
