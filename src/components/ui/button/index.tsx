import { ButtonType } from '@/types/types';
import styles from './index.module.css';
import Link from 'next/link';

function typeSelection(type: string) {
  if (type === 'default') {
    return styles.default;
  } else if (type === 'primary') {
    return styles.primary;
  } else if (type === 'dark') {
    return styles.dark;
  } else if (type === 'ghost') {
    return styles.ghost;
  } else if (type === 'secondary') {
    return styles.secondary;
  } else {
    return styles.primary;
  }
}
function sizeSelection(size: string) {
  if (size === 'small') {
    return styles.small;
  } else if (size === 'middle') {
    return styles.middle;
  } else if (size === 'large') {
    return styles.large;
  } else {
    return styles.middle;
  }
}

const Button: React.FC<ButtonType> = ({ type, href, children, leftIcon, rightICon, size }) => {

  return (
    <div className={'flex align-center justify-center'}>
      <Link href={href} className={`${typeSelection(type)} ${sizeSelection(size)} flex align-center justify-center gap-5`}>
        {rightICon && <i className={rightICon}></i>}
        <span>{children}</span>
        {leftIcon && <i className={leftIcon}></i>}
      </Link>
    </div>
  );
};

export default Button;