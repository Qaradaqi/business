import { CardType } from '@/types/types';
import styles from './index.module.css';
import Image from 'next/image';
import Button from '../button';

const Card: React.FC<CardType> = ({ title, imageUrl, body, href }) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.cardContent} flex flex-column align-start justify-start gap-15`}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={imageUrl} alt={title} width={650} height={100} style={{ width: "100%", height: "100%", objectFit: 'cover' }}  quality={100}/>
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardBody}>{body.substring(0, 250)}</p>
        <Button type='primary' size='small' href={href} >ادامه مطالعه</Button>
      </div>
    </div>
  );
};

export default Card;