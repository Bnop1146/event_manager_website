import React from "react";
import logo1 from '../assets/images/Mie new logo.png';
import logo2 from '../assets/images/Porche logo.png';

const BrandGrid = () => {
  const brands = [
    { name: "CNN", logo: logo1 },
    { name: "IDP", logo: logo2 },
    { name: "OYO", logo: "path-to-oyo-logo.png" },
    { name: "Bajaj", logo: "path-to-bajaj-logo.png" },
    { name: "TVS", logo: "path-to-tvs-logo.png" },
    { name: "TEDx", logo: "path-to-tedx-logo.png" },
    { name: "eSewa", logo: "path-to-esewa-logo.png" },
    { name: "Daraz", logo: "path-to-daraz-logo.png" }
  ];

  return (
    <section className="py-12 bg-gray-100">
    <div className="container mx-auto px-4 text-center">
      <div className="header-content relative h-40 md:h-48 lg:h-56 mb-8">
        <h2 className="text-transparent absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-bold stroke-2 stroke-current text-secondary">
          Betroet af mærker
        </h2>
        <h2 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-bold text-secondary animate-waveEffect">
          Betroet af mærker
        </h2>
      </div>
      <p className="text-gray-600 mb-8 text-base md:text-lg">
        We have helped some organizations to organize their expos.
      </p>

      {/* Brand Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {brands.map((brand, index) => (
          <div key={index} className="flex justify-center items-center p-4 bg-white shadow-md rounded-lg">
            <img src={brand.logo} alt={brand.name} className="h-16 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default BrandGrid;
