import Image from 'next/image';
import styles from './top.module.css';
import Link from 'next/link';
import TopMenuItem from './items';

const TopMenu = () => {
  return (
    <div className={`${styles.top}`}>
      <div className='container'>
        <div className='ptb-10 flex align-center justify-between'>
          <Link
            className='flex align-center justify-center gap-10'
            href={'/'}
            title='شرکت توسعه صنعت  آینده آرشید'
          >
            <Image className={`${styles.img}`} src={'/asset/image/logo.png'} alt='آرشید' width={60} height={60} />
            <p className={styles.title}>شرکت توسعه صنعت  آینده آرشید</p>
          </Link>
          <TopMenuItem />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;