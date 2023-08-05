import React from 'react';

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your submission logic here
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-3">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg p-8 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Your Message
            </label>
            <textarea
              rows="4"
              id="message"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="How can we assist you?"
            ></textarea>
          </div>
          <button className="w-full bg-blue-500 text-white rounded-md py-3 px-6 hover:bg-blue-600 focus:outline-none">
            Send Message
          </button>
        </form>
      </div>
      <div className="hidden lg:block w-1/3 lg:w-1/3 p-8">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.883388097665!2d-122.41941568489444!3d37.77492997976118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858071c2cd5e11%3A0x3fded0ad6f2bc9d5!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1634828848221!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
