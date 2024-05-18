import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/home/Home';
import RecordPage from '@pages/record/RecordPage';
import SuccessPage from '@pages/record/SuccessPage';
import FailPage from '@pages/record/FailPage';
import Ranking from '@pages/ranking/Ranking';
import History from '@pages/history/History';
import My from './pages/My/My';

const Router = () => {
  const routerData = createBrowserRouter([
    {
      path: '/',
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
    {
      path: '/ranking/:id',
      element: <Ranking />,
    },
    {
      path: '/history/:id',
      element: <History />,
    },
    {
      path: '/my/:memberId',
      element: <My />,
    },
  ]);

  return <RouterProvider router={routerData} />;
};

export default Router;
