export interface Item {
  title: string;
  describe: string;
  thum: string;
  url?: string;
  [key: string]: any;
}

export interface Category {
  title: string;
  children: Item[];
  [key: string]: any;
}

export interface RouteItem {
  path: string;
  label:string,
  element: React.ReactElement;
  errorElement?: React.ReactElement;
  loader?: any;
  enable?:boolean;
  roles?: string[];
  children?: RouteItem[];
  [key: string]: any;
}

export interface MenuItem {
    key: string;
    icon?: React.ReactNode;
    label: string;
    onClick?: () => void;
    children?: MenuItem[];
  }

 export interface NavItemProps {
    path: string;
    label: string;
    children?: RouteItem[];
    level: number;
}