import * as querystring from 'querystring'

import { cookies, data } from '@/utils';
const { setResponseCookies } = cookies


const STATE = data.generateRandomString()
const SPOTIFY_AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const SPOTIFY_SCOPES = 'user-top-read user-read-recently-played user-read-private';

const handler = (req, res) => {
  const queries = {
    response_type: 'code',
    client_id: process.env.CLIENT_ID,
    scope: SPOTIFY_SCOPES,
    redirect_uri: process.env.REDIRECT_URI,
    state: STATE,
  };

  const cookies = { state: STATE}
  setResponseCookies(res, cookies)
  res.redirect(308, `${SPOTIFY_AUTH_ENDPOINT}?${querystring.stringify(queries)}`);
};

export default handler;
