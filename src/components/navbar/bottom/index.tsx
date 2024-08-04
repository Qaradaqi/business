import styles from './index.module.css';
import MenuItems from './menuItems';
import MenuActions from './menuActions';

const BottomMenu = () => {
  return (
    <div className='container'>
      <div className={`${styles.bottomNav} flex align-center justify-between`}>
        <MenuItems />
        <MenuActions />
      </div>
    </div>
  );
};

export default BottomMenu;