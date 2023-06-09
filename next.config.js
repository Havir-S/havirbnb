/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['upload.wikimedia.org', 'randomuser.me', 'robohash.org', 'loremflickr.com', 'avatars.githubusercontent.com', 'cloudflare-ipfs.com', 'lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
