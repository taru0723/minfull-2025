/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'thumbnail.image.rakuten.co.jp',
      'images.unsplash.com',
      'placeholder.svg'
    ],
    unoptimized: true,
  },
};

export default nextConfig;
