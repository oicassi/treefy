import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import styles from '@/styles/pages/field.module.scss';
import utilsStyles from '@/styles/base/utils.module.scss';

const Field = () => {
  const [spotifyData, setSpotifyData] = useState(null);

  const normalizeSpotifyData = (rawData) => {};

  const getSpotifyData = async () => {};

  const getToken = () => {};

  const init = () => {
    // se tem dados no state (talvez)
    // se nao tiver token no session storage
    // pega info do token (getSpotifyToken)
    // pega os dados (getSpotifyData)
  };

  return (
    <Layout isHome={false}>
      <Head>
        <title>field | treefy</title>
      </Head>
      <div className={styles.container}>
        <section className={utilsStyles.container}>
          <h1 className={styles.title}>your treefy field :)</h1>
          <p>pipipi</p>
        </section>
      </div>
    </Layout>
  );
};

export default Field;
