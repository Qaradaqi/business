import styles from './index.module.css';
import { porjectSteps as items } from './data';
import { CountUpComponent } from './countUp';

const ProjectSteps = () => {
  return (
    <div className={styles.content}>
      <div className={`${styles.section} flex flex-column align-center gap-15`}>
        <h2 className={styles.stepsTitle}>مراحل دریافت پروژه</h2>
        <ul className={`${styles.steps} flex align-center justify-around gap-10`}>
          {items.map((item) => (
            <li key={item.title} className={`flex align-center justify-start gap-15`}>
              <div className='flex flex-column align-center gap-5'>
                <span className={`${styles.icon} flex align-center justify-center`}>{item.icon}</span>
                <h3 className={styles.title}>{item.title}</h3>
              </div>
              {item.arrow && <span className={styles.arrow}>{item.arrow}</span>}
            </li>
          ))}
        </ul>
      </div>
      <div className='container'>
        <div className={`${styles.gain} flex align-center justify-center`}>
          <ul className={`${styles.gainItems} flex align-start justify-between gap-30`}>
            <li className={`${styles.gainTitle} flex align-center justify-center gap-30`}>
              <span >خلاصه ای از فعالیت های ما</span>
            </li>
            <li className={`${styles.gainItem} flex align-center justify-center gap-30`}>
              <span className={`${styles.gainItemIcon} flex align-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none"><path d="M2.54013 24.5565H5.09666C5.27627 25.0646 5.48466 25.5621 5.7205 26.0466L3.90589 27.8589C3.57545 28.1897 3.57545 28.7255 3.90589 29.0563L9.89285 35.0426C10.2286 35.3608 10.7538 35.3608 11.0902 35.0426L12.9048 33.2287C13.3891 33.4655 13.8869 33.6742 14.395 33.8542V36.4113C14.395 36.8791 14.774 37.2581 15.2417 37.2581H23.7095C24.1772 37.2581 24.5563 36.8791 24.5563 36.4113V33.8542C25.0643 33.6752 25.5621 33.4672 26.0464 33.231L27.8587 35.0456C28.1895 35.376 28.7253 35.376 29.0561 35.0456L35.0424 29.0586C35.3731 28.7279 35.3731 28.192 35.0424 27.8612L33.2307 26.0466C33.4666 25.5621 33.675 25.0646 33.8546 24.5565H36.4111C36.8788 24.5565 37.2579 24.1774 37.2579 23.7097V15.242C37.2579 14.7743 36.8788 14.3952 36.4111 14.3952H33.8546C33.675 13.8872 33.4666 13.3897 33.2307 12.9051L35.0453 11.0928C35.3758 10.762 35.3758 10.2262 35.0453 9.89541L29.0584 3.90911C28.7227 3.59091 28.1974 3.59091 27.861 3.90911L26.0464 5.72074C25.5621 5.48457 25.0643 5.27652 24.5563 5.09757V2.54038C24.5563 2.07267 24.1772 1.6936 23.7095 1.6936H15.2417C14.774 1.6936 14.395 2.07267 14.395 2.54038V5.09757C13.8869 5.27652 13.3891 5.48457 12.9048 5.72074L11.0926 3.90613C10.7618 3.57569 10.2259 3.57569 9.89516 3.90613L3.90886 9.89309C3.57809 10.2239 3.57809 10.7597 3.90886 11.0905L5.7205 12.9051C5.48466 13.3897 5.27627 13.8872 5.09666 14.3952H2.54013C2.07242 14.3952 1.69336 14.7743 1.69336 15.242V23.7097C1.69336 24.1774 2.07242 24.5565 2.54013 24.5565ZM3.38691 16.0888H5.70727C6.0774 16.0891 6.40486 15.849 6.51567 15.496C6.76474 14.6833 7.09452 13.8974 7.49972 13.1502C7.68032 12.8207 7.62144 12.4113 7.35583 12.1453L5.70198 10.4918L10.4915 5.70222L12.1451 7.35674C12.411 7.62268 12.8212 7.68089 13.1509 7.49996C13.8982 7.09576 14.6834 6.76763 15.4958 6.52022C15.8504 6.40875 16.0905 6.07897 16.0885 5.70751V3.38715H22.8627V5.70751C22.8624 6.07764 23.1025 6.40511 23.4555 6.51592C24.2668 6.76466 25.0511 7.09477 25.7967 7.49996C26.1268 7.68089 26.5363 7.62268 26.8025 7.35674L28.4597 5.70222L33.2493 10.4918L31.5954 12.1453C31.3298 12.4113 31.2709 12.8207 31.4515 13.1502C31.8567 13.8974 32.1865 14.6833 32.4356 15.496C32.5464 15.849 32.8738 16.0891 33.244 16.0888H35.5643V22.863H33.244C32.8738 22.8626 32.5464 23.1028 32.4356 23.4557C32.1865 24.2674 31.8567 25.0523 31.4515 25.7986C31.2709 26.1283 31.3298 26.5378 31.5954 26.8038L33.2493 28.4576L28.4597 33.2495L26.8062 31.595C26.5402 31.329 26.1301 31.2708 25.8003 31.4518C25.0537 31.8573 24.2682 32.1871 23.4555 32.4358C23.1025 32.5466 22.8624 32.8741 22.8627 33.2442V35.5646H16.0885V33.2442C16.0889 32.8741 15.8487 32.5466 15.4958 32.4358C14.6844 32.1871 13.9001 31.857 13.1546 31.4518C12.8245 31.2708 12.415 31.329 12.1487 31.595L10.4915 33.2495L5.70198 28.4599L7.35583 26.8064C7.62144 26.5405 7.68032 26.131 7.49972 25.8015C7.09551 25.054 6.76772 24.2684 6.51997 23.4557C6.4085 23.1011 6.07872 22.861 5.70727 22.863H3.38691V16.0888Z" fill="#4C5686"></path><path d="M19.4756 28.7903C24.6198 28.7903 28.7902 24.6199 28.7902 19.4758C28.7902 14.3316 24.6198 10.1613 19.4756 10.1613C14.3315 10.1613 10.1611 14.3316 10.1611 19.4758C10.1674 24.6176 14.3338 28.784 19.4756 28.7903ZM19.4756 11.8548C23.6847 11.8548 27.0966 15.2667 27.0966 19.4758C27.0966 23.6848 23.6847 27.0967 19.4756 27.0967C15.2666 27.0967 11.8547 23.6848 11.8547 19.4758C11.8593 15.2687 15.2686 11.8594 19.4756 11.8548Z" fill="#4C5686"></path><path d="M19.4754 26.25C23.2167 26.25 26.2496 23.2172 26.2496 19.4759C26.2496 15.7345 23.2167 12.7017 19.4754 12.7017C15.734 12.7017 12.7012 15.7345 12.7012 19.4759C12.7051 23.2152 15.736 26.2461 19.4754 26.25ZM19.4754 14.3952C22.281 14.3952 24.556 16.6703 24.556 19.4759C24.556 22.2815 22.281 24.5565 19.4754 24.5565C16.6698 24.5565 14.3947 22.2815 14.3947 19.4759C14.3977 16.6709 16.6704 14.3982 19.4754 14.3952Z" fill="#4C5686"></path><path d="M33.8712 22.0161C34.3389 22.0161 34.718 21.637 34.718 21.1693V17.7822C34.718 17.3145 34.3389 16.9354 33.8712 16.9354C33.4035 16.9354 33.0244 17.3145 33.0244 17.7822V21.1693C33.0244 21.637 33.4035 22.0161 33.8712 22.0161Z" fill="#4C5686"></path><path d="M5.92695 17.7822C5.92695 17.3145 5.54788 16.9354 5.08017 16.9354C4.61246 16.9354 4.2334 17.3145 4.2334 17.7822V18.629C4.2334 19.0967 4.61246 19.4757 5.08017 19.4757C5.54788 19.4757 5.92695 19.0967 5.92695 18.629V17.7822Z" fill="#4C5686"></path><path d="M29.462 11.1833C29.7944 11.5042 30.3223 11.4995 30.6491 11.1731C30.9756 10.8463 30.9802 10.3184 30.6594 9.98593L28.5425 7.869C28.21 7.54815 27.6821 7.55278 27.3553 7.87925C27.0289 8.20605 27.0242 8.73396 27.3451 9.06639L29.462 11.1833Z" fill="#4C5686"></path><path d="M19.4757 6.77424H20.3225C20.7902 6.77424 21.1692 6.39517 21.1692 5.92746C21.1692 5.45975 20.7902 5.08069 20.3225 5.08069H19.4757C19.008 5.08069 18.6289 5.45975 18.6289 5.92746C18.6289 6.39517 19.008 6.77424 19.4757 6.77424Z" fill="#4C5686"></path><path d="M19.4759 33.0242H17.7823C17.3146 33.0242 16.9355 33.4032 16.9355 33.8709C16.9355 34.3387 17.3146 34.7177 17.7823 34.7177H19.4759C19.9436 34.7177 20.3226 34.3387 20.3226 33.8709C20.3226 33.4032 19.9436 33.0242 19.4759 33.0242Z" fill="#4C5686"></path><path d="M8.46772 11.8548C8.69232 11.8548 8.90765 11.7655 9.06642 11.6068L9.91319 10.76C10.234 10.4276 10.2294 9.89966 9.90294 9.57285C9.57614 9.24638 9.04823 9.24175 8.7158 9.5626L7.86903 10.4094C7.62724 10.6515 7.55447 11.016 7.68545 11.3322C7.81644 11.6484 8.12538 11.8548 8.46772 11.8548Z" fill="#4C5686"></path><path d="M29.8855 28.1916L29.0387 29.0384C28.8188 29.2508 28.7304 29.566 28.8078 29.862C28.8852 30.1581 29.1164 30.3893 29.4125 30.4667C29.7085 30.5441 30.0238 30.4558 30.2361 30.2358L31.0829 29.389C31.4037 29.0566 31.3991 28.5287 31.0726 28.2019C30.7458 27.8754 30.2179 27.8708 29.8855 28.1916Z" fill="#4C5686"></path><path d="M9.56303 30.2358C9.89546 30.5566 10.4234 30.552 10.7502 30.2255C11.0766 29.8987 11.0813 29.3708 10.7604 29.0384L9.06688 27.3448C8.73445 27.024 8.20654 27.0286 7.87974 27.3551C7.55327 27.6819 7.54864 28.2098 7.86949 28.5422L9.56303 30.2358Z" fill="#4C5686"></path><path d="M53.3466 49.9597H48.2659V31.0072C49.3952 29.7449 49.3952 27.8357 48.2659 26.5735V22.0161C48.2659 21.5484 47.8869 21.1694 47.4192 21.1694H44.0321C43.5644 21.1694 43.1853 21.5484 43.1853 22.0161V26.5735C42.056 27.8357 42.056 29.7449 43.1853 31.0072V49.9597H39.7982V39.4749C40.9275 38.2127 40.9275 36.3035 39.7982 35.0413V31.3307C39.7982 30.863 39.4191 30.4839 38.9514 30.4839H35.5643C35.0966 30.4839 34.7176 30.863 34.7176 31.3307V35.0413C33.5883 36.3035 33.5883 38.2127 34.7176 39.4749V49.9597H30.4837V44.5556C31.6129 43.2933 31.6129 41.3841 30.4837 40.1219V37.2581C30.4837 36.7904 30.1046 36.4113 29.6369 36.4113H26.2498C25.7821 36.4113 25.403 36.7904 25.403 37.2581V40.1219C24.2738 41.3841 24.2738 43.2933 25.403 44.5556V49.9597H21.1692V47.0959C22.2984 45.8337 22.2984 43.9244 21.1692 42.6622V39.7984C21.1692 39.3307 20.7901 38.9516 20.3224 38.9516H16.9353C16.4676 38.9516 16.0885 39.3307 16.0885 39.7984V42.6622C14.9593 43.9244 14.9593 45.8337 16.0885 47.0959V49.9597H12.7014V45.4023C13.8307 44.1401 13.8307 42.2309 12.7014 40.9687V38.1049C12.7014 37.6371 12.3224 37.2581 11.8547 37.2581H8.46755C7.99984 37.2581 7.62078 37.6371 7.62078 38.1049V40.9687C6.49153 42.2309 6.49153 44.1401 7.62078 45.4023V49.9597H2.54013C2.07242 49.9597 1.69336 50.3388 1.69336 50.8065V53.3468C1.69336 53.8145 2.07242 54.1936 2.54013 54.1936H53.3466C53.8143 54.1936 54.1934 53.8145 54.1934 53.3468V50.8065C54.1934 50.3388 53.8143 49.9597 53.3466 49.9597ZM44.0321 28.7903C44.0321 27.8549 44.7902 27.0968 45.7256 27.0968C46.661 27.0968 47.4192 27.8549 47.4192 28.7903C47.4192 29.7258 46.661 30.4839 45.7256 30.4839C44.7902 30.4839 44.0321 29.7258 44.0321 28.7903ZM46.5724 22.8629V25.5236C46.0193 25.3632 45.4319 25.3632 44.8788 25.5236V22.8629H46.5724ZM44.8788 32.057C45.4319 32.2175 46.0193 32.2175 46.5724 32.057V49.9597H44.8788V32.057ZM35.5643 37.2581C35.5643 36.3227 36.3225 35.5645 37.2579 35.5645C38.1933 35.5645 38.9514 36.3227 38.9514 37.2581C38.9514 38.1935 38.1933 38.9516 37.2579 38.9516C36.3225 38.9516 35.5643 38.1935 35.5643 37.2581ZM38.1047 32.1774V33.9914C37.5516 33.831 36.9642 33.831 36.4111 33.9914V32.1774H38.1047ZM36.4111 40.5248C36.9642 40.6852 37.5516 40.6852 38.1047 40.5248V49.9597H36.4111V40.5248ZM26.2498 42.3387C26.2498 41.4033 27.0079 40.6452 27.9434 40.6452C28.8788 40.6452 29.6369 41.4033 29.6369 42.3387C29.6369 43.2741 28.8788 44.0323 27.9434 44.0323C27.0079 44.0323 26.2498 43.2741 26.2498 42.3387ZM28.7901 38.1049V39.072C28.2371 38.9116 27.6496 38.9116 27.0966 39.072V38.1049H28.7901ZM27.0966 45.6054C27.6496 45.7658 28.2371 45.7658 28.7901 45.6054V49.9597H27.0966V45.6054ZM16.9353 44.8791C16.9353 43.9436 17.6934 43.1855 18.6288 43.1855C19.5643 43.1855 20.3224 43.9436 20.3224 44.8791C20.3224 45.8145 19.5643 46.5726 18.6288 46.5726C17.6934 46.5726 16.9353 45.8145 16.9353 44.8791ZM19.4756 40.6452V41.6124C18.9226 41.4519 18.3351 41.4519 17.7821 41.6124V40.6452H19.4756ZM17.7821 48.1457C18.3351 48.3062 18.9226 48.3062 19.4756 48.1457V49.9597H17.7821V48.1457ZM8.46755 43.1855C8.46755 42.2501 9.22568 41.492 10.1611 41.492C11.0965 41.492 11.8547 42.2501 11.8547 43.1855C11.8547 44.1209 11.0965 44.8791 10.1611 44.8791C9.22568 44.8791 8.46755 44.1209 8.46755 43.1855ZM11.0079 38.9516V39.9188C10.4548 39.7584 9.86738 39.7584 9.31433 39.9188V38.9516H11.0079ZM9.31433 46.4522C9.86738 46.6126 10.4548 46.6126 11.0079 46.4522V49.9597H9.31433V46.4522ZM52.4998 52.5H3.38691V51.6532H52.4998V52.5Z" fill="#4C5686"></path></svg>
              </span>
              <div className={`${styles.gainItemInfo} flex flex-column align-start`}>
                <div className={`${styles.gainItemNumber} flex align-center justify-start`}>
                  <CountUpComponent targetNumber={296} />
                  <span>+</span>
                </div>
                <h3 className={styles.gainItemTitle}>پروژه های انجام شده</h3>
              </div>

            </li>
            <li className={`${styles.gainItem} flex align-center justify-center gap-30`}>
              <span className={`${styles.gainItemIcon} flex align-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none"><path d="M21.5033 11.2656H22.6846C23.1221 13.3656 24.7846 15.0281 26.8846 15.4656V16.625C26.8846 17.2375 27.3877 17.7406 28.0002 17.7406C28.6127 17.7406 29.1158 17.2375 29.1158 16.625V15.4437C31.2158 15.0062 32.8783 13.3438 33.3158 11.2438H34.4971C35.1096 11.2438 35.6127 10.7406 35.6127 10.1281C35.6127 9.51562 35.1096 9.0125 34.4971 9.0125H33.3158C32.8783 6.9125 31.2158 5.25 29.1158 4.8125V3.63125C29.1158 3.01875 28.6127 2.51562 28.0002 2.51562C27.3877 2.51562 26.8846 3.01875 26.8846 3.63125V4.8125C24.7846 5.25 23.1221 6.9125 22.6846 9.0125H21.5033C20.8908 9.0125 20.3877 9.51562 20.3877 10.1281C20.3877 10.7406 20.8908 11.2656 21.5033 11.2656ZM28.0002 6.93438C29.7721 6.93438 31.1939 8.37812 31.1939 10.1281C31.1939 11.9 29.7502 13.3219 28.0002 13.3219C26.2283 13.3219 24.8064 11.9 24.8064 10.1281C24.8064 10.1281 24.8064 10.1281 24.8064 10.1063C24.8064 10.1063 24.8064 10.1062 24.8064 10.0844C24.8064 8.37812 26.2283 6.93438 28.0002 6.93438Z" fill="#4C5686"></path><path d="M16.1879 36.6625C15.7285 36.7719 15.3785 37.1875 15.3566 37.6688L14.5254 50.3563C14.5035 50.8375 14.0879 51.2313 13.5848 51.2313H7.28477C6.80352 51.2313 6.38789 50.8594 6.34414 50.3563L5.51289 37.6688C5.49102 37.2094 5.16289 36.8156 4.72539 36.6844C4.48477 36.6188 3.78477 36.4 3.67539 36.2688C3.58789 36.1375 3.54414 35.4375 3.52227 35.0438L2.75664 21.5906C3.85039 21.2625 5.62227 20.6938 6.56289 20.4094L9.66914 23.3188C10.1066 23.7125 10.7629 23.7125 11.1785 23.3188L14.2848 20.4094C14.5691 20.4969 14.9629 20.6281 15.3785 20.7594C15.9691 20.9563 16.5816 20.6281 16.7785 20.0375C16.9535 19.4469 16.6473 18.8344 16.0566 18.6375C15.116 18.3313 14.3504 18.0906 14.3504 18.0906C13.9566 17.9594 13.541 18.0688 13.2566 18.3313L10.4348 20.9781L7.61289 18.3531C7.32852 18.0688 6.89102 17.9813 6.51914 18.1125C6.51914 18.1125 3.54414 19.075 2.03477 19.5125C1.09414 19.7969 0.525391 20.5407 0.525391 21.5032C0.525391 21.5688 0.525391 21.7438 0.525391 21.7438L1.29102 35C1.29102 35 1.29102 35.1969 1.31289 35.2407C1.44414 37.1875 1.72852 37.9094 3.34727 38.5438L4.13477 50.4875C4.24414 52.15 5.62227 53.4407 7.28477 53.4407H13.5848C15.2473 53.4407 16.6254 52.15 16.7348 50.4875L17.5441 38.1063C17.6316 37.8875 17.6316 37.6469 17.566 37.3844C17.391 36.8375 16.7566 36.5094 16.1879 36.6625Z" fill="#4C5686"></path><path d="M10.4348 16.3406C13.4316 16.3406 15.8598 13.9125 15.8598 10.9156C15.8598 7.91873 13.4316 5.4906 10.4348 5.4906C7.43789 5.4906 5.00977 7.91873 5.00977 10.9156C5.00977 13.9125 7.43789 16.3406 10.4348 16.3406ZM10.4348 7.69998C12.2066 7.69998 13.6285 9.14373 13.6285 10.8937C13.6285 12.6437 12.1848 14.0875 10.4348 14.0875C8.66289 14.0875 7.24102 12.6437 7.24102 10.8937C7.24102 9.14373 8.66289 7.69998 10.4348 7.69998Z" fill="#4C5686"></path><path d="M36.4008 19.5125C34.8914 19.0531 31.9164 18.1125 31.9164 18.1125C31.5227 17.9813 31.107 18.0906 30.8227 18.3531L28.0008 21L25.1789 18.3531C24.8945 18.0688 24.457 17.9813 24.0852 18.1125C24.0852 18.1125 21.1102 19.075 19.6008 19.5125C18.6383 19.7969 18.1133 20.5188 18.1133 21.5031L18.857 35.0219L18.8789 35.2406C19.0102 37.1875 19.2945 37.9313 20.9133 38.5438L21.7008 50.4875C21.8102 52.15 23.1883 53.4406 24.8508 53.4406H31.1508C32.8133 53.4406 34.1914 52.15 34.3008 50.4875L35.0883 38.5438C36.707 37.9094 36.9914 37.1875 37.1227 35.2406L37.8883 21.7V21.5031C37.9102 20.5188 37.3633 19.7969 36.4008 19.5125ZM34.9352 34.8688L34.9133 35.0875C34.8914 35.4156 34.8477 36.1375 34.7602 36.2688C34.6508 36.4 33.9289 36.5969 33.7102 36.6844C33.2727 36.8156 32.9664 37.2094 32.9227 37.6688L32.0914 50.3563C32.0695 50.8375 31.6539 51.2313 31.1508 51.2313H24.8508C24.3695 51.2313 23.9539 50.8375 23.9102 50.3563L23.0789 37.6688C23.057 37.2094 22.7289 36.8156 22.2914 36.6844C22.0508 36.6188 21.3508 36.4 21.2414 36.2688C21.1539 36.1375 21.1102 35.4375 21.0883 35.0875L20.3227 21.6563V21.5906C21.4164 21.2625 23.1883 20.6938 24.1289 20.3875L27.2352 23.2969C27.6727 23.6906 28.3289 23.6906 28.7445 23.2969L31.8508 20.3875C32.7914 20.6938 34.5633 21.2406 35.657 21.5906L34.9352 34.8688Z" fill="#4C5686"></path><path d="M53.9658 19.5125C52.4564 19.0531 49.4814 18.1125 49.4814 18.1125C49.1096 17.9813 48.6721 18.0906 48.3877 18.3531L45.5658 21L42.7439 18.3531C42.4596 18.0688 42.0221 17.9813 41.6502 18.1125C41.6502 18.1125 40.8846 18.3531 39.9439 18.6594C39.3533 18.8344 39.0252 19.4688 39.2221 20.0594C39.3971 20.65 40.0314 20.9781 40.6221 20.7813C41.0377 20.65 41.4096 20.5406 41.7158 20.4313L44.8221 23.3406C45.2596 23.7344 45.9158 23.7344 46.3314 23.3406L49.4377 20.4094C50.3564 20.7156 52.1283 21.2625 53.2439 21.6125L52.5002 34.8906L52.4783 35.1094C52.4564 35.4594 52.4127 36.1594 52.3252 36.2906C52.2158 36.4219 51.4939 36.6406 51.2752 36.7063C50.8377 36.8375 50.5314 37.2313 50.4877 37.6906L49.6564 50.3781C49.6127 50.8813 49.2189 51.2531 48.7158 51.2531H42.3939C41.9127 51.2531 41.4971 50.8594 41.4752 50.3781L40.6439 37.6906C40.6221 37.2531 40.2502 36.8375 39.8346 36.6844C39.2658 36.4875 38.6533 36.8156 38.4564 37.3844C38.3908 37.6031 38.3908 37.8219 38.4564 38.0406L39.2877 50.5094C39.3971 52.1719 40.7752 53.4625 42.4377 53.4625H48.7596C50.4002 53.4625 51.8002 52.1719 51.9096 50.5094L52.6971 38.5656C54.3158 37.9313 54.6002 37.2094 54.7314 35.3063C54.7314 35.2188 54.7533 35.0219 54.7533 35.0219L55.4971 21.7V21.525C55.4533 20.5406 54.9064 19.7969 53.9658 19.5125Z" fill="#4C5686"></path><path d="M45.5656 16.3406C48.5625 16.3406 50.9906 13.9125 50.9906 10.9156C50.9906 7.91873 48.5625 5.4906 45.5656 5.4906C42.5688 5.4906 40.1406 7.91873 40.1406 10.9156C40.1406 13.9125 42.5688 16.3406 45.5656 16.3406ZM45.5656 7.69998C47.3375 7.69998 48.7594 9.14373 48.7594 10.8937C48.7594 12.6437 47.3156 14.0875 45.5656 14.0875C43.7938 14.0875 42.3719 12.6437 42.3719 10.8937C42.3719 9.14373 43.7938 7.69998 45.5656 7.69998Z" fill="#4C5686"></path></svg>
              </span>
              <div className={`${styles.gainItemInfo} flex flex-column align-start`}>
                <div className={`${styles.gainItemNumber} flex align-center justify-start`}>
                  <CountUpComponent targetNumber={86} />
                  <span>%</span>
                </div>
                <h3 className={styles.gainItemTitle}>مشتریان راضی</h3>
              </div>
            </li>
            <li className={`${styles.gainItem} flex align-center justify-center gap-30`}>
              <span className={`${styles.gainItemIcon} flex align-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none"><g clip-path="url(#clip0_1_7456)"><path d="M18.6811 42.5508H18.6533C18.1962 42.5508 17.8262 42.9208 17.8262 43.3775C17.8262 43.8338 18.1966 44.2042 18.6533 44.2042H18.6811C19.1383 44.2042 19.5082 43.8338 19.5082 43.3775C19.5082 42.9208 19.1383 42.5508 18.6811 42.5508Z" fill="#4C5686"></path><path d="M18.6533 46.8741H18.6225C18.1653 46.8741 17.7949 47.2441 17.7949 47.7004C17.7949 48.1572 18.1653 48.5272 18.6225 48.5272H18.6533C19.1104 48.5272 19.4804 48.1572 19.4804 47.7004C19.4804 47.2441 19.1104 46.8741 18.6533 46.8741Z" fill="#4C5686"></path><path d="M53.0032 2.18738H2.99715C1.34455 2.18738 0 3.53065 0 5.18154V41.6775C0 43.3284 1.34455 44.6717 2.99715 44.6717H4.18575L2.31996 50.8271C1.94954 52.0481 1.72566 52.7847 2.16487 53.376C2.55751 53.9054 3.21206 53.9071 3.73971 53.9071C3.83199 53.908 3.93752 53.9063 4.04818 53.9054C4.16866 53.9041 4.29855 53.9033 4.43783 53.9033C6.28226 53.9033 8.42107 53.9067 10.5979 53.9105C10.6402 53.9174 10.6834 53.9216 10.7274 53.9216H16.6721C16.6794 53.9216 16.6866 53.9208 16.6943 53.9208C17.3732 53.9212 18.0299 53.9216 18.6528 53.9216C19.2732 53.9216 19.9269 53.9212 20.6024 53.9208C20.61 53.9208 20.6169 53.9216 20.6241 53.9216H26.5693C26.6133 53.9216 26.6565 53.9174 26.6988 53.9105C28.8782 53.9067 31.02 53.9033 32.8678 53.9033C33.0054 53.9033 33.1336 53.9041 33.2523 53.905C33.3596 53.9058 33.4595 53.9067 33.5527 53.9067C34.0855 53.9067 34.7486 53.9067 35.1438 53.3726C35.5843 52.777 35.3446 51.9999 34.9827 50.8262L33.1083 44.6713H53.0032C54.6554 44.6713 55.9999 43.328 55.9999 41.6771V5.18154C56.0003 3.53065 54.6558 2.18738 53.0032 2.18738ZM9.90021 45.0964V52.2566C7.96648 52.2528 6.08487 52.2502 4.43826 52.2502C4.29342 52.2502 4.15884 52.2511 4.03408 52.2524C3.88497 52.2537 3.74483 52.2545 3.63546 52.2537C3.70766 51.952 3.83157 51.544 3.90334 51.3064L6.07847 44.1321C6.09 44.1 6.09983 44.068 6.10795 44.0342L6.7031 42.0702C7.1201 40.7919 8.0045 40.4855 9.66009 40.013C9.73956 39.9903 9.81988 39.9673 9.90021 39.9442V45.0964ZM15.8454 52.2669C14.4649 52.2648 13.0097 52.2622 11.5549 52.2596V50.026H15.8454V52.2669ZM15.8454 48.373H11.5549V45.9227H15.8454V48.373ZM15.8454 44.2697H11.5549V39.4456L11.7143 39.3973L13.9881 42.4304C14.4269 43.0042 15.0033 43.3101 15.6317 43.3101C15.7022 43.3101 15.7736 43.3049 15.8449 43.2972V44.2697H15.8454ZM16.0667 41.4319C16.0052 41.5066 15.8138 41.6519 15.6429 41.6562C15.6044 41.6575 15.4818 41.66 15.3079 41.4327L13.3985 38.8855L14.7743 38.4676C14.7866 38.4757 14.8007 38.4813 14.8136 38.4886C15.3481 38.8321 15.909 39.1196 16.4858 39.3337C16.6148 39.3815 16.7409 39.4242 16.8656 39.4644L16.0667 41.4319ZM19.7974 45.0964V52.2682C19.4061 52.2686 19.0237 52.2686 18.6532 52.2686C18.2803 52.2686 17.8945 52.2686 17.4997 52.2682V42.2586C17.5334 42.2018 17.5625 42.1458 17.5851 42.0903L18.5293 39.7643C18.5687 39.7656 18.608 39.7677 18.6473 39.7677C18.687 39.7677 18.7272 39.7656 18.7677 39.7643L19.7124 42.0907C19.735 42.1458 19.7641 42.2022 19.7974 42.2586V45.0964ZM17.0626 37.784C14.3449 36.7766 11.9608 33.744 11.9608 31.2851L11.9446 29.7419H25.3512L25.3333 31.2941C25.3333 33.7388 22.9527 36.7702 20.2388 37.7815C19.0651 38.2194 18.2341 38.2202 17.0626 37.784ZM17.0506 24.5303H20.1255C21.2825 24.5303 22.2238 23.5895 22.2238 22.4338V21.379C23.7221 22.3245 24.7932 23.8134 25.2102 25.5463H11.9472C12.3654 23.8036 13.4451 22.3082 14.9558 21.364V22.4338C14.9558 23.5895 15.8954 24.5303 17.0506 24.5303ZM16.6101 22.4338V20.2382C16.6101 19.9981 16.8122 19.7951 17.0506 19.7951H20.1255C20.3657 19.7951 20.569 19.9981 20.569 20.2382V22.4338C20.569 22.6782 20.3699 22.8769 20.1255 22.8769H17.0506C16.808 22.8769 16.6101 22.6782 16.6101 22.4338ZM26.1886 27.1994H26.2382C26.2587 27.1994 26.2754 27.2199 26.2754 27.237V28.0513C26.2754 28.0684 26.2587 28.0889 26.2382 28.0889H10.9692C10.9521 28.0889 10.932 28.0688 10.932 28.0513V27.237C10.932 27.2199 10.9521 27.1994 10.9692 27.1994H26.1886ZM21.2304 41.4319L20.431 39.4635C20.5579 39.4225 20.6861 39.3794 20.8177 39.3302C21.3825 39.12 21.932 38.8385 22.4558 38.5039C22.4784 38.4924 22.5006 38.4817 22.5228 38.4676L23.8999 38.885L21.9943 41.4263C21.8149 41.6609 21.6927 41.6583 21.6542 41.6566C21.4838 41.6519 21.2919 41.5066 21.2304 41.4319ZM25.7422 52.2596C24.2869 52.2622 22.8322 52.2648 21.4517 52.2665V50.026H25.7422V52.2596ZM25.7422 48.373H21.4517V45.9227H25.7422V48.373ZM25.7422 44.2697H21.4517V43.2972C21.5231 43.3049 21.5944 43.3096 21.6649 43.3096C22.2938 43.3096 22.8706 43.0033 23.3137 42.4239L25.5845 39.3956L25.7422 39.4435V44.2697ZM33.401 51.3103C33.4736 51.5461 33.5988 51.9524 33.6715 52.2532C33.5612 52.2545 33.4181 52.2537 33.2664 52.2524C33.1434 52.2511 33.0105 52.2502 32.8682 52.2502C31.2182 52.2502 29.3336 52.2528 27.3969 52.2566V39.9412C27.4798 39.9651 27.5631 39.9891 27.6447 40.0126C29.2986 40.4847 30.1826 40.791 30.6 42.0693L31.5066 45.0891L33.401 51.3103ZM54.3456 41.6775C54.3456 42.4171 53.7432 43.0187 53.0032 43.0187H32.6123L32.1821 41.5857C32.1804 41.5797 32.1787 41.5742 32.1765 41.5686C32.1594 41.5152 32.1411 41.4635 32.1223 41.4118L38.3631 41.4169H38.3639C38.8207 41.4169 39.1907 41.0474 39.1911 40.591C39.1915 40.1348 38.8211 39.7643 38.3644 39.7639L31.0341 39.7579C30.2108 39.026 29.1435 38.7214 28.0989 38.4228C27.8822 38.3608 27.6609 38.298 27.4362 38.2296L25.5567 37.6597C25.526 37.6482 25.4948 37.6388 25.4627 37.6311L24.0832 37.2128C25.8131 35.5397 26.9876 33.3013 26.9876 31.3035L27.0085 29.5548C27.5545 29.2741 27.9301 28.7063 27.9301 28.0513V27.237C27.9301 26.5508 27.5187 25.9603 26.9295 25.6955C26.4484 22.92 24.6334 20.5779 22.0563 19.4179C21.7358 18.6685 20.9912 18.1417 20.1255 18.1417H17.0506C16.1914 18.1417 15.4523 18.6625 15.1293 19.4046C12.5282 20.5633 10.6996 22.9222 10.2236 25.7215C9.66394 25.9975 9.27728 26.5722 9.27728 27.2365V28.0513C9.27728 28.7413 9.69384 29.3356 10.2886 29.5979L10.3061 31.2937C10.3061 33.3005 11.481 35.541 13.2114 37.2141L10.5214 38.0314C10.4975 38.0378 10.4744 38.0446 10.4514 38.0528L9.86987 38.2296C9.64514 38.298 9.4234 38.3612 9.20593 38.4232C8.16088 38.7214 7.09361 39.026 6.2703 39.7575H4.9155V7.09817H51.0818V39.7579H41.9033C41.4465 39.7579 41.0761 40.1279 41.0761 40.5842C41.0761 41.0409 41.4465 41.4109 41.9033 41.4109H51.3668C52.1218 41.4109 52.7362 40.797 52.7362 40.0425V6.81363C52.7362 6.05911 52.1218 5.44515 51.3668 5.44515H4.63095C3.87515 5.44515 3.26076 6.05911 3.26076 6.81363V40.0425C3.26076 40.797 3.87515 41.4109 4.63095 41.4109H5.18124C5.16245 41.4626 5.14407 41.5148 5.12656 41.5686C5.12485 41.5733 5.12357 41.5784 5.12186 41.5835L4.68692 43.0187H2.99715C2.25673 43.0187 1.65473 42.4171 1.65473 41.6775V5.18154C1.65473 4.44197 2.25715 3.8404 2.99715 3.8404H53.0032C53.7432 3.8404 54.3456 4.44197 54.3456 5.18154V41.6775Z" fill="#4C5686"></path><path d="M37.7596 28.082H40.112C41.0554 28.082 41.8231 27.3138 41.8231 26.37V25.9966C41.971 25.9415 42.1171 25.8825 42.2619 25.8189L42.5242 26.0808C42.8472 26.4034 43.2771 26.5811 43.7355 26.5811C44.1939 26.5811 44.6242 26.4034 44.9472 26.0804L46.6083 24.4179C47.2753 23.7519 47.2753 22.6675 46.6096 22.0027L46.3947 21.7869C46.469 21.6271 46.5378 21.4648 46.6015 21.3003H46.9006C47.8435 21.3003 48.6113 20.5321 48.6113 19.5879V17.2406C48.6113 16.2964 47.8435 15.5282 46.9006 15.5282H46.6489C46.5835 15.3517 46.5122 15.177 46.434 15.0044L46.6083 14.8301C47.2757 14.1631 47.2757 13.0775 46.6087 12.411L44.9467 10.7473C44.6242 10.4251 44.1939 10.2474 43.7355 10.2474C43.2771 10.2474 42.8472 10.4251 42.5242 10.7473L42.3491 10.9224C42.1769 10.8451 42.0013 10.7738 41.8227 10.708V10.4584C41.8227 9.51465 41.0554 8.74646 40.112 8.74646H37.7596C36.8162 8.74646 36.0489 9.51423 36.0489 10.4584V10.7562C35.8844 10.8203 35.7225 10.8891 35.5631 10.963L35.3469 10.7473C35.0243 10.4251 34.5941 10.2474 34.1361 10.2474C33.6776 10.2474 33.2474 10.4251 32.9244 10.7477L31.2637 12.4101C30.9407 12.7327 30.7629 13.1625 30.7629 13.6205C30.7629 14.0781 30.9407 14.5079 31.2633 14.8305L31.5247 15.0911C31.4615 15.2355 31.403 15.3812 31.3483 15.5282H30.9714C30.0281 15.5282 29.2607 16.2964 29.2607 17.2406V19.5879C29.2607 20.5321 30.0281 21.3003 30.9714 21.3003H31.3953C31.4474 21.4336 31.5029 21.5669 31.5628 21.6989L31.2611 22.0006C30.5972 22.6696 30.5985 23.754 31.2628 24.4175L32.9248 26.0808C33.2474 26.4034 33.6776 26.5811 34.1361 26.5811C34.5941 26.5811 35.0243 26.4034 35.3469 26.0812L35.6477 25.7804C35.7793 25.8398 35.913 25.8958 36.0489 25.9488V26.37C36.0489 27.3138 36.8162 28.082 37.7596 28.082ZM35.8852 24.0518C35.7592 23.9821 35.6216 23.9484 35.4849 23.9484C35.2704 23.9484 35.0585 24.0313 34.8996 24.1902L34.1771 24.9118C34.1566 24.9328 34.1151 24.9323 34.0955 24.9127L32.4335 23.249C32.4113 23.2268 32.4126 23.1879 32.4339 23.167L33.1525 22.4483C33.4115 22.1898 33.4696 21.7916 33.2948 21.4699C33.0761 21.0666 32.9018 20.6513 32.7779 20.2365C32.6727 19.8865 32.3506 19.6469 31.9849 19.6469H30.9714C30.9411 19.6469 30.9155 19.6199 30.9155 19.5879V17.2406C30.9155 17.2103 30.9428 17.1816 30.9714 17.1816H31.9477C32.3177 17.1816 32.6428 16.936 32.7437 16.5805C32.8676 16.1451 33.0402 15.7162 33.2564 15.3064C33.4251 14.986 33.3657 14.5929 33.1094 14.3366L32.4335 13.6615C32.4232 13.6513 32.4177 13.6372 32.4177 13.6205C32.4177 13.6038 32.4232 13.5897 32.4339 13.5791L34.0951 11.9166C34.1156 11.8957 34.1562 11.8957 34.1771 11.9166L34.8188 12.5575C35.0812 12.8198 35.4866 12.875 35.8105 12.693C36.2193 12.4627 36.6594 12.2747 37.1178 12.135C37.4656 12.0286 37.7036 11.7077 37.7036 11.3441V10.4589C37.7036 10.4281 37.7309 10.3995 37.7596 10.3995H40.112C40.1411 10.3995 40.1684 10.4281 40.1684 10.4589V11.3074C40.1684 11.6765 40.4132 12.0008 40.7687 12.1021C41.2412 12.2367 41.6954 12.4217 42.1184 12.6524C42.4405 12.828 42.84 12.7703 43.0998 12.5109L43.6945 11.9166C43.7154 11.8957 43.7564 11.8966 43.7765 11.9162L45.4381 13.5795C45.459 13.6009 45.459 13.641 45.4381 13.662L44.8429 14.2563C44.5827 14.516 44.5259 14.9164 44.7028 15.2385C44.9382 15.6666 45.1228 16.1174 45.2514 16.5775C45.3509 16.9347 45.6769 17.1816 46.0482 17.1816H46.9006C46.9292 17.1816 46.9565 17.2107 46.9565 17.241V19.5883C46.9565 19.6204 46.9309 19.6473 46.9006 19.6473H46.011C45.6453 19.6473 45.3232 19.887 45.2185 20.2369C45.0826 20.6893 44.8963 21.1277 44.6639 21.5387C44.4823 21.8613 44.537 22.2655 44.7985 22.5278L45.4381 23.1699C45.4594 23.1913 45.4594 23.2285 45.4381 23.2498L43.7769 24.9123C43.756 24.9332 43.7158 24.9332 43.6945 24.9123L43.0156 24.2342C42.758 23.9766 42.3619 23.9181 42.0406 24.0898C41.6339 24.3069 41.2066 24.4795 40.7712 24.6021C40.4145 24.7025 40.1684 25.0276 40.1684 25.3976V26.37C40.1684 26.4004 40.1411 26.429 40.1124 26.429H37.7596C37.7309 26.429 37.7036 26.4004 37.7036 26.37V25.3604C37.7036 24.9969 37.4652 24.6756 37.1166 24.5696C36.6825 24.4376 36.268 24.2633 35.8852 24.0518Z" fill="#4C5686"></path><path d="M44.2061 18.4142C44.2061 15.5115 41.8425 13.1497 38.9368 13.1497C36.0315 13.1497 33.668 15.5115 33.668 18.4142C33.668 21.3169 36.0315 23.6783 38.9368 23.6783C41.8425 23.6783 44.2061 21.3169 44.2061 18.4142ZM35.3227 18.4142C35.3227 16.4228 36.9441 14.8027 38.9368 14.8027C40.9303 14.8027 42.5513 16.4228 42.5513 18.4142C42.5513 20.4052 40.9303 22.0253 38.9368 22.0253C36.9441 22.0253 35.3227 20.4052 35.3227 18.4142Z" fill="#4C5686"></path><path d="M41.9966 18.4142C41.9966 16.7287 40.6239 15.3577 38.9371 15.3577C37.2486 15.3577 35.875 16.7287 35.875 18.4142C35.875 20.0993 37.249 21.4703 38.9371 21.4703C40.6239 21.4703 41.9966 20.0993 41.9966 18.4142ZM37.5297 18.4142C37.5297 17.6405 38.1612 17.0111 38.9371 17.0111C39.7117 17.0111 40.3419 17.6405 40.3419 18.4142C40.3419 19.1879 39.7117 19.8173 38.9371 19.8173C38.1612 19.8173 37.5297 19.1879 37.5297 18.4142Z" fill="#4C5686"></path><path d="M33.4169 31.3496H31.9506C30.9491 31.3496 30.1348 32.1639 30.1348 33.1641V35.1244C30.1348 36.125 30.9491 36.9389 31.9506 36.9389H33.4169C34.4179 36.9389 35.2331 36.125 35.2331 35.1244V33.1641C35.2331 32.1639 34.4184 31.3496 33.4169 31.3496ZM33.5784 35.1244C33.5784 35.2102 33.5028 35.2859 33.4169 35.2859H31.9506C31.863 35.2859 31.7891 35.2119 31.7891 35.1244V33.1641C31.7891 33.0753 31.8617 33.0031 31.9506 33.0031H33.4169C33.504 33.0031 33.5784 33.077 33.5784 33.1641V35.1244Z" fill="#4C5686"></path><path d="M41.6399 35.1244V31.9691C41.6399 30.9685 40.8256 30.1546 39.8241 30.1546H38.3578C37.3563 30.1546 36.542 30.9685 36.542 31.9691V35.1244C36.542 36.125 37.3563 36.9389 38.3578 36.9389H39.8241C40.8256 36.9389 41.6399 36.125 41.6399 35.1244ZM39.9856 35.1244C39.9856 35.2102 39.91 35.2859 39.8241 35.2859H38.3578C38.2719 35.2859 38.1963 35.2102 38.1963 35.1244V31.9691C38.1963 31.8815 38.2702 31.8076 38.3578 31.8076H39.8241C39.9117 31.8076 39.9856 31.8815 39.9856 31.9691V35.1244Z" fill="#4C5686"></path><path d="M46.2313 28.3461H44.768C43.7665 28.3461 42.9521 29.16 42.9521 30.1602V35.1244C42.9521 36.125 43.7665 36.9389 44.768 36.9389H46.2313C47.2328 36.9389 48.0471 36.125 48.0471 35.1244V30.1602C48.0471 29.16 47.2328 28.3461 46.2313 28.3461ZM46.3924 35.1244C46.3924 35.212 46.3184 35.2859 46.2309 35.2859H44.768C44.6804 35.2859 44.6065 35.212 44.6065 35.1244V30.1602C44.6065 30.073 44.6804 29.9991 44.768 29.9991H46.2309C46.3184 29.9991 46.3924 30.073 46.3924 30.1602V35.1244Z" fill="#4C5686"></path><path d="M25.9718 10.1709H19.8032C19.3465 10.1709 18.9761 10.5409 18.9761 10.9972C18.9761 11.4535 19.3465 11.8239 19.8032 11.8239H25.9718C26.1363 11.8239 26.2756 11.9628 26.2756 12.1277V13.8029C26.2756 13.9674 26.1363 14.1067 25.9718 14.1067H9.95601C9.79109 14.1067 9.6518 13.9674 9.6518 13.8029V12.1277C9.6518 11.9628 9.79109 11.8239 9.95558 11.8239L16.0152 11.8269H16.0157C16.4724 11.8269 16.8428 11.4573 16.8428 11.001C16.8433 10.5443 16.4728 10.1743 16.0161 10.1739L9.95601 10.1709C8.87592 10.1709 7.99707 11.0485 7.99707 12.1277V13.8029C7.99707 14.8822 8.87592 15.7602 9.95601 15.7602H25.9718C27.0515 15.7602 27.9304 14.8822 27.9304 13.8029V12.1277C27.9304 11.0485 27.0515 10.1709 25.9718 10.1709Z" fill="#4C5686"></path></g><defs><clipPath id="clip0_1_7456"><rect width="56" height="56" fill="white"></rect></clipPath></defs></svg>
              </span>
              <div className={`${styles.gainItemInfo} flex flex-column align-start`}>
                <div className={`${styles.gainItemNumber} flex align-center justify-start`}>
                  <CountUpComponent targetNumber={20} />
                  <span>+</span>
                </div>
                <h3 className={styles.gainItemTitle}>تجربه موفق</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectSteps;