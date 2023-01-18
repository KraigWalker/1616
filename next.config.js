/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'experimental-edge',
  },
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: 'https://1616.run/api/sitemap',
      }
    ]
  },
}

module.exports = nextConfig