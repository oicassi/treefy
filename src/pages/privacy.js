import Head from 'next/head';
import Link from 'next/link';
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
        <meta name='description' content='Visualize your spotify data in the form of some trees!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>
        <section className={utilsStyles.container}>Alow</section>
      </div>
    </Layout>
  );
};

export default Privacy;
