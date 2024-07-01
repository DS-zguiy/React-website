// src/components/Home.tsx
import React, { useState } from 'react';
import { graph } from '../data/graph'
import { Category, Route } from '~/types/components';

import { JSX } from 'react/jsx-runtime';
import routes from '@/data/routes';
import IconComponent from '@/components/IconComponent';
import CategoryComponent from '@/components/CategoryComponent';
import { getData } from '@/api';
import LanguageSelector from '@/components/LanguageSelector';
import { useTranslation } from 'react-i18next';


const Home: React.FC = () => {

  const [selectedPath, setSelectedPath] = useState<string>('');
  const [iseditor = false, setIseditor] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(new Set());
  const [categorys, seCategorys] = useState<any[]>(graph);
  const categoryList = [];

  const a = getData()
  console.log(a);

  const { t } = useTranslation();

  // const user = getUser()
  // console.log(user);

  for (let i = 0; i < categorys.length; i++) {
    const categor = categorys[i];
    categoryList.push(<CategoryComponent key={i} category={categor} iseditor={iseditor} handleEditor={(ev) => handleEditorItem(ev)} handleRemove={(ev, itemId) => handleRemoveItem(ev, categor.id, itemId)} />)
  }

  const renderRoutes = (
    routes: Route[],
    selectedPath: string,
    expandedPaths: Set<string>,
    handleClick: (path: string, ev: React.MouseEvent<HTMLAnchorElement>) => void,
    handleExpandCollapse: (path: string) => void
  ): JSX.Element[] => {
    return routes.map((item: Route) => {
      const isSelected = selectedPath === item.path;
      const isExpanded = expandedPaths.has(item.path);

      if (item.children && item.children.length > 0) {
        return (
          <li className={`has-sub  ${isExpanded ? 'expanded' : ''}`} key={item.path}>
            <a onClick={() => handleExpandCollapse(item.path)}>

              {<i >
                <IconComponent icon={item.icon} /></i>}
              <span className="title">{item.title}</span>
            </a>

            <ul style={{ display: isExpanded ? 'block' : 'none' }}>
              {renderRoutes(item.children, selectedPath, expandedPaths, handleClick, handleExpandCollapse)}
            </ul>

          </li>
        );
      } else {
        return (
          <li className={` ${isSelected ? 'active' : ''}`} key={item.path}>
            <a href="" onClick={(e) => {
              e.preventDefault();
              handleClick(item.path, e);
            }}>
              {<i >
                <IconComponent icon={item.icon} /></i>}
              <span className="title">{item.title}</span>
            </a>
          </li>
        );
      }
    });
  };




  const handleClick = (path: string, ev: React.MouseEvent<HTMLAnchorElement>) => {
    setSelectedPath(path);
    ev.preventDefault();

    const element = document.getElementById(path);

    if (element) {

      window.scrollTo({
        top: element.offsetTop - 30,
        behavior: 'smooth',
      });
    }
  }

  const handleToggleCollapsed = (): void => {
    setCollapsed(collapsed => collapsed = !collapsed);
  };

  const handleToggleIsEditor = (): void => {
    setIseditor(iseditor => iseditor = !iseditor);
  };

  const handleRemoveItem = (ev: React.MouseEvent<HTMLDivElement>, categoryId: string, itemId: string): void => {
    ev.stopPropagation()

    // const category= categorys.find(item=>item.title===categoryTitle)
    // const newCategorys = category.chilrend.filter(item => item.title !== itemTitle);
    // console.log(categorys);
    // const newCategorys = categorys.filter((category:Category) => category.title === categoryTitle);
    // newCategorys[0].children.find((item:Item) => item.title === itemTitle)
    // console.log(newCategorys,itemTitle);
    const removeChild = (categories: Category[], categoryId: string, itemId: string): Category[] => {
      return categories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            children: category.children?.filter(child => child.id !== itemId)
          };
        }
        return category;
      });
    };


    const newCategories = removeChild(categorys, categoryId, itemId);
    console.log(newCategories);

    seCategorys(newCategories)
    // const a= graph.find(item=>item.title===title)
    // console.log(a);

  };
  const handleEditorItem = (ev: React.MouseEvent<HTMLDivElement>): void => {
    ev.stopPropagation()
    // setIseditor(iseditor => iseditor = !iseditor);
    console.log("编辑", ev);
  };


  const handleExpandCollapse = (path: string) => {
    setExpandedPaths(prevExpandedPaths => {
      const newExpandedPaths = new Set(prevExpandedPaths);
      if (newExpandedPaths.has(path)) {
        newExpandedPaths.delete(path);
      } else {
        newExpandedPaths.add(path);
      }
      return newExpandedPaths;
    });
  };

  const routeList: JSX.Element[] = renderRoutes(routes, selectedPath, expandedPaths, handleClick, handleExpandCollapse);


  return <div className='page-container'>
    <div className={`sidebar-menu toggle-others fixed ${collapsed ? 'collapsed' : ''}`}>

      <div className="sidebar-menu-inner ps-container">
        <header className="logo-env">

          <div className="logo">

            <a href="index.html" className="logo-expanded">
              <img src="../images/logo@2x.png" width="100%" alt="" />
            </a>
            <a href="index.html" className="logo-collapsed">
              <img src="../images/logo-collapsed@2x.png" width="40" alt="" />
            </a>
          </div>
          <div className="mobile-menu-toggle visible-xs">
            <a href="#" data-toggle="user-info-menu">
              <i className="linecons-cog"></i>
            </a>
            <a href="#" data-toggle="mobile-menu">
              <i className="fa-bars"></i>
            </a>
          </div>
        </header>


        <ul id="main-menu" className="main-menu">
          {routeList}


        </ul>
        <div className="ps-scrollbar-x-rail" style={{ left: '0px', bottom: '3px' }}><div className="ps-scrollbar-x" style={{ left: '0px', width: '0px' }}></div></div><div className="ps-scrollbar-y-rail" style={{ top: '0px', right: '2px' }}><div className="ps-scrollbar-y" style={{ top: '0px', height: '0px' }}></div></div></div>
    </div>
    <div className='main-content'>
      <nav className="navbar user-info-navbar" role="navigation">

        <ul className="user-info-menu left-links list-inline list-unstyled">
          <li className="hidden-sm hidden-xs" style={{ minHeight: '75px' }}>
            <a href="#" data-toggle="sidebar">
              <IconComponent icon={'PiListBold'} size={18} onClick={handleToggleCollapsed} />
            </a>
          </li>
          <li className="" style={{ minHeight: '75px' }}>
            {iseditor ? (
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={handleToggleIsEditor}>
                <IconComponent icon={'PiCheckBold'} size={18} />
                <span style={{ verticalAlign: 'super', marginLeft: '4px' }}>保存</span>
              </a>
            ) : (<a href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={handleToggleIsEditor}>
              <IconComponent icon={'PiNotePencilBold'} size={18} />
              <span style={{ verticalAlign: 'super', marginLeft: '4px' }}>编辑</span>
            </a>)}

            {t('footer.detail')}
          
            <ul className="dropdown-menu languages">

              <li>

                <a href="../en/index.html">
                  <img src="../assets/images/flags/flag-us.png" alt="flag-us" /> English
                </a>
              </li>
              <li className="active">
                <a href="../cn/index.html">
                  <img src="../assets/images/flags/flag-cn.png" alt="flag-cn" /> Chinese
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="user-info-menu right-links list-inline list-unstyled">
          <li className="hidden-sm hidden-xs" style={{ minHeight: '75px' }}>
            <a href="#" >
              <i className=""></i>   <LanguageSelector />
            </a>
          </li>
        </ul>
        <ul className="user-info-menu right-links list-inline list-unstyled">
          <li className="hidden-sm hidden-xs" style={{ minHeight: '75px' }}>
            <a href="" target="_blank">
              <i className=""></i>  用户
            </a>
          </li>
        </ul>
      </nav>
      {categoryList}
    </div>
  </div >;
}
export default Home;