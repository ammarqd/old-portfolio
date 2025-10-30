/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/old-portfolio',
  assetPrefix: '/old-portfolio/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
