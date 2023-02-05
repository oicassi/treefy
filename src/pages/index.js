import Head from 'next/head';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import styles from '@/styles/pages/index.module.scss';
import utilsStyles from '@/styles/base/utils.module.scss';

export default function Home() {
  const handleClick = () => {
    console.log('clicked');
  };
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
            <p>
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
          </div>
        </section>
        <section className={utilsStyles.container}>opa</section>
      </div>
    </Layout>
  );
}
