import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  
  // Performance optimizations
  compress: true,
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Turbopack configuration (Next.js 16+ uses Turbopack by default)
  turbopack: {
    // Turbopack handles code splitting automatically and efficiently
    // No manual configuration needed for bundle splitting
  },
  
  // Webpack config for fallback (when using --webpack flag)
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Optimize bundle splitting for webpack
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Separate vendor chunks
            framerMotion: {
              name: 'framer-motion',
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              priority: 20,
              reuseExistingChunk: true,
            },
            lucideReact: {
              name: 'lucide-react',
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
              priority: 20,
              reuseExistingChunk: true,
            },
            vendor: {
              name: 'vendor',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
