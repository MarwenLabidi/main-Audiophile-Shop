import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),federation({
    name: "mainSubApp",
    filename: "remoteEntry.js",
    exposes: {
      './MainApp': './src/main',
    },
    shared: ["react", "react-dom"],
  })],


})
