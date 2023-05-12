const setResponseCookies = (res, cookiesObject) => {
  if (!res || typeof cookiesObject !== 'object') return
  const cookies = Object.keys(cookiesObject).map((key) => `${key}=${cookiesObject[key]}`)
  console.log({cookies})
  res.setHeader('Set-Cookie', cookies)
}

export { setResponseCookies }