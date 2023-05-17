import { useEffect, useState } from "react";
import Head from "next/head";
import { data } from "@/utils";
import { http } from "@/services";
import Layout from "@/components/Layout";
import styles from "@/styles/pages/trees.module.scss";
import utilsStyles from "@/styles/base/utils.module.scss";
import { storage, time, helpers } from "@/utils";

const { If } = helpers
const SPOTIFY_TOKEN = process.env.NEXT_PUBLIC_TOKEN_KEY;

const Trees = () => {
  const [spotifyData, setSpotifyData] = useState([]);
  const [error, setError] = useState({})

  const isLogged = () => {
    const tokenStr = storage.getItem(SPOTIFY_TOKEN)
    if (!tokenStr) return false
    const token = JSON.parse(tokenStr)
    if (typeof token !== 'object') return false
    const { accessToken, expiration, refreshToken } = token
    if (!expiration) return false
    if (!accessToken && !refreshToken) return false
    if (time.isExpired(expiration) && !refreshToken) return false
    return true
  }

  const init = async () => {
    // se não tiver token apresenta tela de erro
    if (!isLogged) {
      console.log("not logged")
      setError({ cod: 'notLogged', msg: 'You need to login with your spotify account'})
      return
    }

    console.log("opaa")
    // pega os dados (getSpotifyData)
    const rawData = await http.getSpotifyData()
    const sortedData = data.prepareSpotifyData(rawData.items)
    console.log(sortedData)
    setSpotifyData(sortedData)
    
  };

  useEffect(() => {
    init()
  }, [])

  return (
    <Layout isHome={false}>
      <Head>
        <title>trees | treefy</title>
      </Head>
      <div className={styles.container}>
        <section className={utilsStyles.container}>
          <h1 className={styles.title}>your treefy Trees :)</h1>
          <If condition={spotifyData.length}>
            {
              spotifyData.map((data) => (
                <a key={data.id} href={data.url} style={{ margin: '4px 0', backgroundColor: '#dadada', display: "block", padding: '4px', width: `${200 + data.count * 100}px`}}>
                  {data.name} - {data.count}
                </a>))
            }
          </If>
        </section>
      </div>
    </Layout>
  );
};

export default Trees;
