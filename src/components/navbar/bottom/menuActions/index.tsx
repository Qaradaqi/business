'use client';

import { useSearchBoxContext } from '@/context/searchBoxContext';
import styles from './index.module.css';
import { useSidebarContact } from '@/context/sideInfoContext';

interface Item {
  icon: React.JSX.Element | string;
}

const MenuActions = () => {
  const { toggleSidebarContact} = useSidebarContact()
  const {toggleSearchBox} = useSearchBoxContext()
  return (
    <>
      <ul className={`${styles.items} flex align-center justify-end gap-15`}>
        <li className={`${styles.item} flex align-center justify-center`}
        onClick={toggleSearchBox}>
          <i className='fa-solid fa-magnifying-glass'></i>
        </li>
        <li className={`${styles.item} flex align-center justify-center`} onClick={toggleSidebarContact}>
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="14" width="10" height="2" fill="#1C2539"></rect>
            <rect y="7" width="20" height="2" fill="#1C2539"></rect>
            <rect width="10" height="2" fill="#1C2539"></rect>
          </svg>
        </li>
      </ul>
    </>
  );
};

export default MenuActions;