/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [{
      hostname: '*.googleusercontent.com'
    }]
  }
}

module.exports = nextConfig
