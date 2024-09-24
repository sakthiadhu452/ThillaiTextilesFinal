import { defineConfig } from
 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '13.60.50.147',  // Replace with your EC2 instance public IP
    port: 5173,            // Change the port to something higher than 1024
    strictPort: true       // Ensure the port is strictly used
  }
})
