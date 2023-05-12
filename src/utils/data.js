const normalizeSpotifyData = (rawData) => {};

const generateRandomString = (length = 8) => {
  const availableChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charArray = new Array(length)
  for (let i = 0; i < charArray.length; i++) {
    charArray[i] = availableChars.charAt(Math.floor(Math.random() * availableChars.length))
  }
  
  return charArray.join('')
}

export { normalizeSpotifyData, generateRandomString };
