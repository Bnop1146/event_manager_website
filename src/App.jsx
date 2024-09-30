import Navbar from './Components/Navbar';
import HeroBannerBalls from './Components/HeroBannerBalls';
import AboutSection from './Components/AboutSection';
//import HeroBanner from './Components/HeroBanner';
import BrandsSection from './Components/BrandsSection';
import './App.css';






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

        
      </div>
    </div>
  );
}

export default App;