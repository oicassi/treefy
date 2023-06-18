const normalizeSpotifyData = (rawData) => {};

const generateRandomString = (length = 8) => {
  const availableChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charArray = new Array(length)
  for (let i = 0; i < charArray.length; i++) {
    charArray[i] = availableChars.charAt(Math.floor(Math.random() * availableChars.length))
  }
  
  return charArray.join('')
}

const serializeData = (obj) => {
  const data = Object.keys(obj).map((key) => `${key}=${obj[key]}`)
  return data.join('&')
}

const prepareSpotifyData = (rawData) => {
  const { shortTerm, mediumTerm } = rawData
  const data = {}
  shortTerm.items.forEach(({ artists }) => {
    const { external_urls, id, name } = artists[0]
    if (!data[id]) {
      data[id] = {
        url: external_urls.spotify || '',
        name,
        id,
        count: 0
      }
    }
    data[id].count += 1
  })

  mediumTerm.items.forEach(({ artists }) => {
    const { external_urls, id, name } = artists[0]
    if (!data[id]) {
      data[id] = {
        url: external_urls.spotify || '',
        name,
        id,
        count: 0
      }
    }
    data[id].count += 1
  })

  const array = Object.keys(data).map((item) => data[item])
  array.sort((a, b) => {
    if (b.count < a.count ) return -1
  })

  const maxValue = array[0].count
  array.forEach((item) => {
    item.variant = Math.floor((item.count / maxValue) * 100)
  })
  return array
}

export { normalizeSpotifyData, generateRandomString, serializeData, prepareSpotifyData };
