import axios from "axios";
import { storage, time, data } from "@/utils";

const SPOTIFY_TOKEN = process.env.NEXT_PUBLIC_TOKEN_KEY;
const BASE_URL = 'https://api.spotify.com/v1'

const getToken = () => {
  const tokenStr = storage.getItem(SPOTIFY_TOKEN)
  if (!tokenStr) return null
  const token = JSON.parse(tokenStr)
  if (typeof token !== 'object') return null
  const { accessToken, expiration, refreshToken } = token
  if (!accessToken || !expiration || !refreshToken) return null
  return token
}

const isTokenValid = (token) => {
  const { accessToken, expiration, refreshToken } = token
  if (!accessToken && !refreshToken) throw new Error('Invalid token')
  if (!accessToken) return false
  if (!expiration || time.isExpired(Number(expiration))) return false
  if (time.isExpired(Number(expiration)) && !refreshToken) throw new Error('Invalid token')
  return true
}

const refreshToken = async (callback) => {
  const token = getToken()
  const { refreshToken } = token
  if (!refreshToken) throw new Error('Invalid token')
  const url = `${location.origin}/api/refresh`
  console.log({url})
  const response = await axios.get(`${url}?refresh_token=${refreshToken}`)
  const { accessToken, expiration } = response.data
  storage.setItem(SPOTIFY_TOKEN, { accessToken, expiration, refreshToken })
  return await callback()
};

const getSpotifyData = async () => {
  try {
    const token = getToken()
    if (!token) return null
    if (!isTokenValid(token)) {
      return await refreshToken(getSpotifyData)
    }

    const query = {
      time_range: 'short_term',
      limit: 50,
      offset: 0
    }

    const headers = {
      Authorization: `Bearer ${token.accessToken}`
    }

    const response = await axios.get(`${BASE_URL}/me/top/tracks?${data.serializeData(query)}`, {
      headers
    })

    const res = {
      shortTerm: response.data
    }

    query.time_range = 'medium_term'

    const response2 = await axios.get(`${BASE_URL}/me/top/tracks?${data.serializeData(query)}`, {
      headers
    })

    res.mediumTerm = response2.data
    console.log(res)
    return res

  } catch (error) {
    console.log("---- ERROR -----")
    console.log(error)
  }
};

export { getSpotifyData, refreshToken };
