import Head from 'next/head';
import { useEffect } from 'react';

export default function Callback() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/count');
      const data = await response.json();
      console.log('RESPOSTAAA');
      console.log(data.items);

      const artists = {};

      data.items.forEach((track) => {
        const artist = track.artists[0].name;
        if (!artists[artist]) {
          artists[artist] = 0;
        }
        artists[artist]++;
      });

      console.log('artists: ', artists);
    };
    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>treefy - callback</title>
        <meta name='description' content='Visualize your spotify data in the form of some trees!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>This is calback</h1>
        <br />
      </main>
    </>
  );
}
