import Image from 'next/image';
import styles from './index.module.css';


const FooterContactBox = () => {
  return (
    <div className={`${styles.contact} flex align-center justify-evenly gap-15`}>
      <div className={`${styles.logoBox} flex flex-column align-center gap-5`}>
        <div className={`${styles.logo} flex align-center justify-center`}>
          <Image src={'/asset/image/logo.png'} alt='شرکت توسعه صنعت آینده آرشید' width={100} height={100} style={{ width: '100%', height: '100%' }} />
        </div>
        <h3 className={`${styles.companyName}`}>شرکت توسعه صنعت آینده آرشید</h3>
      </div>
      <ul className={`${styles.contactItems} flex align-center justify-around gap-50`}>
        <li className={`${styles.contactItem} flex align-center justify-center gap-15`}>
          <div className={`${styles.contactItemIcon} flex align-center justify-center`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none"><rect x="0.00390625" y="0.606445" width="50" height="50" rx="10" fill="#EEAD16"></rect><path d="M31.8675 26.3705L28.8493 22.6931C28.5414 22.2971 28.3874 22.0991 28.3067 21.877C28.2352 21.6805 28.2057 21.4713 28.2199 21.2627C28.236 21.027 28.3291 20.7941 28.5154 20.3283L29.2261 18.5515C29.5019 17.8622 29.6397 17.5176 29.8776 17.2917C30.0871 17.0926 30.3497 16.9583 30.6338 16.905C30.9562 16.8444 31.3163 16.9345 32.0366 17.1145L34.0039 17.6064C34.0039 27.6064 27.0042 34.6064 17.0039 34.6064L16.5123 32.6388C16.3322 31.9186 16.2422 31.5585 16.3027 31.2361C16.3561 30.952 16.4903 30.6894 16.6894 30.4798C16.9153 30.242 17.26 30.1041 17.9493 29.8284L19.5348 29.1942C20.0662 28.9816 20.3319 28.8754 20.5968 28.8672C20.831 28.86 21.0635 28.9077 21.2759 29.0066C21.5162 29.1184 21.7185 29.3208 22.1232 29.7255L25.1765 32.7798M24.0042 20.6064C23.0274 20.797 22.1298 21.2747 21.4261 21.9784C20.7224 22.6821 20.2447 23.5797 20.0542 24.5564M24.0042 16.6064C21.9749 16.8319 20.0826 17.7406 18.6379 19.1835C17.1933 20.6263 16.2822 22.5175 16.0542 24.5464" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
          <div className={`${styles.contactItemInfo} flex flex-column align-start gap-10`}>
            <h2 className={`${styles.contactItemTitle}`}>شماره های تماس:</h2>
            <p className={`${styles.contactItemBody}`}>09104058504 - 02122445566</p>
          </div>
        </li>
        <li className={`${styles.contactItem} flex align-center justify-center gap-15`}>
          <div className={`${styles.contactItemIcon} flex align-center justify-center`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none"><rect x="0.12793" y="0.606445" width="49.8684" height="50" rx="10" fill="#EEAD16"></rect><path d="M25.0623 20.6064V25.6064H22.0702M34.0386 25.6064C34.0386 30.577 30.0197 34.6064 25.0623 34.6064C20.1048 34.6064 16.0859 30.577 16.0859 25.6064C16.0859 20.6359 20.1048 16.6064 25.0623 16.6064C30.0197 16.6064 34.0386 20.6359 34.0386 25.6064Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
          <div className={`${styles.contactItemInfo} flex flex-column align-start gap-10`}>
            <h2 className={`${styles.contactItemTitle}`}>آدرس:</h2>
            <p className={`${styles.contactItemBody}`}>تهران، خیابان ولیعصر، پلاک 120</p>
          </div>
        </li>
        <li className={`${styles.contactItem} flex align-center justify-center gap-15`}>
          <div className={`${styles.contactItemIcon} flex align-center justify-center`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none"><rect x="0.12793" y="0.606445" width="49.8684" height="50" rx="10" fill="#EEAD16"></rect><path d="M25.0623 20.6064V25.6064H22.0702M34.0386 25.6064C34.0386 30.577 30.0197 34.6064 25.0623 34.6064C20.1048 34.6064 16.0859 30.577 16.0859 25.6064C16.0859 20.6359 20.1048 16.6064 25.0623 16.6064C30.0197 16.6064 34.0386 20.6359 34.0386 25.6064Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
          <div className={`${styles.contactItemInfo} flex flex-column align-start gap-10`}>
            <h2 className={`${styles.contactItemTitle}`}>ساعات کاری:</h2>
            <p className={`${styles.contactItemBody}`}>8 الی 12 و 13 الی 19</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FooterContactBox;