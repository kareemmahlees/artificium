/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "artificium-web.s3.us-west-2.amazonaws.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
