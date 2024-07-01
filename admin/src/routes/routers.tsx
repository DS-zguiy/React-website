// src/AppRoutes.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, RouteObject } from 'react-router-dom';
import { routerList } from './routerList';
import Loading from '@/pages/Loading'; // 假设有一个加载组件

const isAuthenticated = () => {
  // 在这里添加你的认证逻辑
  return true; // 或者 false，取决于用户的认证状态
};

const AppRoutes: React.FC = () => {
  const renderRoutes = (routes: RouteObject[]) => {
    return routes.map((route, index) => {
      if (route.children) {
        return (
          <Route key={index} path={route.path} element={route.element}>
            {renderRoutes(route.children)}
          </Route>
        );
      } else {
        return (
          <Route
            key={index}
            path={route.path}
            element={route.path === '/about' && !isAuthenticated() ? <Navigate to="/" /> : route.element}
          />
        );
      }
    });
  };

  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Routes>{renderRoutes(routerList)}</Routes>
      </React.Suspense>
    </Router>
  );
};

export default AppRoutes;
