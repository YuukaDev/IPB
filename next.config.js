/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.chec.io"]
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
