import Navbar from './Components/Navbar';
import AboutSection from './Components/AboutSection';
import HeroBanner from './Components/HeroBanner';
import BrandsSection from './Components/BrandsSection';
import './App.css';



function App() {
  return (
    <div>
      <Navbar />
      <div className=''>
        <section id="home"  >
          <HeroBanner />
        </section>
        <section id="portfolio"  >
          <BrandsSection />
        </section>
        <section id="about"  >
          <AboutSection />
        </section>
        
      </div>
    </div>
  );
}

export default App;