/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    images: {
        domains: [
          "localhost",
          "127.0.0.1",
        ],
      },
      sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
      },
}

module.exports = nextConfig
