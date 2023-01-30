import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { storage } from '@/utils';

export default function Home() {
  const [storedData, setStoredData] = useState('');

  const handleStoreData = () => {
    storage.setItem('testezinho', 'pipipi popopo');
  };

  const handleGetData = () => {
    const s = storage.getItem('testezinho');
    setStoredData(s);
  };

  return (
    <>
      <Head>
        <title>treefy</title>
        <meta name='description' content='Visualize your spotify data in the form of some trees!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Image priority src='/images/profile.jpeg' height={144} width={144} alt='profile pic' />

        <button onClick={handleStoreData}>Store</button>
        <br />
        <button onClick={handleGetData}>GetData</button>
        <br />
        <br />
        <p>{typeof storedData !== 'string' ? JSON.stringify(storedData) : storedData}</p>
      </main>
    </>
  );
}
