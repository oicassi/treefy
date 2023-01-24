const STATE = 'fuckshit';
const BASE_URL = process.env.SPOTIFY_AUTH_ENDPOINT;

const getRedirectUrl = () => {
  const queries = {
    response_type: 'token',
    client_id: encodeURIComponent(process.env.CLIENT_ID),
    scope: encodeURIComponent(process.env.SCOPES),
    redirect_uri: encodeURIComponent(process.env.REDIRECT_URI),
    state: STATE,
  };

  console.log(queries);

  const queryString = Object.keys(queries).reduce((acc, curr, i) => {
    return `${acc}${i ? '&' : '?'}${curr}=${queries[curr]}`;
  }, '');

  const url = `${BASE_URL}${queryString}`;
  console.log('URL:', url);
  return url;
};

/** @type {import('next').NextConfig} */
const nextConfig = {
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
