/** @type {import('next').NextConfig} */
const nextConfig = {
  plugins: [
  require("@tailwindcss/typography"),
],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "heaventastebar.pl",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
