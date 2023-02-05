import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

import styles from '@/styles/components/Layout.module.scss';

export const siteTitle = 'treefy';

const Layout = ({ children, home }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content="Visualize your recent spotify's top played artists in a simple field with trees"
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <div className={styles.appContainer}>
        <Header />
        <main className={styles.mainContainer}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
