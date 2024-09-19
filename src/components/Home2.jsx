import React from "react";

const Home2= () => {
  return (
    <section className="relative bg-purple-900 text-white min-h-screen flex items-center ">
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black"></div>
      <div className="relative z-10 text-center px-6  lg:px-20">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 flex items-end">
          TOP WEB DESIGN AGENCY
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-4 flex items-end">
          WE GROW BRANDS ONLINE
        </h2>
        <p className="text-lg md:text-xl mb-6 flex items-end">
          Custom Websites, Branding & Digital Marketing Solutions
        </p>
        <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold transition duration-300">
          REQUEST A QUOTE
        </a>
      </div>

      <div className="absolute bottom-0 w-full grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <img src="https://via.placeholder.com/150" alt="Logo 1" className="object-contain" />
        <img src="https://via.placeholder.com/150" alt="Logo 2" className="object-contain" />
        <img src="https://via.placeholder.com/150" alt="Logo 3" className="object-contain" />
        <img src="https://via.placeholder.com/150" alt="Logo 4" className="object-contain" />
      </div>
    </section>
  );
};

export default Home2;
