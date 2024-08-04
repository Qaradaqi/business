import { CardType } from '@/types/types';
import Card from '../../ui/card';
import styles from './index.module.css';

interface Props {
  items: CardType[];
}

const CardRender: React.FC<Props> = ({ items }) => {
  return (
    <div className='container'>
      <div className={`${styles.items} flex justify-between gap-20`}>
        {items.map((item) => (
          <div className={styles.item}>
            <Card title={item.title} body={item.body} href={item.href} imageUrl={item.imageUrl} key={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardRender;