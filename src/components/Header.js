import { useEffect, useState } from 'react';
import Link from 'next/link';
import { canvas, helpers, hooks, storage } from '@/utils';
import styles from '@/styles/components/Header.module.scss';
import utilsStyles from '@/styles/base/utils.module.scss';

const { If } = helpers;
const SPOTIFY_TOKEN = process.env.NEXT_PUBLIC_TOKEN_KEY;

const Header = ({ isHome = true }) => {
  const [routes, setRoutes] = useState([]);
  const [actualPath, setActualPath] = useState('/');
  const isMobile = hooks.useMediaQuery('mobile');

  const mountRoutes = () => {
    const routesToMount = [
      { path: '/', text: 'home' },
      { path: '/privacy', text: 'privacy' },
    ];

    if (!!storage.getItem(SPOTIFY_TOKEN)) {
      routesToMount.push({
        path: '/field',
        text: 'your treefy field',
      });
    }

    setRoutes(routesToMount);
  };

  useEffect(() => {
    setTimeout(() => {
      const canvasElement = document.querySelector('#header-canvas');
      canvas.drawTree(canvasElement);
    }, 300);
  }, [isMobile]);

  useEffect(() => {
    mountRoutes();
    setActualPath(document.location.pathname);
  }, []);

  return (
    <header className={`${styles.header} ${!isHome ? styles['header--notHome'] : ''}`}>
      <div className={styles.grass} />
      <div className={`${utilsStyles.container} ${isHome ? styles.container : styles['container--notHome']}`}>
        <If
          condition={isHome}
          renderIf={
            <>
              <h1 className={styles.title}>treefy</h1>
              <canvas
                id='header-canvas'
                width={isMobile ? '72' : '144'}
                height={isMobile ? '82' : '162'}
                className={styles.canvas}
              />
            </>
          }
          renderElse={
            <>
              <Link href='/' className={styles['title--notHome']}>
                treefy
              </Link>
              <ul className={styles.linksContainer}>
                {routes.map(({ path, text }) => {
                  return (
                    <Link key={text} href={path} className={actualPath === path ? styles.linkSelected : ''}>
                      {text}
                    </Link>
                  );
                })}
              </ul>
            </>
          }
        />
      </div>
    </header>
  );
};

export default Header;
