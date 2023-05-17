import axios from 'axios'
import * as CryptoJS from 'crypto-js';
const SECRET_KEY = process.env.NEXT_PUBLIC_APP_SECRET;

import { data } from '@/utils';

const { serializeData } = data
const REFRESH_TOKEN_URL = 'https://accounts.spotify.com/api/token'

const handler = async (req, res) => {
  try {
    const { refresh_token } = req.query;

    const requestBody = {
      refresh_token,
      grant_type: 'refresh_token',
    }
  
    const headers = {
      Authorization: `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    
    const response = await axios.post(
      REFRESH_TOKEN_URL,
      serializeData(requestBody),
      { headers }
    )

    const { access_token, expires_in } = response.data
  
    console.log({access_token, expires_in, refresh_token })

    const query = { accessToken: access_token, expiration: new Date().valueOf() + expires_in, refreshToken: refresh_token }
     
    res.send(query)
  } catch (error) {
    console.log("---------")
    console.log('ERROOOO')
    console.log("---------")
    console.log(error)
    res.redirect(308, '/')
  }
};

export default handler;
