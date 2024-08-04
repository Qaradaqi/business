import TopMenu from './top';
import BottomMenu from './bottom';
import styles from './index.module.css'

const Navbar = () => {
  return (
    <div className={`${styles.nav} flex flex-column`}>
      <TopMenu/>
      <BottomMenu/>
    </div>
  );
};

export default Navbar;