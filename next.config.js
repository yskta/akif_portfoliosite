/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pagesのベースパス設定
  basePath: isProd ? '/akif_portfoliosite' : '',
  assetPrefix: isProd ? '/akif_portfoliosite' : '',
  trailingSlash: true,
}

module.exports = nextConfig