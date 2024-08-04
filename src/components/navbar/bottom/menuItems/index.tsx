import { BottomMenuItemType } from '@/types/types';
import Link from 'next/link';
import styles from './index.module.css';

const Items: BottomMenuItemType[] = [
  {
    title: 'صفحه اصلی',
    href: '/',
  },
  {
    title: 'فروشگاه',
    href: '/shop',
  },
  {
    title: 'خدمات',
    href: '/service',
  },
  {
    title: 'وبلاگ',
    href: '/blog',
  },
  {
    title: 'درباره ما',
    href: '/about',
  },
  {
    title: 'تماس با ما',
    href: '/contact',
  },
];

const MenuItems = () => {
  return (
    <ul className='flex align-center justify-start'>
      {Items.map(item => (
        <li key={item.title} className={styles.item}>
          <Link href={item.href} className={`${styles.link} flex align-center justify-center gap-5`}>
            {item.icon && <i className={item.icon}></i>}
            <span className={styles.title}>{item.title}</span>
          </Link>
        </li>
      )
      )}
    </ul>
  );
};

export default MenuItems;