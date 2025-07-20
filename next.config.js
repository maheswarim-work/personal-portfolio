/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Force cache busting for CSS and assets
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
};

module.exports = nextConfig;
