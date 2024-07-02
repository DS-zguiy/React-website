import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavItemProps, RouteItem } from "~/types/components";
import routerList from "./routerList";


//过滤掉 隐藏的路由
const filterRoutes = (routes:RouteItem[]) => {
    return routes
      .filter(route => route.enable)
      .map(route => {
        const newRoute = { ...route };
        if (newRoute.children) {
          newRoute.children = filterRoutes(newRoute.children);
        }
        return newRoute;
      });
  };


// 递归生成导航链接，显式添加返回类型 React.ReactNode[]
const create = (routes: RouteItem[], basePath = '', level = 0): React.ReactNode[] => {
    return routes.flatMap((route) => {
        const { path, children, label } = route;
        const fullPath = `${basePath}${path}`.replace(/\/+/g, '/'); // 去掉重复的斜杠

        // 如果路径是根路径（'/'），则跳过生成链接
        if (fullPath === '/') {
            return children ? create(children, fullPath, level) : [];
        }

        return (
            <NavItem
                key={fullPath}
                path={fullPath}
                label={label}
                children={children}
                level={level}
            />
        );
    });
};



const NavItem: React.FC<NavItemProps> = ({ path, label, children, level }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = (e: React.MouseEvent) => {
        e.preventDefault(); // 阻止默认的链接跳转行为
        setIsOpen(!isOpen);
    };

    return (
        <li>
            <div>
                {children ? (
                    <a href="#" onClick={toggleOpen} style={{ cursor: 'pointer', textDecoration: 'none', paddingLeft: `${level * 20}px` }}>
                        {label} {isOpen ? '-' : '+'}
                    </a>
                ) : (
                    <Link to={path} style={{ paddingLeft: `${level * 20}px` }}>{label}</Link>
                )}
            </div>
            {isOpen && children && (
                <ul>
                    {children.map((child) => (
                        <NavItem
                            key={`${path}/${child.path}`}
                            path={`${path}/${child.path}`.replace(/\/+/g, '/')}
                            label={child.label}
                            children={child.children}
                            level={level + 1}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};

const GenerateNavLinks: React.FC = () => {
    return (
        <nav>
            <ul>
                {create( filterRoutes(routerList))}
            </ul>
        </nav>
    );
};

export { GenerateNavLinks };
