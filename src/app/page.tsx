import CardRender from '@/components/homePage/cardRender';
import styles from './page.module.css';
import HeroSection from '@/components/homePage/heroSection';
import data from '@/components/ui/card/data.json';
import CompanyIntro from '@/components/homePage/introduction';
import Pros from '@/components/homePage/pros';
import PreviousProjects from '@/components/homePage/projects';
import projects from '@/components/homePage/projects/data.json';
import Strategies from '@/components/homePage/strategy';
import Consult from '@/components/homePage/consult';


const Home = () => {
  return (
    <>
      <HeroSection />
      <div className='container'>
        <div className={styles.cover}></div>
        <CardRender items={data} />
        <CompanyIntro />
        <Pros />
        <PreviousProjects data={projects} />
        <Strategies />
        <Consult />
      </div>
    </>
  );
};

export default Home;
