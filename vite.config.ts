import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// vite 的 eslint 插件(在 dev || build 时自动检测指定文件的 eslint 问题)
import eslintPlugin from 'vite-plugin-eslint'
// Vite 的 stylelint 插件
import vitePluginStylelint from 'vite-plugin-stylelint'
// PostCss 插件，用来自动给 CSS 属性添加前缀
import postcssPresetEnv from 'postcss-preset-env'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/static/', // 设置静态资源基础路径为 /static/
  build: {
    outDir: './blog/', // 打包输出目录
    assetsDir: 'static', // 静态资源目录
  },
  server: {
    proxy: {
      '/api': {
        // 将前端的本地服务器请求代理到 nest 服务上
        target: 'http://localhost:3000',
        changeOrigin: true,
        // 路径重写
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'], // linting 时要包含的单个文件或文件数组。
      lintOnStart: false, // 项目启动时检查所有匹配的文件，太慢了，谨慎打开。
    }),
    vitePluginStylelint({ fix: true }),
    vuetify({
      autoImport: true, // Vuetify 自动按需导入
      styles: {
        configFile: 'src/assets/css/settings.scss',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [postcssPresetEnv(), require('tailwindcss'), require('autoprefixer')],
    },
  },
})
