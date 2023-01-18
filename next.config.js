/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'edge',
  },
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false
}

module.exports = nextConfig