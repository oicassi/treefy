import Link from 'next/link';
import { time } from '@/utils';
import styles from '@/styles/components/Footer.module.scss';
import utilsStyles from '@/styles/base/utils.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${utilsStyles.container} ${styles.innerContainer}`}>
        <span className={styles.text}>
          created by{' '}
          <a href='https://twitter.com/cassianovidal' target='_blank' rel='noreferrer'>
            cassiano kruchelski
          </a>{' '}
          &copy; {time.getActualYear()} | <Link href='/privacy'>privacy</Link>
        </span>
        <br />
        <span className={styles.text}>
          <a href='https://github.com/kruchelski' target='_blank' rel='noreferrer'>
            github
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
