import image from '../assets/images/Big About section image.png';

function AboutSection() {

  return (
    <section className="bg-white py-12 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Text Section */}
        <div className="md:w-1/2 w-full text-left md:pr-8">
          <h4 className="text-3xl font-heading font-medium text-regal-purple mb-4 uppercase">
            Om Mig
          </h4>
          <h1 className="text-5xl font-heading font-bold text-black-700 mb-8 leading-tight">
            Helping businesses deliver{' '}
            <span className="text-regal-purple">exceptional</span> buyer experiences.
          </h1>
          <p className="font-text text-gray-600 mb-8 leading-relaxed">
            Vidyard is the leading video messaging and asynchronous communications platform for go-to-market teams. Millions of sales professionals and more than 250,000 go-to-market teams use Vidyard’s AI-powered video messaging, video hosting, and digital sales rooms to connect with more prospects and generate more revenue.
          </p>
          <button className="font-text custom-button rounded-lg text-lg font-medium hover-custom-button transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-100 duration-300">
            Kontakt mig
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-end relative z-10">
          <div className="relative">
            <img 
              src={image}
              alt="Abstract Shaped"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>

  );
}


export default AboutSection;