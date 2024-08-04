'use client';

import styles from './index.module.css';
import { useEffect, useRef, useState } from 'react';
import SwiperCore from 'swiper';
import Button from '../../ui/button';
import data from './data.json';
// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';

interface HTMLElementWithSwiper extends HTMLElement {
  swiper: any;
}

const HeroSection = () => {
  const prevRef = useRef<HTMLElement>(null);
  const nextRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isOverlayActive, setIsOverlayActive] = useState<boolean>(true);
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

  useEffect(() => {
    // Remove overlay image when slide change starts
    setIsOverlayActive(false);

    // Add overlay image after a delay to allow transition
    const timer = setTimeout(() => {
      setIsOverlayActive(true);
    }, 300); // Adjust the delay to match your transition duration

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [activeIndex]);

  return (
    <div className={styles.herosection}>
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        dir='rtl'
        effect={'coverflow'}
        grabCursor={true}
        // pagination={{ type: "bullets", clickable: true }}
        autoplay={
          {
            delay: 5000,
            disableOnInteraction: false
          }
        }
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
      <div
        className={`${styles.overlayImage} ${isOverlayActive ? styles.overlayImageActive : ''}`}
        style={{backgroundImage: `url("/asset/image/hs/shape-slide-33.png")`}}
      >
      </div>
    </div>
  );
};

export default HeroSection;