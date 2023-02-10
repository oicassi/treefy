import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import { useMediaQuery } from '@/utils/hooks';
import styles from '@/styles/pages/index.module.scss';
import utilsStyles from '@/styles/base/utils.module.scss';

const Home = () => {
  const isMobile = useMediaQuery('mobile');
  return (
    <Layout>
      <Head>
        <title>treefy</title>
        <meta name='description' content='Visualize your spotify data in the form of some trees!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>
        <section className={utilsStyles.container}>
          <div className={styles.textImage}>
            <p className={styles.textImage__text}>
              treefy is a simple web application that allows you to view{' '}
              <span className={styles.highlight}>your most recently played artists on Spotify</span> in the form of a
              <span className={styles.highlight}>small field with some trees</span>, where the size of the trees and
              their number are related to the relevance of the artist among the most recently played:{' '}
              <span className={styles.highlight}>
                the more plays an artist has, the larger in size (or quantity) will be the tree (or trees) that
                represents it
              </span>
              . <strong>That simple :)</strong>
            </p>
            <Image
              priority
              src='/images/about.png'
              className={styles.textImage__image}
              height={isMobile ? 113 : 160}
              width={isMobile ? 294 : 415}
              alt='Diagram explaining that the recent top artists data come from spotify to be used in treefy'
            />
          </div>
        </section>
        <section className={utilsStyles.container}>
          <h2 className={styles.sectionTitle}>and what about my data?</h2>
          <p className={styles.text}>
            your data will be secure! treefy will only read the info about your top artists and nothing more. The login
            process is completely handled by Spotify so the application doesn’t have any access to your credentials. If
            you want to know more about the login and authorization process,{' '}
            <a
              href='https://developer.spotify.com/documentation/general/guides/authorization/code-flow/'
              target='_blank'
              rel='noreferrer'
            >
              you can check here the documentation from Spotify
            </a>
            . You can also check the <strong>treefy’s</strong> <Link href='/privacy'>privacy section</Link>.
          </p>
        </section>
        <section className={utilsStyles.container}>
          <div className={styles.buttonContainer}>
            <Button tag='Link' href='/login' fluid={isMobile} position='center'>
              LOGIN WITH SPOTIFY
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
