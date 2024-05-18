import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/home/Home';
import Ranking from '@pages/ranking/Ranking';
import History from '@pages/history/History';

const Router = () => {
  const routerData = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/ranking/:id',
      element: <Ranking />,
    },
    {
      path: '/history/:id',
      element: <History />,
    },
  ]);

  return <RouterProvider router={routerData} />;
};

export default Router;
