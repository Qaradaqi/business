import { StrategyType } from '@/types/types';
import styles from './index.module.css';
import Link from 'next/link';


interface Props {
  item: StrategyType;
}

const StrategyCard: React.FC<Props> = ({ item }) => {
  return (
    <div>
      <ul className={`${styles.content} flex flex-column align-start gap-20`}>
        <li className={`${styles.icon} flex align-center justify-center`}>{item.icon}</li>
        <li className={styles.title}>
          <span>{item.title}</span>
        </li>
        <li className={styles.body}>{item.body.substring(0, 150)}...</li>
        <li className={`${styles.link} flex align-center justify-start`}>
          <Link href={item.href} className={`${styles.linkinner} flex align-center justify-center gap-5`}>
            <span>ادامه مطلب</span>
            <i className='fa-solid fa-arrow-left'></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default StrategyCard;