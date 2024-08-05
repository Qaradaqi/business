'use client';

import { useSearchBoxContext } from '@/context/searchBoxContext';
import styles from './index.module.css';
import { useEffect, useRef } from 'react';

const SearchBox = () => {
  const { iseSearchBoxOpen, toggleSearchBox } = useSearchBoxContext();
  const refEl = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handleClickedOutside = (event: MouseEvent) => {
      if (iseSearchBoxOpen && refEl.current && !refEl.current.contains(event.target as Node)) {
        toggleSearchBox();
      }
    };
    if (iseSearchBoxOpen && inputRef.current) {
      inputRef.current.focus();
    }
    document.addEventListener('click', handleClickedOutside);
    return () => document.removeEventListener('click', handleClickedOutside);
  }, [iseSearchBoxOpen]);

  return (
    <>
      {iseSearchBoxOpen &&
        <div ref={refEl} className={`${styles.searchBox} flex flex-column align-start gap-50`}>
          <div className={`${styles.close} flex align-center justify-start`} onClick={toggleSearchBox}>
            <i className='fa-solid fa-xmark'></i>
          </div>
          <div className={`${styles.inputBox} flex align-center justify-between gap-5`}>
            <input ref={inputRef} type='text' placeholder='در حال جستجو...' className={styles.input} />
            <div className={styles.icon}>
              <i className='fa-solid fa-magnifying-glass'></i>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default SearchBox;