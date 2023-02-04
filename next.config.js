const path = require('path');

const STATE = 'fuckshit';
const SPOTIFY_AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const SPOTIFY_SCOPES = 'user-top-read user-read-recently-played user-read-private';

const getRedirectUrl = () => {
  const queries = {
    response_type: 'token',
    client_id: encodeURIComponent(process.env.CLIENT_ID),
    scope: encodeURIComponent(SPOTIFY_SCOPES),
    redirect_uri: encodeURIComponent(process.env.REDIRECT_URI),
    state: STATE,
  };

  const queryString = Object.keys(queries).reduce((acc, curr, i) => {
    return `${acc}${i ? '&' : '?'}${curr}=${queries[curr]}`;
  }, '');

  const url = `${SPOTIFY_AUTH_ENDPOINT}${queryString}`;
  return url;
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    excludePaths: [path.join(__dirname, 'styles/base')],
    prependData: `@import '${__dirname}/src/styles/base/basic-imports.scss';`,
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/login',
        destination: getRedirectUrl(),
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
