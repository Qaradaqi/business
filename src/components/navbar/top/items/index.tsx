import { TopMenuItemType } from '@/types/types';
import styles from './index.module.css'

const items: TopMenuItemType[] = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 50 50" fill="none"><rect x="0.5" y="0.5" width="49" height="49" rx="9.5" stroke="#FCB900"></rect><path d="M27.3917 18.0002C28.5312 18.2225 29.5785 18.7798 30.3995 19.6008C31.2204 20.4217 31.7777 21.469 32.0001 22.6085M27.3917 13.3335C29.7592 13.5965 31.9669 14.6567 33.6523 16.34C35.3378 18.0233 36.4007 20.2297 36.6667 22.5968M32.5833 35.5002C22.5962 35.5002 14.5 27.404 14.5 17.4168C14.5 16.9662 14.5165 16.5195 14.5489 16.0772C14.586 15.5696 14.6046 15.3157 14.7377 15.0847C14.8478 14.8933 15.0431 14.7119 15.242 14.616C15.4821 14.5002 15.7622 14.5002 16.3223 14.5002H19.6092C20.0803 14.5002 20.3158 14.5002 20.5177 14.5777C20.696 14.6462 20.8548 14.7574 20.9802 14.9016C21.122 15.0649 21.2025 15.2862 21.3635 15.7289L22.724 19.4702C22.9113 19.9853 23.0049 20.2428 22.989 20.4871C22.975 20.7026 22.9015 20.9099 22.7766 21.0861C22.635 21.2858 22.4 21.4268 21.9301 21.7088L20.3333 22.6668C21.7355 25.7572 24.2418 28.2667 27.3333 29.6668L28.2914 28.0701C28.5733 27.6001 28.7143 27.3652 28.9141 27.2236C29.0902 27.0987 29.2976 27.0252 29.513 27.0112C29.7574 26.9953 30.0149 27.0889 30.5299 27.2762L34.2713 28.6367C34.7139 28.7977 34.9353 28.8781 35.0986 29.02C35.2428 29.1453 35.354 29.3041 35.4225 29.4825C35.5 29.6844 35.5 29.9199 35.5 30.391V33.6778C35.5 34.238 35.5 34.518 35.3842 34.7582C35.2883 34.9571 35.1068 35.1523 34.9155 35.2625C34.6844 35.3955 34.4306 35.4141 33.923 35.4513C33.4807 35.4837 33.0339 35.5002 32.5833 35.5002Z" stroke="#FCB900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
    title: 'شماره تماس',
    content: '09104058504',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 50 50" fill="none"><rect x="0.5" y="0.5" width="49" height="49" rx="9.5" stroke="#FCB900"></rect><path d="M24.9997 35.5C29.083 31.3 33.1663 27.5392 33.1663 22.9C33.1663 18.2608 29.51 14.5 24.9997 14.5C20.4893 14.5 16.833 18.2608 16.833 22.9C16.833 27.5392 20.9163 31.3 24.9997 35.5Z" stroke="#FCB900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24.9997 25C26.2883 25 27.333 23.9553 27.333 22.6667C27.333 21.378 26.2883 20.3333 24.9997 20.3333C23.711 20.3333 22.6663 21.378 22.6663 22.6667C22.6663 23.9553 23.711 25 24.9997 25Z" stroke="#FCB900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
    title: 'آدرس دفتر',
    content: 'تهران، خیابان ولیعصر، پلاک 120',
  },
];

const TopMenuItem = () => {
  return (
    <div className='flex align-center justify-start gap-15'>
      {items.map(item => (
        <div key={item.title} className='flex align-center gap-10'>
          <span className={`${styles.icon} flex align-center justify-center`}>{item.icon}</span>
          <div className='flex flex-column align-start gap-5'>
            <span className={styles.title}>{item.title}</span>
            <span className={styles.content}>{item.content}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopMenuItem;