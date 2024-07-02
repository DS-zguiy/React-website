# React-website

=======

# React + Nestjs 脚手架

## 目录

客户端

- [简介](#客户端简介)
- [功能](#客户端功能)
- [安装](#客户端安装)
- [使用](#客户端使用)
- [客户端项目结构](#客户端项目结构)
- [客户端配置事项](#客户端配置事项)
  服务端

- [简介](#简介)
- [功能](#功能)
- [安装](#安装)
- [使用](#使用)
- [项目结构](#项目结构)

## 客户端简介

一个 react 基础脚手架，只提供最基础的功能

## 客户端功能

列出项目的主要特性和功能。

- [x] Mock 服务端接口模拟
- [x] 持久化存储
- [x] 类型提示
- [x] Axios 请求模块
- [x] 全局配置
- [x] 设置代理
- [x] 国际化
- [x] 路由
- [x] 权限
- [x] 动态导入
- [x] 代码自动分割
- [x] 更多...

## 客户端安装

说明如何安装和配置项目。

```bash
# 克隆仓库

git clone https://github.com/DS-zguiy/react-nav-website.git

# 进入项目目录
cd admin

# 安装依赖
npm i

```

## 客户端使用

```bash
# 运行

vite --host

# 构建

vite build


```

## 客户端项目结构

项目的文件和目录结构如下：

- **build**: 构建所需要的配置
  - **vite**:
    - **plugin**: 插件的封装
      - **index.ts**: 安装的插件在这里进行配置
- **mock**: 本地请求模拟
  - **test**: 模拟的数据，创建的文件他会自动识别
- **public**: 公共文件夹，静态资源文件夹
  - **locales**: 国际化语言包
    - **zh**: 中文包
    - **en**: 英文包
- **src**: 源代码目录
  - **api**: 后端接口
  - **assets**: 存放项目的图片、SVG 等资源文件
  - **components**: 存放通用的 React 组件
  - **config**: 站点配置
  - **enums**: 枚举类型定义
  - **pages**: 存放页面级组件
    - **RootPage.tsx**: 根节点
  - **routes**: 路由组件
    - **routerList**: 路由集合
  - **server**: axios 封装
  - **stores**: 状态管理
  - **utils**: 工具类
- **types**: 类型定义
- **.env.development**: 开发环境配置
- **.env.production**: 生产环境配置
- **vite.config.ts**: vite 的配置

## 客户端配置事项

前后端约定的参数结构

- **src/server/types**:

```bash

export interface Result<T = any> {
  code: number;
  type?: 'success' | 'error' | 'warning';
  message: string;
  result?: T;
}

```

路由配置

- **src/routes/routerList**:

```bash
 #H所有的路由都在RootPage根节点下面，如果不在根节点下面路由会进行跳转，比如登录等操作
 #如果子级启用，父级默认启用
 #如果父级禁用，子级都被禁用
  {
    path: '/',
    label: 'Home',
    element: <RootPage />,          #根节点
    errorElement: <ErrorPage />,    #配置错误页面
    roles: ['user', 'admin'],
    children: [
      {
        #复制下面的这个配置就行，根据自己的需要改
        path: '路由path',
        label: '侧边导航栏的文字',
        element: <React组件 />,     #子路由组件
        roles: ['user', 'admin'],  #当前路由谁能够访问
        enable: true,              #是否可见   默认true

      }]
      ]
      }

```

身份配置

- **src/stores/useUserStore**:

```bash

const useUserStore = createWithEqualityFn<UserState>((set) => ({
  userInfo: {},
  name: "",
  email: "",
  token: "",
  permissions: "user",                                       #获取身份
  setUser: (name, email) => set({ name, email }),
  setPermissions: (permissions) => set({ permissions }),     #设置身份
  clearUser: () => set({ name: "", email: "" }),
  setUserInfo: (userInfo) => set({ userInfo }),
}));

```



动态导入

```bash

import { lazy } from 'react';

const Dashboard = lazy(() => import('@/pages/Dashboard'));



```



代码自动分割

```bash

import { lazy } from 'react';

const Dashboard = lazy(() => import('@/pages/Dashboard'));



```
