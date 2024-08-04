import Image from 'next/image';
import styles from './index.module.css';
import Button from '@/components/ui/button';


const CompanyIntro = () => {
  return (
    <div className='flex align-center'>
      <ul className={`${styles.cols} flex align-start justify-between gap-20`}>
        <li className={`${styles.col}`}>
          <Image className={styles.img} src={'/asset/image/Group-190.png'} alt='شرکت توسعه صنعت آینده آرشید' width={600} height={600} style={{ width: "100%", height: "100%", objectFit: 'cover' }} quality={100} />
          <div className={styles.imgColDots}>
            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="69" viewBox="0 0 86 69" fill="none"><path d="M2.43076 64.3306C3.53076 64.5306 4.33078 65.6307 4.13078 66.7307C3.93078 67.8307 2.83075 68.6307 1.73075 68.4307C0.630751 68.2307 -0.169261 67.1307 0.0307391 66.0307C0.230739 64.8307 1.33076 64.1306 2.43076 64.3306Z" fill="#DEE1ED"></path><path d="M2.43076 48.2306C3.53076 48.4306 4.33078 49.5306 4.13078 50.6306C3.93078 51.7306 2.83075 52.5306 1.73075 52.3306C0.630751 52.1306 -0.169261 51.0306 0.0307391 49.9306C0.230739 48.8306 1.33076 48.0306 2.43076 48.2306Z" fill="#DEE1ED"></path><path d="M2.43076 32.2306C3.53076 32.4306 4.33078 33.5306 4.13078 34.6306C3.93078 35.7306 2.83075 36.5306 1.73075 36.3306C0.630751 36.1306 -0.169261 35.0306 0.0307391 33.9306C0.230739 32.7306 1.33076 31.9306 2.43076 32.2306Z" fill="#DEE1ED"></path><path d="M2.43076 16.1305C3.53076 16.3305 4.33078 17.4305 4.13078 18.5305C3.93078 19.6305 2.83075 20.4305 1.73075 20.2305C0.630751 20.0305 -0.169261 18.9305 0.0307391 17.8305C0.230739 16.6305 1.33076 15.9305 2.43076 16.1305Z" fill="#DEE1ED"></path><path d="M2.43076 0.0304159C3.53076 0.230416 4.33078 1.33044 4.13078 2.43044C3.93078 3.53044 2.83075 4.33039 1.73075 4.13039C0.630751 3.93039 -0.169261 2.83043 0.0307391 1.73043C0.230739 0.630428 1.33076 -0.169584 2.43076 0.0304159Z" fill="#DEE1ED"></path><path d="M15.9308 64.3306C17.0308 64.5306 17.8308 65.6307 17.6308 66.7307C17.4308 67.8307 16.3308 68.6307 15.2308 68.4307C14.1308 68.2307 13.3307 67.1307 13.5307 66.0307C13.7307 64.8307 14.8308 64.1306 15.9308 64.3306Z" fill="#DEE1ED"></path><path d="M15.9308 48.2306C17.0308 48.4306 17.8308 49.5306 17.6308 50.6306C17.4308 51.7306 16.3308 52.5306 15.2308 52.3306C14.1308 52.1306 13.3307 51.0306 13.5307 49.9306C13.7307 48.8306 14.8308 48.0306 15.9308 48.2306Z" fill="#DEE1ED"></path><path d="M15.9308 32.2306C17.0308 32.4306 17.8308 33.5306 17.6308 34.6306C17.4308 35.7306 16.3308 36.5306 15.2308 36.3306C14.1308 36.1306 13.3307 35.0306 13.5307 33.9306C13.7307 32.7306 14.8308 31.9306 15.9308 32.2306Z" fill="#DEE1ED"></path><path d="M15.9308 16.1305C17.0308 16.3305 17.8308 17.4305 17.6308 18.5305C17.4308 19.6305 16.3308 20.4305 15.2308 20.2305C14.1308 20.0305 13.3307 18.9305 13.5307 17.8305C13.7307 16.6305 14.8308 15.9305 15.9308 16.1305Z" fill="#DEE1ED"></path><path d="M15.9308 0.0304159C17.0308 0.230416 17.8308 1.33044 17.6308 2.43044C17.4308 3.53044 16.3308 4.33039 15.2308 4.13039C14.1308 3.93039 13.3307 2.83043 13.5307 1.73043C13.7307 0.630428 14.8308 -0.169584 15.9308 0.0304159Z" fill="#DEE1ED"></path><path d="M29.5303 64.3306C30.6303 64.5306 31.4303 65.6307 31.2303 66.7307C31.0303 67.8307 29.9303 68.6307 28.8303 68.4307C27.7303 68.2307 26.9304 67.1307 27.1304 66.0307C27.3304 64.8307 28.3303 64.1306 29.5303 64.3306Z" fill="#DEE1ED"></path><path d="M29.5303 48.2306C30.6303 48.4306 31.4303 49.5306 31.2303 50.6306C31.0303 51.7306 29.9303 52.5306 28.8303 52.3306C27.7303 52.1306 26.9304 51.0306 27.1304 49.9306C27.3304 48.8306 28.3303 48.0306 29.5303 48.2306Z" fill="#DEE1ED"></path><path d="M29.5303 32.2306C30.6303 32.4306 31.4303 33.5306 31.2303 34.6306C31.0303 35.7306 29.9303 36.5306 28.8303 36.3306C27.7303 36.1306 26.9304 35.0306 27.1304 33.9306C27.3304 32.7306 28.3303 31.9306 29.5303 32.2306Z" fill="#DEE1ED"></path><path d="M29.5303 16.1305C30.6303 16.3305 31.4303 17.4305 31.2303 18.5305C31.0303 19.6305 29.9303 20.4305 28.8303 20.2305C27.7303 20.0305 26.9304 18.9305 27.1304 17.8305C27.3304 16.6305 28.3303 15.9305 29.5303 16.1305Z" fill="#DEE1ED"></path><path d="M29.5303 0.0304159C30.6303 0.230416 31.4303 1.33044 31.2303 2.43044C31.0303 3.53044 29.9303 4.33039 28.8303 4.13039C27.7303 3.93039 26.9304 2.83043 27.1304 1.73043C27.3304 0.630428 28.3303 -0.169584 29.5303 0.0304159Z" fill="#DEE1ED"></path><path d="M43.0303 64.3306C44.1303 64.5306 44.9303 65.6307 44.7303 66.7307C44.5303 67.8307 43.4303 68.6307 42.3303 68.4307C41.2303 68.2307 40.4304 67.1307 40.6304 66.0307C40.8304 64.8307 41.9303 64.1306 43.0303 64.3306Z" fill="#DEE1ED"></path><path d="M43.0303 48.2306C44.1303 48.4306 44.9303 49.5306 44.7303 50.6306C44.5303 51.7306 43.4303 52.5306 42.3303 52.3306C41.2303 52.1306 40.4304 51.0306 40.6304 49.9306C40.8304 48.8306 41.9303 48.0306 43.0303 48.2306Z" fill="#DEE1ED"></path><path d="M43.0303 32.2306C44.1303 32.4306 44.9303 33.5306 44.7303 34.6306C44.5303 35.7306 43.4303 36.5306 42.3303 36.3306C41.2303 36.1306 40.4304 35.0306 40.6304 33.9306C40.8304 32.7306 41.9303 31.9306 43.0303 32.2306Z" fill="#DEE1ED"></path><path d="M43.0303 16.1305C44.1303 16.3305 44.9303 17.4305 44.7303 18.5305C44.5303 19.6305 43.4303 20.4305 42.3303 20.2305C41.2303 20.0305 40.4304 18.9305 40.6304 17.8305C40.8304 16.6305 41.9303 15.9305 43.0303 16.1305Z" fill="#DEE1ED"></path><path d="M43.0303 0.0304159C44.1303 0.230416 44.9303 1.33044 44.7303 2.43044C44.5303 3.53044 43.4303 4.33039 42.3303 4.13039C41.2303 3.93039 40.4304 2.83043 40.6304 1.73043C40.8304 0.630428 41.9303 -0.169584 43.0303 0.0304159Z" fill="#DEE1ED"></path><path d="M56.5303 64.3306C57.6303 64.5306 58.4303 65.6307 58.2303 66.7307C58.0303 67.8307 56.9303 68.6307 55.8303 68.4307C54.7303 68.2307 53.9304 67.1307 54.1304 66.0307C54.3304 64.8307 55.4303 64.1306 56.5303 64.3306Z" fill="#DEE1ED"></path><path d="M56.5303 48.2306C57.6303 48.4306 58.4303 49.5306 58.2303 50.6306C58.0303 51.7306 56.9303 52.5306 55.8303 52.3306C54.7303 52.1306 53.9304 51.0306 54.1304 49.9306C54.3304 48.8306 55.4303 48.0306 56.5303 48.2306Z" fill="#DEE1ED"></path><path d="M56.5303 32.2306C57.6303 32.4306 58.4303 33.5306 58.2303 34.6306C58.0303 35.7306 56.9303 36.5306 55.8303 36.3306C54.7303 36.1306 53.9304 35.0306 54.1304 33.9306C54.3304 32.7306 55.4303 31.9306 56.5303 32.2306Z" fill="#DEE1ED"></path><path d="M56.5303 16.1305C57.6303 16.3305 58.4303 17.4305 58.2303 18.5305C58.0303 19.6305 56.9303 20.4305 55.8303 20.2305C54.7303 20.0305 53.9304 18.9305 54.1304 17.8305C54.3304 16.6305 55.4303 15.9305 56.5303 16.1305Z" fill="#DEE1ED"></path><path d="M56.5303 0.0304159C57.6303 0.230416 58.4303 1.33044 58.2303 2.43044C58.0303 3.53044 56.9303 4.33039 55.8303 4.13039C54.7303 3.93039 53.9304 2.83043 54.1304 1.73043C54.3304 0.630428 55.4303 -0.169584 56.5303 0.0304159Z" fill="#DEE1ED"></path><path d="M70.131 64.3306C71.231 64.5306 72.0309 65.6307 71.8309 66.7307C71.6309 67.8307 70.5309 68.6307 69.4309 68.4307C68.3309 68.2307 67.5309 67.1307 67.7309 66.0307C67.8309 64.8307 68.931 64.1306 70.131 64.3306Z" fill="#DEE1ED"></path><path d="M70.131 48.2306C71.231 48.4306 72.0309 49.5306 71.8309 50.6306C71.6309 51.7306 70.5309 52.5306 69.4309 52.3306C68.3309 52.1306 67.5309 51.0306 67.7309 49.9306C67.8309 48.8306 68.931 48.0306 70.131 48.2306Z" fill="#DEE1ED"></path><path d="M70.131 32.2306C71.231 32.4306 72.0309 33.5306 71.8309 34.6306C71.6309 35.7306 70.5309 36.5306 69.4309 36.3306C68.3309 36.1306 67.5309 35.0306 67.7309 33.9306C67.8309 32.7306 68.931 31.9306 70.131 32.2306Z" fill="#DEE1ED"></path><path d="M70.131 16.1305C71.231 16.3305 72.0309 17.4305 71.8309 18.5305C71.6309 19.6305 70.5309 20.4305 69.4309 20.2305C68.3309 20.0305 67.5309 18.9305 67.7309 17.8305C67.8309 16.6305 68.931 15.9305 70.131 16.1305Z" fill="#DEE1ED"></path><path d="M70.131 0.0304159C71.231 0.230416 72.0309 1.33044 71.8309 2.43044C71.6309 3.53044 70.5309 4.33039 69.4309 4.13039C68.3309 3.93039 67.5309 2.83043 67.7309 1.73043C67.8309 0.630428 68.931 -0.169584 70.131 0.0304159Z" fill="#DEE1ED"></path><path d="M83.631 64.3306C84.731 64.5306 85.5309 65.6307 85.3309 66.7307C85.1309 67.8307 84.0309 68.6307 82.9309 68.4307C81.8309 68.2307 81.0309 67.1307 81.2309 66.0307C81.4309 64.8307 82.531 64.1306 83.631 64.3306Z" fill="#DEE1ED"></path><path d="M83.631 48.2306C84.731 48.4306 85.5309 49.5306 85.3309 50.6306C85.1309 51.7306 84.0309 52.5306 82.9309 52.3306C81.8309 52.1306 81.0309 51.0306 81.2309 49.9306C81.4309 48.8306 82.531 48.0306 83.631 48.2306Z" fill="#DEE1ED"></path><path d="M83.631 32.2306C84.731 32.4306 85.5309 33.5306 85.3309 34.6306C85.1309 35.7306 84.0309 36.5306 82.9309 36.3306C81.8309 36.1306 81.0309 35.0306 81.2309 33.9306C81.4309 32.7306 82.531 31.9306 83.631 32.2306Z" fill="#DEE1ED"></path><path d="M83.631 16.1305C84.731 16.3305 85.5309 17.4305 85.3309 18.5305C85.1309 19.6305 84.0309 20.4305 82.9309 20.2305C81.8309 20.0305 81.0309 18.9305 81.2309 17.8305C81.4309 16.6305 82.531 15.9305 83.631 16.1305Z" fill="#DEE1ED"></path><path d="M83.631 0.0304159C84.731 0.230416 85.5309 1.33044 85.3309 2.43044C85.1309 3.53044 84.0309 4.33039 82.9309 4.13039C81.8309 3.93039 81.0309 2.83043 81.2309 1.73043C81.4309 0.630428 82.531 -0.169584 83.631 0.0304159Z" fill="#DEE1ED"></path></svg>
          </div>
          <div className={styles.imgColDots2}>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="103" viewBox="0 0 59 103" fill="none"><path d="M3.51936 2.61116C3.34896 3.41451 2.41176 3.99877 1.47457 3.85271C0.537391 3.70664 -0.144208 2.90328 0.0261893 2.09993C0.196586 1.29659 1.13379 0.712324 2.07097 0.858387C3.09336 1.00445 3.68976 1.80781 3.51936 2.61116Z" fill="#DEE1ED"></path><path d="M17.2361 2.61116C17.0657 3.41451 16.1286 3.99877 15.1914 3.85271C14.2542 3.70664 13.5726 2.90328 13.743 2.09993C13.9134 1.29659 14.8505 0.712324 15.7877 0.858387C16.7249 1.00445 17.4065 1.80781 17.2361 2.61116Z" fill="#DEE1ED"></path><path d="M30.8679 2.61116C30.6975 3.41451 29.7604 3.99877 28.8232 3.85271C27.886 3.70664 27.2044 2.90328 27.3748 2.09993C27.5452 1.29659 28.4824 0.712324 29.4196 0.858387C30.4419 1.00445 31.1235 1.80781 30.8679 2.61116Z" fill="#DEE1ED"></path><path d="M44.5848 2.61116C44.4144 3.41451 43.4772 3.99877 42.54 3.85271C41.6028 3.70664 40.9212 2.90328 41.0916 2.09993C41.262 1.29659 42.1992 0.712324 43.1364 0.858387C44.1588 1.00445 44.7552 1.80781 44.5848 2.61116Z" fill="#DEE1ED"></path><path d="M58.3015 2.61116C58.1311 3.41451 57.1939 3.99877 56.2568 3.85271C55.3196 3.70664 54.638 2.90328 54.8084 2.09993C54.9788 1.29659 55.916 0.712324 56.8532 0.858387C57.7903 1.00445 58.4719 1.80781 58.3015 2.61116Z" fill="#DEE1ED"></path><path d="M3.51936 12.4676C3.34896 13.271 2.41176 13.8552 1.47457 13.7092C0.537391 13.5631 -0.144208 12.7597 0.0261893 11.9564C0.196586 11.153 1.13379 10.5688 2.07097 10.7148C3.09336 10.8609 3.68976 11.6643 3.51936 12.4676Z" fill="#DEE1ED"></path><path d="M17.2361 12.4676C17.0657 13.271 16.1286 13.8552 15.1914 13.7092C14.2542 13.5631 13.5726 12.7597 13.743 11.9564C13.9134 11.153 14.8505 10.5688 15.7877 10.7148C16.7249 10.8609 17.4065 11.6643 17.2361 12.4676Z" fill="#DEE1ED"></path><path d="M30.8679 12.4676C30.6975 13.271 29.7604 13.8552 28.8232 13.7092C27.886 13.5631 27.2044 12.7597 27.3748 11.9564C27.5452 11.153 28.4824 10.5688 29.4196 10.7148C30.4419 10.8609 31.1235 11.6643 30.8679 12.4676Z" fill="#DEE1ED"></path><path d="M44.5848 12.4676C44.4144 13.271 43.4772 13.8552 42.54 13.7092C41.6028 13.5631 40.9212 12.7597 41.0916 11.9564C41.262 11.153 42.1992 10.5688 43.1364 10.7148C44.1588 10.8609 44.7552 11.6643 44.5848 12.4676Z" fill="#DEE1ED"></path><path d="M58.3015 12.4676C58.1311 13.271 57.1939 13.8552 56.2568 13.7092C55.3196 13.5631 54.638 12.7597 54.8084 11.9564C54.9788 11.153 55.916 10.5688 56.8532 10.7148C57.7903 10.8609 58.4719 11.6643 58.3015 12.4676Z" fill="#DEE1ED"></path><path d="M3.51936 22.3973C3.34896 23.2006 2.41176 23.7849 1.47457 23.6388C0.537391 23.4927 -0.144208 22.6894 0.0261893 21.886C0.196586 21.0827 1.13379 20.4985 2.07097 20.6445C3.09336 20.7906 3.68976 21.5209 3.51936 22.3973Z" fill="#DEE1ED"></path><path d="M17.2361 22.3973C17.0657 23.2006 16.1286 23.7849 15.1914 23.6388C14.2542 23.4927 13.5726 22.6894 13.743 21.886C13.9134 21.0827 14.8505 20.4985 15.7877 20.6445C16.7249 20.7906 17.4065 21.5209 17.2361 22.3973Z" fill="#DEE1ED"></path><path d="M30.8679 22.3973C30.6975 23.2006 29.7604 23.7849 28.8232 23.6388C27.886 23.4927 27.2044 22.6894 27.3748 21.886C27.5452 21.0827 28.4824 20.4985 29.4196 20.6445C30.4419 20.7906 31.1235 21.5209 30.8679 22.3973Z" fill="#DEE1ED"></path><path d="M44.5848 22.3973C44.4144 23.2006 43.4772 23.7849 42.54 23.6388C41.6028 23.4927 40.9212 22.6894 41.0916 21.886C41.262 21.0827 42.1992 20.4985 43.1364 20.6445C44.1588 20.7906 44.7552 21.5209 44.5848 22.3973Z" fill="#DEE1ED"></path><path d="M58.3015 22.3973C58.1311 23.2006 57.1939 23.7849 56.2568 23.6388C55.3196 23.4927 54.638 22.6894 54.8084 21.886C54.9788 21.0827 55.916 20.4985 56.8532 20.6445C57.7903 20.7906 58.4719 21.5209 58.3015 22.3973Z" fill="#DEE1ED"></path><path d="M3.51936 32.2537C3.34896 33.057 2.41176 33.6413 1.47457 33.4952C0.537391 33.3492 -0.144208 32.5458 0.0261893 31.7425C0.196586 30.9391 1.13379 30.3549 2.07097 30.501C3.09336 30.647 3.68976 31.4503 3.51936 32.2537Z" fill="#DEE1ED"></path><path d="M17.2361 32.2537C17.0657 33.057 16.1286 33.6413 15.1914 33.4952C14.2542 33.3492 13.5726 32.5458 13.743 31.7425C13.9134 30.9391 14.8505 30.3549 15.7877 30.501C16.7249 30.647 17.4065 31.4503 17.2361 32.2537Z" fill="#DEE1ED"></path><path d="M30.8679 32.2537C30.6975 33.057 29.7604 33.6413 28.8232 33.4952C27.886 33.3492 27.2044 32.5458 27.3748 31.7425C27.5452 30.9391 28.4824 30.3549 29.4196 30.501C30.4419 30.647 31.1235 31.4503 30.8679 32.2537Z" fill="#DEE1ED"></path><path d="M44.5848 32.2537C44.4144 33.057 43.4772 33.6413 42.54 33.4952C41.6028 33.3492 40.9212 32.5458 41.0916 31.7425C41.262 30.9391 42.1992 30.3549 43.1364 30.501C44.1588 30.647 44.7552 31.4503 44.5848 32.2537Z" fill="#DEE1ED"></path><path d="M58.3015 32.2537C58.1311 33.057 57.1939 33.6413 56.2568 33.4952C55.3196 33.3492 54.638 32.5458 54.8084 31.7425C54.9788 30.9391 55.916 30.3549 56.8532 30.501C57.7903 30.647 58.4719 31.4503 58.3015 32.2537Z" fill="#DEE1ED"></path><path d="M3.51936 42.1101C3.34896 42.9135 2.41176 43.4978 1.47457 43.3517C0.537391 43.2056 -0.144208 42.4023 0.0261893 41.5989C0.196586 40.7956 1.13379 40.2113 2.07097 40.3574C3.09336 40.5035 3.68976 41.3068 3.51936 42.1101Z" fill="#DEE1ED"></path><path d="M17.2361 42.1101C17.0657 42.9135 16.1286 43.4978 15.1914 43.3517C14.2542 43.2056 13.5726 42.4023 13.743 41.5989C13.9134 40.7956 14.8505 40.2113 15.7877 40.3574C16.7249 40.5035 17.4065 41.3068 17.2361 42.1101Z" fill="#DEE1ED"></path><path d="M30.8679 42.1101C30.6975 42.9135 29.7604 43.4978 28.8232 43.3517C27.886 43.2056 27.2044 42.4023 27.3748 41.5989C27.5452 40.7956 28.4824 40.2113 29.4196 40.3574C30.4419 40.5035 31.1235 41.3068 30.8679 42.1101Z" fill="#DEE1ED"></path><path d="M44.5848 42.1101C44.4144 42.9135 43.4772 43.4978 42.54 43.3517C41.6028 43.2056 40.9212 42.4023 41.0916 41.5989C41.262 40.7956 42.1992 40.2113 43.1364 40.3574C44.1588 40.5035 44.7552 41.3068 44.5848 42.1101Z" fill="#DEE1ED"></path><path d="M58.3025 42.1101C58.1321 42.9135 57.1949 43.4978 56.2577 43.3517C55.3205 43.2056 54.639 42.4023 54.8094 41.5989C54.9798 40.7956 55.9169 40.2113 56.8541 40.3574C57.7913 40.5035 58.4729 41.3068 58.3025 42.1101Z" fill="#DEE1ED"></path><path d="M3.51936 52.0399C3.34896 52.8432 2.41176 53.4274 1.47457 53.2814C0.537391 53.1353 -0.144208 52.332 0.0261893 51.5286C0.196586 50.7253 1.13379 50.141 2.07097 50.2871C3.09336 50.3601 3.68976 51.1635 3.51936 52.0399Z" fill="#DEE1ED"></path><path d="M17.2361 52.0399C17.0657 52.8432 16.1286 53.4274 15.1914 53.2814C14.2542 53.1353 13.5726 52.332 13.743 51.5286C13.9134 50.7253 14.8505 50.141 15.7877 50.2871C16.7249 50.3601 17.4065 51.1635 17.2361 52.0399Z" fill="#DEE1ED"></path><path d="M30.8679 52.0399C30.6975 52.8432 29.7604 53.4274 28.8232 53.2814C27.886 53.1353 27.2044 52.332 27.3748 51.5286C27.5452 50.7253 28.4824 50.141 29.4196 50.2871C30.4419 50.3601 31.1235 51.1635 30.8679 52.0399Z" fill="#DEE1ED"></path><path d="M44.5848 52.0399C44.4144 52.8432 43.4772 53.4274 42.54 53.2814C41.6028 53.1353 40.9212 52.332 41.0916 51.5286C41.262 50.7253 42.1992 50.141 43.1364 50.2871C44.1588 50.3601 44.7552 51.1635 44.5848 52.0399Z" fill="#DEE1ED"></path><path d="M58.3015 52.0399C58.1311 52.8432 57.1939 53.4274 56.2568 53.2814C55.3196 53.1353 54.638 52.332 54.8084 51.5286C54.9788 50.7253 55.916 50.141 56.8532 50.2871C57.7903 50.3601 58.4719 51.1635 58.3015 52.0399Z" fill="#DEE1ED"></path><path d="M3.51936 61.8963C3.34896 62.6997 2.41176 63.2839 1.47457 63.1378C0.537391 62.9918 -0.144208 62.1884 0.0261893 61.3851C0.196586 60.5817 1.13379 59.9975 2.07097 60.1435C3.09336 60.2896 3.68976 61.093 3.51936 61.8963Z" fill="#DEE1ED"></path><path d="M17.2361 61.8963C17.0657 62.6997 16.1286 63.2839 15.1914 63.1378C14.2542 62.9918 13.5726 62.1884 13.743 61.3851C13.9134 60.5817 14.8505 59.9975 15.7877 60.1435C16.7249 60.2896 17.4065 61.093 17.2361 61.8963Z" fill="#DEE1ED"></path><path d="M30.8679 61.8963C30.6975 62.6997 29.7604 63.2839 28.8232 63.1378C27.886 62.9918 27.2044 62.1884 27.3748 61.3851C27.5452 60.5817 28.4824 59.9975 29.4196 60.1435C30.4419 60.2896 31.1235 61.093 30.8679 61.8963Z" fill="#DEE1ED"></path><path d="M44.5848 61.8963C44.4144 62.6997 43.4772 63.2839 42.54 63.1378C41.6028 62.9918 40.9212 62.1884 41.0916 61.3851C41.262 60.5817 42.1992 59.9975 43.1364 60.1435C44.1588 60.2896 44.7552 61.093 44.5848 61.8963Z" fill="#DEE1ED"></path><path d="M58.3015 61.8963C58.1311 62.6997 57.1939 63.2839 56.2568 63.1378C55.3196 62.9918 54.638 62.1884 54.8084 61.3851C54.9788 60.5817 55.916 59.9975 56.8532 60.1435C57.7903 60.2896 58.4719 61.093 58.3015 61.8963Z" fill="#DEE1ED"></path><path d="M3.51936 71.7528C3.34896 72.5561 2.41176 73.1403 1.47457 72.9943C0.537391 72.8482 -0.144208 72.0449 0.0261893 71.2415C0.196586 70.4382 1.13379 69.8539 2.07097 70C3.09336 70.1461 3.68976 70.9494 3.51936 71.7528Z" fill="#DEE1ED"></path><path d="M17.2361 71.7528C17.0657 72.5561 16.1286 73.1403 15.1914 72.9943C14.2542 72.8482 13.5726 72.0449 13.743 71.2415C13.9134 70.4382 14.8505 69.8539 15.7877 70C16.7249 70.1461 17.4065 70.9494 17.2361 71.7528Z" fill="#DEE1ED"></path><path d="M30.8679 71.7528C30.6975 72.5561 29.7604 73.1403 28.8232 72.9943C27.886 72.8482 27.2044 72.0449 27.3748 71.2415C27.5452 70.4382 28.4824 69.8539 29.4196 70C30.4419 70.1461 31.1235 70.9494 30.8679 71.7528Z" fill="#DEE1ED"></path><path d="M44.5848 71.7528C44.4144 72.5561 43.4772 73.1403 42.54 72.9943C41.6028 72.8482 40.9212 72.0449 41.0916 71.2415C41.262 70.4382 42.1992 69.8539 43.1364 70C44.1588 70.1461 44.7552 70.9494 44.5848 71.7528Z" fill="#DEE1ED"></path><path d="M58.3015 71.7528C58.1311 72.5561 57.1939 73.1403 56.2568 72.9943C55.3196 72.8482 54.638 72.0449 54.8084 71.2415C54.9788 70.4382 55.916 69.8539 56.8532 70C57.7903 70.1461 58.4719 70.9494 58.3015 71.7528Z" fill="#DEE1ED"></path><path d="M3.51936 81.6097C3.34896 82.413 2.41176 82.9973 1.47457 82.8512C0.537391 82.7051 -0.144208 81.9018 0.0261893 81.0985C0.196586 80.2951 1.13379 79.7109 2.07097 79.8569C3.09336 80.003 3.68976 80.8063 3.51936 81.6097Z" fill="#DEE1ED"></path><path d="M15.4474 82.9238C16.4355 82.9238 17.2366 82.2371 17.2366 81.3901C17.2366 80.5431 16.4355 79.8564 15.4474 79.8564C14.4593 79.8564 13.6582 80.5431 13.6582 81.3901C13.6582 82.2371 14.4593 82.9238 15.4474 82.9238Z" fill="#DEE1ED"></path><path d="M29.3737 82.8955C30.3527 82.7811 31.0383 82.008 30.905 81.1687C30.7716 80.3295 29.8699 79.7419 28.8908 79.8563C27.9118 79.9707 27.2262 80.7438 27.3596 81.583C27.4929 82.4223 28.3946 83.0099 29.3737 82.8955Z" fill="#DEE1ED"></path><path d="M44.5848 81.6097C44.4144 82.413 43.4772 82.9973 42.54 82.8512C41.6028 82.7051 40.9212 81.9018 41.0916 81.0985C41.262 80.2951 42.1992 79.7109 43.1364 79.8569C44.1588 80.003 44.7552 80.8063 44.5848 81.6097Z" fill="#DEE1ED"></path><path d="M58.3015 81.6097C58.1311 82.413 57.1939 82.9973 56.2568 82.8512C55.3196 82.7051 54.638 81.9018 54.8084 81.0985C54.9788 80.2951 55.916 79.7109 56.8532 79.8569C57.7903 80.003 58.4719 80.8063 58.3015 81.6097Z" fill="#DEE1ED"></path><path d="M3.51936 91.5389C3.34896 92.3422 2.41176 92.9265 1.47457 92.7804C0.537391 92.6344 -0.144208 91.831 0.0261893 91.0277C0.196586 90.2243 1.13379 89.6401 2.07097 89.7861C3.09336 89.9322 3.68976 90.6625 3.51936 91.5389Z" fill="#DEE1ED"></path><path d="M15.4474 92.7802C16.4355 92.7802 17.2366 92.0936 17.2366 91.2465C17.2366 90.3995 16.4355 89.7129 15.4474 89.7129C14.4593 89.7129 13.6582 90.3995 13.6582 91.2465C13.6582 92.0936 14.4593 92.7802 15.4474 92.7802Z" fill="#DEE1ED"></path><path d="M29.3697 92.7514C30.3488 92.637 31.0344 91.8639 30.9011 91.0247C30.7677 90.1854 29.866 89.5979 28.8869 89.7123C27.9079 89.8267 27.2223 90.5998 27.3557 91.439C27.489 92.2782 28.3907 92.8658 29.3697 92.7514Z" fill="#DEE1ED"></path><path d="M44.5848 91.5389C44.4144 92.3422 43.4772 92.9265 42.54 92.7804C41.6028 92.6344 40.9212 91.831 41.0916 91.0277C41.262 90.2243 42.1992 89.6401 43.1364 89.7861C44.1588 89.9322 44.7552 90.6625 44.5848 91.5389Z" fill="#DEE1ED"></path><path d="M58.3015 91.5389C58.1311 92.3422 57.1939 92.9265 56.2568 92.7804C55.3196 92.6344 54.638 91.831 54.8084 91.0277C54.9788 90.2243 55.916 89.6401 56.8532 89.7861C57.7903 89.9322 58.4719 90.6625 58.3015 91.5389Z" fill="#DEE1ED"></path><path d="M3.51936 101.395C3.34896 102.199 2.41176 102.783 1.47457 102.637C0.537391 102.491 -0.144208 101.687 0.0261893 100.884C0.196586 100.081 1.13379 99.4965 2.07097 99.6426C3.09336 99.7886 3.68976 100.592 3.51936 101.395Z" fill="#DEE1ED"></path><path d="M15.4474 102.637C16.4355 102.637 17.2366 101.95 17.2366 101.103C17.2366 100.256 16.4355 99.5693 15.4474 99.5693C14.4593 99.5693 13.6582 100.256 13.6582 101.103C13.6582 101.95 14.4593 102.637 15.4474 102.637Z" fill="#DEE1ED"></path><path d="M29.3668 102.607C30.3458 102.493 31.0315 101.72 30.8981 100.881C30.7648 100.041 29.863 99.4538 28.884 99.5682C27.905 99.6826 27.2194 100.456 27.3527 101.295C27.4861 102.134 28.3878 102.722 29.3668 102.607Z" fill="#DEE1ED"></path><path d="M44.5848 101.395C44.4144 102.199 43.4772 102.783 42.54 102.637C41.6028 102.491 40.9212 101.687 41.0916 100.884C41.262 100.081 42.1992 99.4965 43.1364 99.6426C44.1588 99.7886 44.7552 100.592 44.5848 101.395Z" fill="#DEE1ED"></path><path d="M58.3025 101.395C58.1321 102.199 57.1949 102.783 56.2577 102.637C55.3205 102.491 54.639 101.687 54.8094 100.884C54.9798 100.081 55.9169 99.4965 56.8541 99.6426C57.7913 99.7886 58.4729 100.592 58.3025 101.395Z" fill="#DEE1ED"></path></svg>
          </div>
        </li>
        <li className={`${styles.col} flex flex-column align-start gap-10`}>
          <div className={`${styles.logoContainer} flex align-center justify-start`}>
            <Image className={`${styles.logo}`} src={'/asset/image/logo.png'} alt='شرکت توسعه صنعت آینده آرشید'
              width={100} height={100} style={{ width: "100%", height: "100%", objectFit: 'cover' }} quality={100}
            />
          </div>
          <h2 className={styles.title}>معرفی شرکت</h2>
          <h3 className={styles.slang}>اعتبار درخشان ما، نتیجه اعتماد شماست</h3>
          <p className={styles.content}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
          <div className={`${styles.btns} flex align-center justify-start gap-15`}>
            <Button type='dark' size='middle' href='/about' >درباره ما بدانید</Button>
            <Button type='primary' size='middle' href='/contact' leftIcon='fa-solid fa-arrow-left'>ارتباط با ما</Button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CompanyIntro;