/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeholder.svg'],
    unoptimized: true,
  },
  // Ensure static generation works properly
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Add proper redirects and rewrites
  async redirects() {
    return []
  },
  async rewrites() {
    return []
  },
}

export default nextConfig
