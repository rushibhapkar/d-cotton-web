/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // CRITICAL: This tells Next.js your site is in a subfolder
  basePath: '/d-cotton-web',
  assetPrefix: '/d-cotton-web',
}

module.exports = nextConfig