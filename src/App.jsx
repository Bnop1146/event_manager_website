import Navbar from './Components/Navbar';
import HeroBannerBalls from './Components/HeroBannerBalls';
import AboutSection from './Components/AboutSection';
//import HeroBanner from './Components/HeroBanner';
import BrandsSection from './Components/BrandsSection';
import './App.css';
import Test from './Components/Text';





function App() {
  return (
    <div>
      <Navbar />
      <div className=''>
        <section id="home"  >
          <HeroBannerBalls />
        </section>
        <section id="about"  >
          <AboutSection />
        </section>
        <section id="portfolio"  >
          <BrandsSection />
        </section>
          <Test />
        
      </div>
    </div>
  );
}

export default App;