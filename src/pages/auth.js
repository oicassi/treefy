import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as querystring from 'querystring'
import * as CryptoJS from 'crypto-js';
import Layout from '@/components/Layout';
import { storage } from '@/utils';
const { getItem, setItem } = storage

const SECRET_KEY = process.env.NEXT_PUBLIC_APP_SECRET;
const SPOTIFY_TOKEN = process.env.NEXT_PUBLIC_TOKEN_KEY;

const Auth = () => {
  const router = useRouter()

  const extractDataFromUrl = () => {
    if (getItem(SPOTIFY_TOKEN)) return
    const parsedQuery = querystring.parse(
      location.search.replace('?', '')
    )
    const { data } = parsedQuery
    const queryObject = querystring.parse(CryptoJS.AES.decrypt(data, SECRET_KEY).toString(CryptoJS.enc.Utf8))
    setItem(SPOTIFY_TOKEN, queryObject)
  }

  useEffect(() => {
    extractDataFromUrl()
    router.replace('/trees')
  }, [])

  return (
    <Layout isHome={false}>
      <Head>
        <title>auth | treefy</title>
      </Head>
     <></>
    </Layout>
  );
};

export default Auth;
