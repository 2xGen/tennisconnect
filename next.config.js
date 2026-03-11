/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iemgpccgdlwpsrsjuumo.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'soaacpusdhyxwucjhhpy.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'toftennis.nl',
      },
      {
        protocol: 'https',
        hostname: 'tennisconnect.eu',
      },
      {
        protocol: 'https',
        hostname: 'player.vimeo.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;

