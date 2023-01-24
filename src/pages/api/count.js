const BASE_URL = 'https://api.spotify.com/v1/me/top/tracks';

const handler = async (_, res) => {
  const queries = {
    time_range: 'short_term',
    limit: 50,
  };

  const querystring = Object.keys(queries).reduce((acc, curr, i) => {
    return `${acc}${i ? '&' : '?'}${curr}=${queries[curr]}`;
  }, '');

  const url = `${BASE_URL}${querystring}`;
  console.log('URL:', url);
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  console.log('DATA:', data);
  res.status(200).json(data);
};

export default handler;
