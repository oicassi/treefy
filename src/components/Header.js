import { useEffect } from 'react';
import { hooks } from '@/utils';
import { canvas, helpers } from '@/utils';
import styles from '@/styles/components/Header.module.scss';
import utilsStyles from '@/styles/base/utils.module.scss';
import Link from 'next/link';
const { If } = helpers;

const Header = ({ isHome = true }) => {
  const isMobile = hooks.useMediaQuery('mobile');

  useEffect(() => {
    setTimeout(() => {
      const canvasElement = document.querySelector('#header-canvas');
      canvas.drawTree(canvasElement);
    }, 300);
  }, [isMobile]);

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
            <Link href='/' className={styles['title--notHome']}>
              treefy
            </Link>
          }
        />
      </div>
    </header>
  );
};

export default Header;
