import image from '../assets/images/About section image.png';

function AboutSection() {

  return (
    <section className="bg-white py-12 relative overflow-hidden ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 relative z-10 px-2">
        {/* Text Section */}
        <div className="md:w-1/2 w-full text-left md:pr-8">
          <h4 className="text-3xl font-heading font-medium text-gray-300 mb-4 uppercase">
            Om Mig
          </h4>
          <h1 className="text-5xl font-heading font-bold text-black-700 mb-8 leading-tight">
            Helping businesses deliver{' '}
            <span className="text-green-500 underline">exceptional</span> buyer experiences.
          </h1>
          <p className="font-text text-gray-600 mb-8 leading-relaxed">
            Vidyard is the leading video messaging and asynchronous communications platform for go-to-market teams. Millions of sales professionals and more than 250,000 go-to-market teams use Vidyard’s AI-powered video messaging, video hosting, and digital sales rooms to connect with more prospects and generate more revenue.
          </p>
          <button
            className="font-text bg-blue-600 text-white py-4 px-8 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            Kontakt mig
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-end relative z-10">
          <div className="relative">
            <img 
              src={image}
              alt="Abstract Shaped"
              className="w-full h-100/50 shadow-lg"
              style={{
                clipPath: 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Geometric Shapes for Visual Design */}
      {/* Green circular background */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-green-500 opacity-50 rounded-full z-0"></div>

      {/* Dotted Overlay */}
      <div className="absolute -top-10 -right-16 w-40 h-40 bg-white rounded-full border-dotted border-4 border-gray-300 z-0"></div>

      {/* Irregular Blob Shape */}
      <div
        className="absolute bottom-0 right-0 w-72 h-72 bg-green-600 opacity-25"
        style={{
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 60% 40%, 20% 20%)',
        }}
      ></div>
    </section>
  );
}


export default AboutSection;