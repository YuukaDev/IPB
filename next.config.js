/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.chec.io"],
    loader: "akamai",
    path: ''
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
