import Button from '@/components/ui/button';
import styles from './index.module.css';


const Consult = () => {
  return (
    <ul className={`${styles.consultItems} flex align-strart justify-between gap-15`}>
      <li className={`${styles.consultRightItem}`}>
        <div className={`${styles.rightItemIcon} flex align-center justify-start`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none"><g clip-path="url(#clip0_1_7029)"><path d="M19.0672 34.667H12.0636C11.2321 34.6661 10.4082 34.832 9.64138 35.1549C5.37028 36.9462 2.59383 41.1284 2.6006 45.7601V52.0002H49.4003V45.7601C49.4063 41.1293 46.6294 36.9483 42.3587 35.1575C41.5928 34.8337 40.7693 34.6666 39.9373 34.667H31.2004V31.9223C34.1068 30.4111 36.0475 27.528 36.353 24.267H36.4004C37.7233 24.2696 38.8946 23.4135 39.2937 22.1524C39.6923 20.8914 39.2268 19.5169 38.1435 18.7586C39.1747 18.2707 39.8417 17.2419 39.8666 16.1015C39.8912 14.961 39.2695 13.9043 38.2603 13.372C37.8176 9.19314 35.0412 5.6279 31.0985 4.17429C30.6173 1.75923 28.5048 0.0149061 26.0428 9.50017e-05C23.5803 -0.0147161 21.4467 1.7038 20.9368 4.11251C16.9069 5.56484 14.0589 9.18933 13.6014 13.4486C12.6865 13.9949 12.1288 14.9839 12.1343 16.0494C12.1402 17.115 12.7085 18.098 13.629 18.6346C12.45 19.3256 11.8812 20.7217 12.2414 22.0399C12.6011 23.3581 13.8008 24.2713 15.1672 24.267H15.6483C15.9539 27.528 17.8946 30.4111 20.8005 31.9223V34.667H19.0672ZM4.33392 50.2669V45.7601C4.32927 41.8271 6.6872 38.2762 10.3142 36.7554C10.8677 36.5213 11.4627 36.4007 12.0636 36.4003H12.1339V44.8668L10.2211 50.2669H4.33392ZM39.9373 36.4003C40.5382 36.3995 41.1336 36.5197 41.6871 36.7528C45.315 38.2741 47.6734 41.8263 47.667 45.7601V50.2669H41.7798L39.8671 44.8668V36.4003H39.9373ZM38.1337 36.4003V45.1638L39.9407 50.2669H12.0602L13.8672 45.1638V36.4003H17.3338V45.9336H33.8004V36.4003H38.1337ZM32.0671 36.4003V44.2003H19.0672V36.4003H20.8005C20.8005 39.272 23.1288 41.6003 26.0005 41.6003C28.8726 41.6003 31.2004 39.272 31.2004 36.4003H32.0671ZM15.1672 17.3338C14.4495 17.3338 13.8672 16.7515 13.8672 16.0338C13.8672 15.3156 14.4495 14.7338 15.1672 14.7338H36.8337C37.5519 14.7338 38.1337 15.3156 38.1337 16.0338C38.1337 16.7515 37.5519 17.3338 36.8337 17.3338H15.1672ZM24.2671 10.097C25.3873 10.5016 26.6136 10.5016 27.7338 10.097V13.0004H24.2671V10.097ZM36.4004 22.5337V19.9337C37.1185 19.9337 37.7004 20.5156 37.7004 21.2337C37.7004 21.9514 37.1185 22.5337 36.4004 22.5337ZM31.1234 6.05826C33.9494 7.33837 35.9523 9.94089 36.4664 13.0004H29.4671V9.06577C30.3444 8.27993 30.9283 7.21946 31.1234 6.05826ZM22.5512 4.85349C22.7391 2.98221 24.3848 1.60223 26.2603 1.74315C28.1358 1.88407 29.5568 3.49467 29.4629 5.37314C29.3689 7.25162 27.7943 8.71242 25.9141 8.66544C24.034 8.61847 22.5342 7.08108 22.5338 5.20049C22.5338 5.08327 22.5402 4.96647 22.5512 4.85349ZM20.869 6.00283C21.0544 7.18518 21.6426 8.26724 22.5338 9.06577V13.0004H15.4067C15.9535 9.90577 17.9999 7.2842 20.869 6.00283ZM13.8672 21.2337C13.8672 20.5156 14.4495 19.9337 15.1672 19.9337H15.6005V22.5337H15.1672C14.4495 22.5337 13.8672 21.9514 13.8672 21.2337ZM17.3338 23.2997V19.0671H34.6671V23.2997C34.7416 27.5797 31.3392 31.1132 27.0597 31.2003H24.9417C20.6621 31.1132 17.2594 27.5797 17.3338 23.2997ZM24.9417 32.9337H27.0597C27.8739 32.9307 28.6834 32.8173 29.4671 32.5972V36.4003C29.4671 38.3148 27.9153 39.867 26.0005 39.867C24.086 39.867 22.5338 38.3148 22.5338 36.4003V32.5972C23.3175 32.8173 24.1275 32.9307 24.9417 32.9337Z" fill="white"></path><path d="M23.4002 20.8002C23.4002 21.7574 22.6246 22.5335 21.6669 22.5335C20.7097 22.5335 19.9336 21.7574 19.9336 20.8002C19.9336 19.843 20.7097 19.0669 21.6669 19.0669C22.6246 19.0669 23.4002 19.843 23.4002 20.8002Z" fill="white"></path><path d="M32.0663 20.8002C32.0663 21.7574 31.2906 22.5335 30.3329 22.5335C29.3757 22.5335 28.5996 21.7574 28.5996 20.8002C28.5996 19.843 29.3757 19.0669 30.3329 19.0669C31.2906 19.0669 32.0663 19.843 32.0663 20.8002Z" fill="white"></path><path d="M25.7267 24.3118L26.2747 25.955L30.2047 24.6465L26.6132 21.0542L25.3877 22.2797L26.9966 23.8882L25.7267 24.3118Z" fill="white"></path><path d="M27.5224 29.4406L27.9451 27.7593L27.5118 27.6501C25.7696 27.2159 24.2525 26.147 23.2572 24.6523L21.8154 25.6142C23.049 27.4673 24.93 28.7927 27.0899 29.3314L27.5224 29.4406Z" fill="white"></path></g><defs><clipPath id="clip0_1_7029"><rect width="52" height="52" fill="white"></rect></clipPath></defs></svg>
        </div>
        <h2 className={styles.rightItemTitle}>به مشاوره نیاز دارید؟</h2>
        <p className={styles.rightItemBody}>به مشاوره نیاز دارید؟
          برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
        <div className={`${styles.rightItemAction} flex aling-center justify-between`}>
          <Button type='ghost' size='large' leftIcon='fa-solid fa-arrow-left' href='/'> مشاوره</Button>
          <div className={`${styles.rightItemContact} flex align-center justify-end gap-10`}>
            <div className={`${styles.contactInfo} flex flex-column align-end gap-5`}>
              <h3 className={styles.tel}>021-63456789</h3>
              <p className={styles.hours}>پاسخگو در ساعات 9 الی 16</p>
            </div>
            <div className={`${styles.contactIcon} flex`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"><rect x="0.5" y="0.5" width="49" height="49" rx="9.5" stroke="white"></rect><path d="M27.3917 18.0002C28.5312 18.2225 29.5785 18.7798 30.3995 19.6008C31.2204 20.4217 31.7777 21.469 32.0001 22.6085M27.3917 13.3335C29.7592 13.5965 31.9669 14.6567 33.6523 16.34C35.3378 18.0233 36.4007 20.2297 36.6667 22.5968M32.5833 35.5002C22.5962 35.5002 14.5 27.404 14.5 17.4168C14.5 16.9662 14.5165 16.5195 14.5489 16.0772C14.586 15.5696 14.6046 15.3157 14.7377 15.0847C14.8478 14.8933 15.0431 14.7119 15.242 14.616C15.4821 14.5002 15.7622 14.5002 16.3223 14.5002H19.6092C20.0803 14.5002 20.3158 14.5002 20.5177 14.5777C20.696 14.6462 20.8548 14.7574 20.9802 14.9016C21.122 15.0649 21.2025 15.2862 21.3635 15.7289L22.724 19.4702C22.9113 19.9853 23.0049 20.2428 22.989 20.4871C22.975 20.7026 22.9015 20.9099 22.7766 21.0861C22.635 21.2858 22.4 21.4268 21.9301 21.7088L20.3333 22.6668C21.7355 25.7572 24.2418 28.2667 27.3333 29.6668L28.2914 28.0701C28.5733 27.6001 28.7143 27.3652 28.9141 27.2236C29.0902 27.0987 29.2976 27.0252 29.513 27.0112C29.7574 26.9953 30.0149 27.0889 30.5299 27.2762L34.2713 28.6367C34.7139 28.7977 34.9353 28.8781 35.0986 29.02C35.2428 29.1453 35.354 29.3041 35.4225 29.4825C35.5 29.6844 35.5 29.9199 35.5 30.391V33.6778C35.5 34.238 35.5 34.518 35.3842 34.7582C35.2883 34.9571 35.1068 35.1523 34.9155 35.2625C34.6844 35.3955 34.4306 35.4141 33.923 35.4513C33.4807 35.4837 33.0339 35.5002 32.5833 35.5002Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
          </div>
        </div>
      </li>
      <li className={`${styles.consultLeftItem}`}>
        <div className={`${styles.leftItemIcon} flex align-center justify-start`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="52" viewBox="0 0 51 52" fill="none"><g clip-path="url(#clip0_1_7048)"><path d="M18.6997 34.667H11.8309C11.0153 34.6661 10.2072 34.832 9.4552 35.1549C5.26623 36.9462 2.54318 41.1284 2.54982 45.7601V52.0002H48.4496V45.7601C48.4554 41.1293 45.7319 36.9483 41.5434 35.1575C40.7921 34.8337 39.9845 34.6666 39.1685 34.667H30.5997V31.9223C33.4501 30.4111 35.3535 27.528 35.6531 24.267H35.6996C36.997 24.2696 38.1459 23.4135 38.5372 22.1524C38.9282 20.8914 38.4717 19.5169 37.4092 18.7586C38.4206 18.2707 39.0747 17.2419 39.0992 16.1015C39.1233 14.961 38.5136 13.9043 37.5237 13.372C37.0896 9.19314 34.3665 5.6279 30.4996 4.17429C30.0277 1.75923 27.9559 0.0149061 25.5412 9.50017e-05C23.1261 -0.0147161 21.0335 1.7038 20.5334 4.11251C16.581 5.56484 13.7878 9.18933 13.3391 13.4486C12.4418 13.9949 11.8948 14.9839 11.9002 16.0494C11.906 17.115 12.4634 18.098 13.3661 18.6346C12.2098 19.3256 11.652 20.7217 12.0052 22.0399C12.358 23.3581 13.5346 24.2713 14.8747 24.267H15.3466C15.6463 27.528 17.5497 30.4111 20.3997 31.9223V34.667H18.6997ZM4.24981 50.2669V45.7601C4.24524 41.8271 6.55783 38.2762 10.1151 36.7554C10.658 36.5213 11.2415 36.4007 11.8309 36.4003H11.8998V44.8668L10.0238 50.2669H4.24981ZM39.1685 36.4003C39.7579 36.3995 40.3418 36.5197 40.8847 36.7528C44.4428 38.2741 46.7558 41.8263 46.7496 45.7601V50.2669H40.9756L39.0996 44.8668V36.4003H39.1685ZM37.3996 36.4003V45.1638L39.1718 50.2669H11.8275L13.5998 45.1638V36.4003H16.9997V45.9336H33.1496V36.4003H37.3996ZM31.4497 36.4003V44.2003H18.6997V36.4003H20.3997C20.3997 39.272 22.6832 41.6003 25.4997 41.6003C28.3165 41.6003 30.5997 39.272 30.5997 36.4003H31.4497ZM14.8747 17.3338C14.1708 17.3338 13.5998 16.7515 13.5998 16.0338C13.5998 15.3156 14.1708 14.7338 14.8747 14.7338H36.1246C36.8289 14.7338 37.3996 15.3156 37.3996 16.0338C37.3996 16.7515 36.8289 17.3338 36.1246 17.3338H14.8747ZM23.7997 10.097C24.8983 10.5016 26.1011 10.5016 27.1997 10.097V13.0004H23.7997V10.097ZM35.6996 22.5337V19.9337C36.4039 19.9337 36.9746 20.5156 36.9746 21.2337C36.9746 21.9514 36.4039 22.5337 35.6996 22.5337ZM30.5241 6.05826C33.2957 7.33837 35.2601 9.94089 35.7644 13.0004H28.8997V9.06577C29.76 8.27993 30.3328 7.21946 30.5241 6.05826ZM22.1167 4.85349C22.301 2.98221 23.9151 1.60223 25.7545 1.74315C27.594 1.88407 28.9877 3.49467 28.8955 5.37314C28.8034 7.25162 27.259 8.71242 25.415 8.66544C23.571 8.61847 22.1001 7.08108 22.0997 5.20049C22.0997 5.08327 22.1059 4.96647 22.1167 4.85349ZM20.467 6.00283C20.6487 7.18518 21.2256 8.26724 22.0997 9.06577V13.0004H15.1097C15.6459 9.90577 17.653 7.2842 20.467 6.00283ZM13.5998 21.2337C13.5998 20.5156 14.1708 19.9337 14.8747 19.9337H15.2997V22.5337H14.8747C14.1708 22.5337 13.5998 21.9514 13.5998 21.2337ZM16.9997 23.2997V19.0671H33.9996V23.2997C34.0727 27.5797 30.7358 31.1132 26.5385 31.2003H24.4613C20.264 31.1132 16.9267 27.5797 16.9997 23.2997ZM24.4613 32.9337H26.5385C27.3371 32.9307 28.131 32.8173 28.8997 32.5972V36.4003C28.8997 38.3148 27.3777 39.867 25.4997 39.867C23.6221 39.867 22.0997 38.3148 22.0997 36.4003V32.5972C22.8684 32.8173 23.6627 32.9307 24.4613 32.9337Z" fill="#051934"></path><path d="M22.9498 20.8002C22.9498 21.7574 22.189 22.5335 21.2498 22.5335C20.311 22.5335 19.5498 21.7574 19.5498 20.8002C19.5498 19.843 20.311 19.0669 21.2498 19.0669C22.189 19.0669 22.9498 19.843 22.9498 20.8002Z" fill="#051934"></path><path d="M31.4498 20.8002C31.4498 21.7574 30.689 22.5335 29.7498 22.5335C28.811 22.5335 28.0498 21.7574 28.0498 20.8002C28.0498 19.843 28.811 19.0669 29.7498 19.0669C30.689 19.0669 31.4498 19.843 31.4498 20.8002Z" fill="#051934"></path><path d="M25.2319 24.3118L25.7693 25.955L29.6238 24.6465L26.1014 21.0542L24.8994 22.2797L26.4774 23.8882L25.2319 24.3118Z" fill="#051934"></path><path d="M26.9927 29.4406L27.4073 27.7593L26.9823 27.6501C25.2736 27.2159 23.7857 26.147 22.8095 24.6523L21.3955 25.6142C22.6053 27.4673 24.4502 28.7927 26.5685 29.3314L26.9927 29.4406Z" fill="#051934"></path></g><defs><clipPath id="clip0_1_7048"><rect width="51" height="52" fill="white"></rect></clipPath></defs></svg>
        </div>
        <h2 className={styles.leftItemTitle}>اعتبار درخشان ما، نتیجه اعتماد شماست</h2>
        <p className={styles.leftItemBody}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
        <div className={styles.leftItemCategories}>
          <div className={`${styles.leftItemCategory} flex align-center justify-start gap-10`}>
            <div className={`${styles.itemIcon} flex align-center justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5L5 9L13 1" stroke="#4C5686" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            <p className={styles.itemInfo}>تحویل پروژه طبق برنامه تعیین شده</p>
          </div>
          <div className={`${styles.leftItemCategory} flex align-center justify-start gap-10`}>
            <div className={`${styles.itemIcon} flex align-center justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5L5 9L13 1" stroke="#4C5686" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            <p className={styles.itemInfo}>استفاده از ماشین آلات به روز</p>
          </div>
          <div className={`${styles.leftItemCategory} flex align-center justify-start gap-10`}>
            <div className={`${styles.itemIcon} flex align-center justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5L5 9L13 1" stroke="#4C5686" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            <p className={styles.itemInfo}>برنامه ریزی دقیق برای هماهنگی های لازم</p>
          </div>
          <div className={`${styles.leftItemCategory} flex align-center justify-start gap-10`}>
            <div className={`${styles.itemIcon} flex align-center justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5L5 9L13 1" stroke="#4C5686" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            <p className={styles.itemInfo}>به کارگیری مدرن ترین تکنولوژی</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Consult;