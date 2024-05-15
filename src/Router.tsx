import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/home/Home';

const Router = () => {
  const routerData = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
  ]);

  return <RouterProvider router={routerData} />;
};

export default Router;
