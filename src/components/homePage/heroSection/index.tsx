'use client';

import styles from './index.module.css';
// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import data from './data.json';
import { useEffect, useRef, useState } from 'react';
import SwiperCore from 'swiper';
import Link from 'next/link';
import Button from '../../ui/button';

interface HTMLElementWithSwiper extends HTMLElement {
  swiper: any;
}

const HeroSection = () => {
  const prevRef = useRef<HTMLElement>(null);
  const nextRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [prevImage, setPrevImage] = useState<string>('');
  const [nextImage, setNextImage] = useState<string>('');
  const [hoveredButton, setHoveredButton] = useState<'prev' | 'next' | null>(null);


  useEffect(() => {
    const swiperEl = document.querySelector('.swiper') as HTMLElementWithSwiper | null;
    if (swiperEl && swiperEl.swiper) {
      swiperEl.swiper.params.navigation.prevEl = prevRef.current;
      swiperEl.swiper.params.navigation.nextEl = nextRef.current;
      swiperEl.swiper.navigation.init();
      swiperEl.swiper.navigation.update();
    }
  }, []);
  useEffect(() => {
    const prevIndex: number = (activeIndex - 1 + data.length) % data.length;
    const nextIndex: number = (activeIndex + 1) % data.length;
    setPrevImage(data[prevIndex].image);
    setNextImage(data[nextIndex].image);
  }, [activeIndex]);

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveIndex(swiper.realIndex);
  };


  const slideClass = (index: number) => {
    return index === activeIndex ? styles.active : null;
  };
  console.log(activeIndex);
  return (
    <div className={styles.herosection}>
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        // pagination={{ type: "bullets", clickable: true }}
        autoplay={
          {
            delay: 5000,
            disableOnInteraction: false
          }
        }
        dir='ltr'
        loop={true}
        modules={[Autoplay, Navigation]}
        className={styles.swiper}
        onSlideChange={(swiper: SwiperCore) => handleSlideChange(swiper)}
        onBeforeInit={(swiper) => {
          (swiper.params.navigation as any).prevEl = prevRef.current;
          (swiper.params.navigation as any).nextEl = nextRef.current;
        }}
      >
        {data.map((item, idx) => (
          <SwiperSlide className={styles.swiperslide} key={item.id}>
            <div className={`${styles.sliderInner} ${slideClass(idx)} flex flex-column align-center justify-center gap-15`}
              style={{ backgroundImage: `url(${item.image})` }}>
              {item.tagline && (
                <p className={styles.tagline}>
                  {item.tagline}
                </p>
              )}
              <h2 className={styles.title}>
                {item.title}
              </h2>
              <div className={styles.btn}>
                {/* <Link className={`${styles.btnLink} flex align-center justify-center`} href={'/contact'}>تماس با آرشید</Link> */}
                <Button type='default' size='middle' href='/contact'>تماس با آرشید</Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <i ref={prevRef}
          className={`${styles.customNavigationButton} ${styles.customNavigationButtonPrev} fa-solid fa-angle-left`}
          style={{ backgroundImage: hoveredButton === 'prev' ? `url(${prevImage})` : 'none' }}
          onMouseEnter={() => setHoveredButton('prev')}
          onMouseLeave={() => setHoveredButton(null)}
        ></i>
        <i ref={nextRef}
          className={`${styles.customNavigationButton} ${styles.customNavigationButtonNext} fa-solid fa-angle-right`}
          style={{ backgroundImage: hoveredButton === 'next' ? `url(${nextImage})` : 'none' }}
          onMouseEnter={() => setHoveredButton('next')}
          onMouseLeave={() => setHoveredButton(null)}
        ></i>
      </Swiper>
    </div>
  );
};

export default HeroSection;