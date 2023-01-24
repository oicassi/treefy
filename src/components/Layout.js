import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import styles from 'styles/components/Layout.module.css';
// import utilStyles from 'styles/utils.module.css';

const name = 'Cassiano Kruchelski';
export const siteTitle = 'treefy';

const Layout = ({ children, home }) => {
  return (
    // <div className={styles.container}>
    <div>
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
      {/* <header className={styles.header}> */}
      <header>
        {/* {home ? (
          <>
            <Image
              priority
              src='/images/profile.jpeg'
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={`Profile image of ${name}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <Image
                priority
                src='/images/profile.jpeg'
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={`Profile image of ${name}`}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/' className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )} */}
        <span>Header</span>
      </header>
      <main>{children}</main>
      {!home && (
        // <div className={styles.backToHome}>
        <div>
          <Link href='/'>← Back to home</Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
