/** @type {import('next').NextConfig} */
const nextConfig = {
  // redirect this page to https://www.coffeedream.com.tr/ this url
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://www.coffeedream.com.tr/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
