/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    remotePatterns:[{
      protocol:"https",
      hostname:"fakestoreapi.com"
    }]
  }
}

module.exports = nextConfig

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ['fakestoreapi.com'],
//   },
// };

// module.exports = nextConfig;
