import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('pages/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('pages/pages/authentication/authentication3/Register3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/auth/login/login3',
      element: <AuthLogin3 />
    },
    {
      path: '/auth/register/register3',
      element: <AuthRegister3 />
    }
  ]
};

export default AuthenticationRoutes;
