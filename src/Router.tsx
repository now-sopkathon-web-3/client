import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/home/Home';
import RecordPage from '@pages/record/RecordPage';
import SuccessPage from '@pages/record/SuccessPage';
import FailPage from '@pages/record/FailPage';

const Router = () => {
  const routerData = createBrowserRouter([
    {
      path: '/:memberId',
      element: <Home />,
    },
    {
      path: '/record/:memberId',
      element: <RecordPage />,
    },
    {
      path: '/record/success/:memberId',
      element: <SuccessPage />,
    },
    {
      path: '/record/fail/:memberId',
      element: <FailPage />,
    },
  ]);

  return <RouterProvider router={routerData} />;
};

export default Router;
