
// const Home = React.lazy(() => import("@/pages/Home"));
// const About = React.lazy(() => import("@/pages/About"));
// const Dashboard = React.lazy(() => import("@/pages/Dashboard"));
// const UserManagement = React.lazy(() => import("@/pages/UserManagement"));
// const Settings = React.lazy(() => import("@/pages/Settings"));

import Home from "@/pages/Home";
import About from "@/pages/About";
import Dashboard from "@/pages/Dashboard";
import UserManagement from "@/pages/UserManagement";
 import Settings from "@/pages/Settings";


export const routerList: any = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "user-management", element: <UserManagement /> },
      { path: "settings", element: <Settings /> },
    ],
  },
];


