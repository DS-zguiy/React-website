import RootPage from '@/pages/RootPage';
import AdminPage from '@/pages/AdminPage';
import UserDashboard from '@/pages/UserDashboard';
import AdminDashboard from '@/pages/AdminDashboard';
import LoginPage from '@/pages/LoginPage';
import NestedLayout from '@/pages/NestedLayout';
import { RouteItem } from '~/types/components';
import ErrorPage from '@/pages/ErrorPage';
import Dashboard from '@/pages/Dashboard';
import { getData } from '@/data/data';
import UserPage from '@/pages/UserPage';

//扁平化路由  
const routerList: RouteItem[] = [
  {
    path: '/',
    label: 'Home',
    element: <RootPage />, //根节点
    errorElement: <ErrorPage />,
    roles: ['user', 'admin'],
    enable: true,
    children: [
      {
        path: 'dashboard',
        label: 'dashboard',
        element: <Dashboard />,
        roles: ['user', 'admin'],
        enable: true,
      },
      {
        path: 'user-dashboard',
        label: 'user-dashboard',
        element: <UserDashboard />,
        loader: getData,  //预加载数据
        roles: ['user'],
        enable: false,

      },

      {
        path: 'admin-dashboard',
        label: 'admin-dashboard',
        element: <AdminDashboard />,
        roles: ['admin'],
      },
      {
        path: 'nested',
        label: 'nested',
        element: <NestedLayout />,
        roles: ['user', 'admin'],
        children: [

          {
            path: 'deep-nested',
            label: 'deep-nested',
            element: <NestedLayout />,
            roles: ['user', 'admin'],

          },
        ],
      },
    ],
  },
  {
    path: '/login',
    label: 'login',
    element: <LoginPage />,
    enable: false,
  },
  {
    path: '/admin',
    label: 'admin',
    element: <AdminPage />,
    roles: ['admin'],
    enable: false,
  },
  {
    path: '/user',
    label: 'user',
    element: <UserPage />,
    roles: ['user'],
    enable: false,
  }
];






export default routerList;
