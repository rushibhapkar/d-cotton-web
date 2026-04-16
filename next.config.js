/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Forces Next.js to build a static HTML/CSS/JS folder
  images: {
    unoptimized: true, // Required for static export unless using a third-party loader
  },
}

module.exports = nextConfig