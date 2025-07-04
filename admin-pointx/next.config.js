


// /** @type {import('next').NextConfig} */
// module.exports = {
//   images: {
//     domains: ['cdn.sanity.io'],
//   },
//   reactStrictMode: false,
//   webpack5: true,
//   webpack: (config) => {
//     config.resolve.fallback = {
//       fs: false,
//       net: false,
//       dns: false,
//       child_process: false,
//       tls: false,
//     };

//     return config;
//   },
// };


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };
    return config;
  }
};

module.exports = nextConfig;