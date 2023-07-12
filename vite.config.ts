import { defineConfig, loadEnv } from 'vite'

import path from 'node:path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// export default defineConfig({
//   resolve:{
//     alias: {
//       '~': path.resolve(__dirname, './src')
//     }
//   },
//   plugins: [react()],
// })

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    },
    plugins: [react()],
    define: {
      'process.env.REACT_APP_BASE_URL': JSON.stringify(env.REACT_APP_BASE_URL)
      // If you want to exposes all env variables, which is not recommended
      // 'process.env': env
    }
  }
})
