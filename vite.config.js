import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";


// https://vite.dev/config/
export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        plugins: [
            tailwindcss(),
            vue()
        ],
        base: '/',
        server: {
            proxy: {
                '/api': {
                    target: env.API_PROXY_TARGET || 'http://localhost:3000',
                    changeOrigin: true
                }
            }
        }
    }
})

