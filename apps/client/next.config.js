/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui'],
  images: {
    domains: [
      'example.com',
      'another-domain.com',
      'www.naver.com',
      'adaptors-bucket.s3.ap-northeast-2.amazonaws.com',
    ], // 허용할 도메인 추가
  },
};
