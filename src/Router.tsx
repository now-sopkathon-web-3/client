import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/home/Home';
import My from './pages/My/My';

const Router = () => {
  const routerData = createBrowserRouter([
    {
      path: '/my/:memberId',
      element: <My />,
    },
    { path: '/Home', element: <Home /> },
  ]);

  return <RouterProvider router={routerData} />;
};

export default Router;
