import Head from 'next/head';
import Link from 'next/link';
import Button from '@/components/Button';
import Layout from '@/components/Layout';
import { useMediaQuery } from '@/utils/hooks';
import styles from '@/styles/pages/privacy.module.scss';
import utilsStyles from '@/styles/base/utils.module.scss';

const Privacy = () => {
  const isMobile = useMediaQuery('mobile');
  return (
    <Layout isHome={false}>
      <Head>
        <title>privacy | treefy</title>
      </Head>
      <div className={styles.container}>
        <section className={utilsStyles.container}>
          <h1 className={styles.title}>privacy policy</h1>
          <p>
            <span className={styles.highlight}>treefy</span> was developed by <strong>cassiano kruchelski</strong> as an
            open source app powered by the{' '}
            <a href='https://developer.spotify.com/documentation/web-api/' target='_blank' rel='noreferrer'>
              Spotify Web API
            </a>
            . This service is not intended for monetization. By choosing to use this app, you agree to the collection
            and use of information regarding your Spotify account username and data for your recent top artists.
          </p>
          <p>
            None of the data used by <span className={styles.highlight}>treefy</span> is{' '}
            <strong>stored, collected and is not shared with any third parties</strong>. All information is used solely
            for displaying your treefy.
          </p>
          <p>
            Although you can rest assured that your data <strong>is not</strong> being stored or used maliciously, if
            you want you can revoke <span className={styles.highlight}>treefy&apos;s</span> permissions,{' '}
            <a href='https://support.spotify.com/us/article/spotify-on-other-apps/' target='_blank' rel='noreferrer'>
              here
            </a>{' '}
            is a guide for doing so.
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

export default Privacy;
