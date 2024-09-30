import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faCalendarAlt, faBuilding, faCity } from '@fortawesome/free-solid-svg-icons';
import image1 from '../assets/images/Bord opsætning fint.png';
import image2 from '../assets/images/Driven by dreams foto .png';
import image3 from '../assets/images/Menu på tallerken event.png';
import image4 from '../assets/images/Porche fælg med blomster.png';
import image5 from '../assets/images/Porche med blade på.png';
import image6 from '../assets/images/The bar, event billede.png';

function AboutSection() { 

  return (
    <section className="bg-white py-12 relative overflow-hidden">
      <div className='flex flex-col md:flex-row items-stretch justify-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 space-y-8 md:space-y-0 mb-24 md:mb-40 gap-4'>
        {/* Left Section */}
        <div className='md:w-1/2 w-full text-left bg-section-color p-6 rounded-xl flex items-center justify-center'>
          <div className="flex flex-col justify-between leading-normal">
            <div className="mx-4 sm:mx-8 my-4 sm:my-8">
              <h1 className="text-white font-text font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
                Mine 8 års præstationer
              </h1>
              <p className="text-white font-text text-base sm:text-lg">
                Med mine evner har jeg opnået at få udbragt
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Icon Cards) */}
        <div className='md:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8'>
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-row items-center space-x-4">
            <div className="text-secondary-color text-5xl">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </div>
            <div className='font-text'>
              <h4 className='font-bold text-xl'>
                100+
              </h4>
              <p className='text-gray-600'>
                Events organiseret
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-row items-center space-x-4">
            <div className="text-secondary-color text-5xl">
              <FontAwesomeIcon icon={faMap} />
            </div>
            <div className='font-text'>
              <h4 className='font-bold text-xl'>
                20 Crores
              </h4>
              <p className='text-gray-600'>
                People visits
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-row items-center space-x-4">
            <div className="text-secondary-color text-5xl">
              <FontAwesomeIcon icon={faBuilding} />
            </div>
            <div className='font-text'>
              <h4 className='font-bold text-xl'>
                50+
              </h4>
              <p className='text-gray-600'>
                Organization helped
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-row items-center space-x-4">
            <div className="text-secondary-color text-5xl">
              <FontAwesomeIcon icon={faCity} />
            </div>
            <div className='font-text'>
              <h4 className='font-bold text-xl'>
                12
              </h4>
              <p className='text-gray-600'>
                in cities
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 mb-16">
        {/* Text Section */}
        <div className="md:w-1/2 w-full text-left md:pr-8">
          <h4 className="text-2xl sm:text-3xl font-text font-medium text-secondary-color mb-4 uppercase">
            Om Mig
          </h4>
          <h1 className="text-4xl sm:text-5xl font-text font-semibold text-black-700 mb-8 leading-tight">
            Helping businesses deliver{' '}
            <span className="text-secondary-color">exceptional</span> buyer experiences.
          </h1>
          <p className="font-text text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
            Vidyard is the leading video messaging and asynchronous communications platform for go-to-market teams. Millions of sales professionals and more than 250,000 go-to-market teams use Vidyard’s AI-powered video messaging, video hosting, and digital sales rooms to connect with more prospects and generate more revenue.
          </p>
          <button className="font-text custom-button rounded-xl text-lg font-medium hover-custom-button transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-100 duration-300">
            Kontakt mig
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-end relative z-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 grid-rows-2 md:gap-4">
            {/* Top Image */}
            <div className="col-span-2 md:mx-6">
              <img className="h-auto max-w-full rounded-lg shadow-lg" src={image2} alt="Top"></img>
            </div>

            {/* Bottom Image */}
            <div className="col-span-1 md:col-span-2 md:col-start-2 md:row-start-2 md:mx-6">
              <img className="h-auto max-w-full rounded-lg shadow-lg" src={image4} alt="Bottom"></img>
            </div>
          </div>
        </div>
      </div>

    </section>

  );
}


export default AboutSection;


<div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-12 md:ml-24">
            <div class="grid gap-4 ">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={image1} alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={image2} alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={image3} alt=""></img>
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={image4} alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={image5} alt=""></img>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={image6} alt=""></img>
                </div>
            </div>
          </div>