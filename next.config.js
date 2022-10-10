module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/gimbalgrid",
        permanent: true,
      },
    ];
  },
};
