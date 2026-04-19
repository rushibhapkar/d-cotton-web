/** @type {import('next').NextConfig} */
const nextConfig = {
  output  : 'export',
  images  : { unoptimized: true },
  basePath: '/d-cotton-web',
  assetPrefix   : '/d-cotton-web',
  reactStrictMode: false,   // ✅ fixes browser extension hydration warnings
}

module.exports = nextConfig;