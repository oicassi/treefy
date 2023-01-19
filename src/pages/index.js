import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
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
        <h1>Hellooo</h1>
      </main>
    </>
  );
}
