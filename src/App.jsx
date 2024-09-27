import Navbar from './Components/Navbar';
//import AboutSection from './Components/AboutSection';
//import HeroBanner from './Components/HeroBanner';
//import BrandsSection from './Components/BrandsSection';
import './App.css';
import HeroBannerVideo from './Components/HeroBannerVideo';
import HeroBannerSnow from './Components/HeroBannerBalls';



function App() {
  return (
    <div>
      <Navbar />
      <div className=''>
        <section id="home"  >
          <HeroBannerSnow />
        </section>
        <section id="portfolio"  >
          <HeroBannerVideo />
        </section>
        <section id="about"  >
          
        </section>
        
      </div>
    </div>
  );
}

export default App;