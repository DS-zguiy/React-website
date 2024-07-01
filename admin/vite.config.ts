import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import { createProxy } from "./build/vite/proxy";
import { createVitePlugins } from "./build/vite/plugin";
import { wrapperEnv } from "./build/utils";
// https://vitejs.dev/config/

export default defineConfig(({command, mode }) => {

  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const isBuild = command === 'build';
  const {
    VITE_PUBLIC_PATH,
    VITE_PORT,
    VITE_OPEN,
    VITE_DROP_CONSOLE,
    VITE_OUTPUT_DIR
  } = viteEnv;
  console.log( VITE_OUTPUT_DIR);
  
  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
        '~': resolve(__dirname, '.'),
      },
    },
    server: {
      host: true,
      port: VITE_PORT,
      open: VITE_OPEN,
      cors: true,
      proxy: createProxy([["/api","http://192.168.2.22:8080"]]),
    },
    plugins: createVitePlugins(viteEnv,isBuild),
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ["console.log", "debugger"] : [],
    },
    build: {
      target: 'es2020',
      cssTarget: 'chrome80',
      outDir: VITE_OUTPUT_DIR,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000,
    },
  };
});
