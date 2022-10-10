module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      resolve = {
        fallback: {
          fs: false
        }
      };
    }

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
