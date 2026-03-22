/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    DISCORD_URL: process.env.DISCORD_URL,
  },
};

export default nextConfig;

