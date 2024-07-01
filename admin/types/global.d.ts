//#region User
declare interface TokenInfo {
  expireTime: number;
  login: boolean;
  token: string;
}

declare interface MenuItems {
  pagePath: string;
  icon: string;
  title: string;
  dirPath: string;
  id: string;
  isFull: boolean;
  isHide: boolean;
  isLink: boolean;
  tagInfo?: {
    color?: "success" | "info" | "warning" | "error" | "primary" | "secondary";
    text?: string;
    icon?: string;
  };
  description: string;
  children?: MenuItems[];
}

declare type AuthButtonItems =
  | "dashboard_add"
  | "dashboard_edit"
  | "dashboard_delete";
declare interface UserInfo {
  nickname: string;
  menuList: MenuItems[];
  buttonList: AuthButtonItems[];
}
//#endregion

//#region global loaderData
declare interface DefaultLoaderData {
  title?: string;
}
//#endregion

/* Vite */
declare type Recordable<T = any> = Record<string, T>;

declare interface ViteEnv {
  /** 项目名称 */
  VITE_APP_NAME: string;
  /** 当前环境 开发：dev 测试：test 生产 "" */
  VITE_ENV: "dev" | "test" | "";
  /** 路由模式 */
  VITE_ROUTER_MODE: "hash" | "history";
  /** 运行的端口号 */
  VITE_PORT: number;
  /** 是否打开浏览器 */
  VITE_OPEN: boolean;
  /** 打包后是否生成包分析文件 */
  VITE_REPORT: boolean;
  /** 打包以后是否文件格式 */
  VITE_BUILD_COMPRESS: "gzip" | "brotli" | "gzip,brotli" | "none";
  /** 是否删除源文件 */
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
  /** 是否删除Console.log */
  VITE_DROP_CONSOLE: boolean;
  /** 公共路径 */
  VITE_PUBLIC_PATH: string;
  /** 请求后端api数组地址 */
  VITE_PROXY: [string, string][];
  VITE_GLOB_APP_TITLE: string;
  VITE_MODE: string;
  VITE_MONITOR_URL: string;
  VITE_JINPIKAAI_URL: string;
  /** api 接口地址 */
  VITE_BASE_URL: string;
  /** api */
  VITE_BASE_URL_API: string;
  /**   忽略扩展名 */
  VITE_EXTENSIONS: [];
  /**  是否开启MOCK */
  VITE_USE_MOCK: boolean;
  //编译输出的文件夹
  VITE_OUTPUT_DIR: string;
}

interface ImportMetaEnv extends ViteEnv {
  __: unknown;
}

interface ViteOptions {
  __dirname: string;
}

declare namespace Global {
  type ResultType<T = any> = {
    success?: boolean;
    data: T;
    message: string;
    code: number;
    total?: number;
  };
  type PageParams = {
    pageNum: number;
    pageSize: number;
  };
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  COS: any;
}

declare function parseInt(s: string | number, radix?: number): number;

declare function parseFloat(string: string | number): number;
