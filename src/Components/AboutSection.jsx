import aboutImage from '../assets/images/Om mig image.png';

function AboutSection() { 
  return (
    <section className="bg-transparent py-12 relative overflow-hidden page-width">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 mb-16 shadow-lg rounded-sm">
        {/* Text Section */}
        <div className="md:w-1/2 w-full text-left p-8 ">
          <h4 className="text-4xl font-heading font-bold text-color mb-4">
            Om Mig
          </h4>
          <p className="font-text text-color text-base sm:text-xl mb-6 leading-relaxed">
            Hej! Jeg er Mie Knudsen, en erfaren eventkoordinator med over 10 års erfaring i B2B-events. Jeg arbejder tæt sammen med dig for at forstå din vision og sikre, at dit event bliver præcis, som du ønsker det. Jeg ser mig selv som en partner, ikke kun en leverandør.
          </p>
          <p className="font-text text-color text-base sm:text-xl mb-8 leading-relaxed">
            Kontakt mig gerne, så vi kan tale om, hvordan jeg kan bidrage til dit næste event!
          </p>
          <button className="font-text custom-button rounded-md text-base font-medium uppercase hover-custom-button transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-100 duration-300 px-6 py-4">
            Samarbejd med mig
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center relative">
          <div className="relative w-full h-full  overflow-hidden flex justify-center items-center shadow-lg">
            <img className="w-full h-full object-cover" src={aboutImage} alt="Mie Knudsen" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
