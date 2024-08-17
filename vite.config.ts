import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {VantResolver} from '@vant/auto-import-resolver';
import postcss from './postcss.config.js';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        ...postcss.plugins,
        vue(),
        AutoImport({
            resolvers: [VantResolver()],
        }),
        Components({
            resolvers: [VantResolver()],
        }),
    ],
    server: {
        host: '0.0.0.0',
    },
    base: './',
    build: {
        outDir: './autox/build/production/dist'
    },
})
