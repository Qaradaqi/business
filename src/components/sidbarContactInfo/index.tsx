'use client';

import { useSidebarContact } from '@/context/sideInfoContext';
import styles from './index.module.css';
import Image from 'next/image';
import { useEffect, useRef } from 'react';


const SidebarContactInfo: React.FC = () => {
  const { isSidebarOpen, toggleSidebarContact } = useSidebarContact();
  const sideRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isSidebarOpen && sideRef.current && !sideRef.current.contains(event.target as Node)) {
        toggleSidebarContact();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isSidebarOpen]);
  return (
    <>
      {isSidebarOpen &&
        <div className={styles.sidebarContactInfo}>
          <div ref={sideRef} className={`${styles.sidebarInfo} flex flex-column align-center gap-20`}>
            <div className={`${styles.closeBox} flex align-center justify-start`}>
              <div className={`${styles.close} flex align-center justify-start`} onClick={toggleSidebarContact}>
                <i className='fa-solid fa-xmark'></i>
              </div>
            </div>
            <div className={`${styles.logoBox} flex align-center justify-center`}>
              <div className={`${styles.logo} flex align-center justify-center`}>
                <Image src={'/asset/image/logo.png'} alt='شرکت توسعه صنعت آینده آرشید' width={100} height={100} style={{ width: '100%', height: '100%' }} />
              </div>
            </div>
            <h2 className={`${styles.title}`}>با ما در تماس باشید</h2>
            <ul className={`${styles.items} flex flex-column align-start gap-15`}>
              <li className={`${styles.item} flex align-center justify-start gap-10`}>
                <h3 className={styles.itemTitle}>تلفن: </h3>
                <p className={styles.itemBody}>021-66778855</p>
              </li>
              <li className={`${styles.item} flex align-center justify-start gap-10`}>
                <h3 className={styles.itemTitle}>ایمیل: </h3>
                <p className={styles.itemBody}>hqaradaqi@gmail.com</p>
              </li>
              <li className={`${styles.item} flex align-center justify-start gap-10`}>
                <h3 className={styles.itemTitle}>آدرس: </h3>
                <p className={styles.itemBody}>تهران، خیابان ولیعصر پلاک 120</p>
              </li>
            </ul>
          </div>
        </div>
      }
    </>
  );
};

export default SidebarContactInfo;