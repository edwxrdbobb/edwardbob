/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Image optimization configuration
  images: {
    unoptimized: true, // Disable default Image Optimization API
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true, // Only use in development
  },
  
  // ESLint configuration (moved to eslintrc.js)
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Webpack configuration
  webpack(config) {
    // Add any custom webpack config here
    return config;
  }
}

export default nextConfig