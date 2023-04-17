const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    excludePaths: [path.join(__dirname, 'styles/base')],
    prependData: `@import '${__dirname}/src/styles/base/basic-imports.scss';`,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
