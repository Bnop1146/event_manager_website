import Navbar from '../src/Components/Navbar';
import AboutSection from '../src/Components/AboutSection';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className=''>
        <section id="home"  >
          <AboutSection />
        </section>
        
      </div>
    </div>
  );
}

export default App;