import axios from 'axios'
import * as CryptoJS from 'crypto-js';
const SECRET_KEY = process.env.NEXT_PUBLIC_APP_SECRET;

import { cookies, data } from '@/utils';

const { setResponseCookies } = cookies
const { serializeData } = data
const TOKEN_URL = 'https://accounts.spotify.com/api/token'

const handler = async (req, res) => {
  const { code, state } = req.query;

  const { state: storedState } = req.cookies
  if (!code || !state || !storedState || storedState !== state) {
    console.log("ERRO:", { code, state, storedState })
    res.redirect(308, '/')
  }

  setResponseCookies(res, {})

  try {
    const requestBody = {
      code,
      grant_type: 'authorization_code',
      redirect_uri: process.env.REDIRECT_URI,
    }
  
    const headers = {
      Authorization: `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    
    const response = await axios.post(
      TOKEN_URL,
      serializeData(requestBody),
      { headers }
    )
  
    const { access_token, expires_in, refresh_token } = response.data
    console.log({access_token, expires_in, refresh_token })
    const query = { accessToken: access_token, expiration: new Date().valueOf() + expires_in, refreshToken: refresh_token }
    console.log("query", query)
    const serializedQuery =encodeURIComponent(CryptoJS.AES.encrypt(serializeData(query), SECRET_KEY).toString())
     
    res.redirect(308, `/auth?data=${serializedQuery}`)
    
  } catch (error) {
    console.log("---------")
    console.log('ERROOOO')
    console.log("---------")
    console.log(error)
    res.redirect(308, '/')
  }
};

export default handler;
