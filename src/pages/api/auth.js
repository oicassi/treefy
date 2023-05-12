import axios from 'axios'

import { cookies, data } from '@/utils';

const { setResponseCookies } = cookies
const { serializeData } = data
const TOKEN_URL = 'https://accounts.spotify.com/api/token'

const handler = async (req, res) => {
  const { code, state } = req.query;

  const { state: storedState } = req.cookies
  if (!code || !state || !storedState || storedState !== state) {
    console.log("ERRO:", {code, state, storedState})
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
      {
        headers
      })
  
    console.log({response})  
    
    
  } catch (error) {
    console.log("---------")
    console.log('ERROOOO')
    console.log("---------")
    console.log(error)
  } finally {
    res.redirect(308, '/')
  }
};

export default handler;
