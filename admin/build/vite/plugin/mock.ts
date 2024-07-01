/**
 * Mock plugin for development and production.
 * https://github.com/anncwb/vite-plugin-mock
 */
import { viteMockServe } from "vite-plugin-mock";

/**
 * Used in a production environment. Need to manually import all modules
 */


export function configMockPlugin() {

  return viteMockServe({
    ignore: /^_/,
    mockPath: "mock",
    enable: true, // 启用 mock
    // logger: true, // 启用日志
    // watchFiles: true, // 监听文件变化
  });
}

