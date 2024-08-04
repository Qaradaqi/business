import CardRender from '@/components/homePage/cardRender';
import styles from './page.module.css';
import HeroSection from '@/components/homePage/heroSection';
import data from '@/components/ui/card/data.json';
import CompanyIntro from '@/components/homePage/introduction';

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className='container'>
        <div className={styles.cover}></div>
        <CardRender items={data} />
        <CompanyIntro />
      </div>
    </>
  );
};

export default Home;
