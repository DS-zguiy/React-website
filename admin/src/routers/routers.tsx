// src/AppRoutes.tsx
import React from 'react';
import {  createHashRouter, RouterProvider } from 'react-router-dom';
import routerList from './routerList';
import Loading from '@/pages/Loading'; // 假设有一个加载组件
import PrivateRoute from './PrivateRoute';
import { RouteItem } from '~/types/components';




// 将路由列表转换为 createBrowserRouter 所需的格式
const renderRoutes = (routes: RouteItem[]) => {
  return routes.map((route: RouteItem) => {
    const routeConfig: any = {
      path: route.path,
      element: <PrivateRoute element={route.element} roles={route.roles} />,
      errorElement: route.errorElement,
      loader: route.loader
    };

    if (route.children) {
      routeConfig.children = renderRoutes(route.children);
    }

    return routeConfig;
  });
};

const router = createHashRouter(renderRoutes(routerList));

const AppRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
};

export default AppRoutes;
