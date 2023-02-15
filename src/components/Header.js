import { useEffect, useState } from 'react';
import Link from 'next/link';
import { canvas, helpers, hooks } from '@/utils';
import styles from '@/styles/components/Header.module.scss';
import utilsStyles from '@/styles/base/utils.module.scss';
const { If } = helpers;

const Header = ({ isHome = true }) => {
  const [actualPath, setActualPath] = useState('/');
  const isMobile = hooks.useMediaQuery('mobile');

  const routes = [
    { path: '/', text: 'home' },
    { path: '/privacy', text: 'privacy' },
  ];

  useEffect(() => {
    setTimeout(() => {
      const canvasElement = document.querySelector('#header-canvas');
      canvas.drawTree(canvasElement);
    }, 300);
  }, [isMobile]);

  useEffect(() => {
    setActualPath(document.location.pathname);
  }, []);

  return (
    <header className={`${styles.header} ${!isHome ? styles['header--notHome'] : ''}`}>
      <div className={styles.grass} />
      <div className={`${utilsStyles.container} ${styles.container}`}>
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
