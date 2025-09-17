/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pagesのベースパス設定
  // リポジトリ名に合わせて変更してください
  // 例: リポジトリ名が "portfolio" の場合
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio',
}

module.exports = nextConfig