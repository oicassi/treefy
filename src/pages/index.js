import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function Home() {
  const handleClick = () => {
    console.log('clicked');
  };
  return (
    <>
      <Head>
        <title>treefy</title>
        <meta name='description' content='Visualize your spotify data in the form of some trees!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <h1>Teste</h1>
        <p>Testezinho</p>
        <Button onClick={handleClick}>
          <div>a</div>
        </Button>
        <Button variant='secondary' float={false} onClick={handleClick}>
          Teste2
        </Button>
        <a href='#'>pipipipi</a>
      </main>
      <Footer />
    </>
  );
}
