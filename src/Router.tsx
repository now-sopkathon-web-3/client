import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/home/Home';
import Ranking from '@pages/ranking/Ranking';

const Router = () => {
  const routerData = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/ranking',
      element: <Ranking />,
    },
  ]);

  return <RouterProvider router={routerData} />;
};

export default Router;
