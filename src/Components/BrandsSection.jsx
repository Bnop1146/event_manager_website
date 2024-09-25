import React from "react";

const BrandGrid = () => {
  const brands = [
    { name: "CNN", logo: "path-to-cnn-logo.png" },
    { name: "IDP", logo: "path-to-idp-logo.png" },
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by brands.</h2>
        <p className="text-gray-600 mb-8">We have helped some organizations to organize their expos.</p>
        
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
