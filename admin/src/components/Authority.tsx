// src/components/Authority.tsx
import useUserStore from '@/stores/useUserStore';
import React from 'react';
interface rolesProps {

    roles: string[]
}
const Authority: React.FC<rolesProps> = ({roles}) => {

    const { permissions } = useUserStore();



    return <h1>无权限 ， 当前角色为 : {permissions} ；所需角色 ：{roles.join(',')}</h1>;
}

export default Authority;
