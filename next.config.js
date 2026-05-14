/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cheflolaskitchen.com' },
      { protocol: 'https', hostname: 'www.allnigerianrecipes.com' },
      { protocol: 'https', hostname: 'kashgain.com' },
      { protocol: 'https', hostname: 'i.pinimg.com' },
      { protocol: 'https', hostname: '**.legit.ng' },
    ],
  },
}
module.exports = nextConfig
