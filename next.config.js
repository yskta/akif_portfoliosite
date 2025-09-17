/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pagesのベースパス設定
  basePath: '/akif_portfoliosite',
  assetPrefix: '/akif_portfoliosite',
  trailingSlash: true,
}

module.exports = nextConfig