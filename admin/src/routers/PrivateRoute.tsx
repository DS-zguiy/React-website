import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserStore } from '@/stores';
import Authority from '@/components/Authority';

interface PrivateRouteProps {
  path?: string;
  element?: React.ReactElement;
  roles?: string[];
  children?: PrivateRouteProps[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, roles = [] }) => {
  const { userInfo, permissions } = useUserStore();

  
  // 如果用户未登录，跳转到登录页面
  if (!userInfo) {
    return <Navigate to="/login" />;
  }
 
  // 如果用户没有足够的权限，跳转到权限提醒界面
  if (roles.length && !roles.some((role) => permissions.includes(role))) {
    return <Authority roles={roles}/>;
  }

  return element

};

export default PrivateRoute;
