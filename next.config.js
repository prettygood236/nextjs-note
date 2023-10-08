/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-1441986300917-64674bd600d8',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products/deleted_forever',
        destination: '/products',
        //. Search Engine에게 308 status code를 보내주면서 이 페이지는 영원히 이동했으니 안심하고 캐시해도 돼.
        //. 그래서 다음에 또 사용자가 source로 오면 destination으로 보내주면 돼!
        permanent: true,
      },
      {
        source: '/products/deleted_temp',
        destination: '/products',
        permanent: false,
      },
    ];
  },
  //. 내부적으로 복잡한 route이거나, 보안상의 이유로 url을 노출하지 말아야할 때 대체하기 위해 사용
  async rewrites() {
    return [
      //. destination 페이지를 보여주지만 url은 노출되지 않는다.
      { source: '/chan', destination: '/about/me/chan' },
      { source: '/items/:slug', destination: '/products/:slug' },
    ];
  },
};

module.exports = nextConfig;
