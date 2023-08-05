import React from 'react';

const About = () => {
  return (
    <div className="bg-white min-h-screen pt-8 px-2 md:px-5 md:mt-16 mt-12">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center md:mb-12 mb-6">About Us</h1>
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 md:mr-8 mb-6 md:mb-0">
            <img src={process.env.PUBLIC_URL + '/img1.jpg'} alt="Our Workshop" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 text-gray-700 md:pl-2">
            <p className="text-lg leading-loose">
              At Boba Metals, we take pride in our dedication to creating high-quality metal products. Our workshop is equipped with state-of-the-art machinery and a team of skilled craftsmen, ensuring that each piece meets our strict standards of excellence.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-12">
          <div className="md:w-1/2 md:ml-8 mb-6 md:mb-0">
            <img src={process.env.PUBLIC_URL + '/img2.jpg'} alt="Craftsmanship" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 text-gray-700 md:pr-2">
            <p className="text-lg leading-loose">
              Craftsmanship is at the heart of everything we do. Our team of experienced artisans meticulously handcrafts each product, infusing passion and dedication into every detail. The result is a range of metal products that stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
