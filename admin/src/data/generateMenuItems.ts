import routerList from "@/routers/routerList";
import { MenuItem, RouteItem } from "~/types/components";

const generateMenuItems = (navigate: (path: string) => void,) => {

    return MenuItems(routerList, navigate)
  
  }
  
  
  const MenuItems = (list: RouteItem[], navigate: (path: string) => void, basePath = ''): MenuItem[] => {
  
    return list.map(route => {
      const fullPath = basePath === '/' ? `/${route.path}` : `${basePath}/${route.path}`;
      const cleanedFullPath = fullPath.replace(/\/+/g, '/'); // 去除多余的斜杠
    //   console.log(`cleanedFullPath: '${cleanedFullPath}'`); // 输出以验证cleanedFullPat
  
      const menuItem: MenuItem = {
        key: cleanedFullPath,
        label: route.path.replace('/', '') || 'Home', // Adjust label as per your requirement
        onClick: () =>{
            console.log(cleanedFullPath);
            
            navigate(cleanedFullPath)
        }
      };
  
      if (route.children) {
        menuItem.children = MenuItems(route.children, navigate, cleanedFullPath);
      }
  
      return menuItem;
    });
  };
  
  export { generateMenuItems }
  