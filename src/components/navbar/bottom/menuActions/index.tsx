import styles from './index.module.css';

interface Item {
  icon: React.JSX.Element | string;
}

const items: Item[] = [
  {
    icon: 'fa-solid fa-magnifying-glass',
  },
  {
    icon: <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="14" width="10" height="2" fill="#1C2539"></rect>
      <rect y="7" width="20" height="2" fill="#1C2539"></rect>
      <rect width="10" height="2" fill="#1C2539"></rect>
    </svg>
  },
];

const MenuActions = () => {
  return (
    <ul className={`${styles.items} flex align-center justify-end gap-15`}>
      {items.map((item, idx) => (
        <li key={idx} className={`${styles.item} flex align-center justify-center`}>
          {(typeof item.icon === 'string') ? <i className={item.icon}></i> : item.icon}
        </li>
      ))}
    </ul>
  );
};

export default MenuActions;