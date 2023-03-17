import { useEffect, useState } from "react";
import Head from "next/head";
import { data } from "@/utils";
import { http } from "@/services";
import Layout from "@/components/Layout";
import styles from "@/styles/pages/field.module.scss";
import utilsStyles from "@/styles/base/utils.module.scss";

const Trees = () => {
  const [spotifyData, setSpotifyData] = useState(null);

  const init = () => {
    // se tiver dados no state (talvez) continua
    // se não tiver token apresenta tela de erro
    // se tiver token expirado e refresh token, busca novo token
    // pega os dados (getSpotifyData)
  };

  return (
    <Layout isHome={false}>
      <Head>
        <title>trees | treefy</title>
      </Head>
      <div className={styles.container}>
        <section className={utilsStyles.container}>
          <h1 className={styles.title}>your treefy Trees :)</h1>
          <p>pipipi</p>
        </section>
      </div>
    </Layout>
  );
};

export default Trees;
