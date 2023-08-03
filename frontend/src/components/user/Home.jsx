import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const products = [
    {
        id: 1,
        name: 'Preethi Mixie Galaxy Plus 750W',
        price: 19.99,
        description: 'Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency',
        imageUrl: 'https://sathya.in/media/82401/catalog/photo_2022-07-19_17-32-53.jpg',
        photos: [
          'https://sathya.in/media/82401/catalog/photo_2022-07-19_17-32-53.jpg',
          'https://sathya.in/media/82401/catalog/photo_2022-07-19_17-32-53.jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPcusLlLkpG18cGY4ctxLEiY4dS9dPnSHecmOxrFtmQCY3GEzYtFC-H0gOUvwsHMvMm0',
        ],
      },
    {
        id: 2,
        name: 'Prestige Popular Svachh Hard Anodised Pressure Cooker',
        price: 19.99,
        description: 'Prestige Popular Svachh Hard Anodised Pressure Cooker',
        imageUrl: 'https://shop.ttkprestige.com/media/catalog/product/cache/4621d7ae1d3cb7858b425ba98dff92b3/2/0/20334-P-IMG1.jpg',
      },
];

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 mt-12">
      <h1 className="text-2xl md:text-3xl font-semibold md:text-start text-center mb-4">Welcome to Boba Metals</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded-lg">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-32 md:h-48 object-contain mb-2"
            />
            <h2 className="text-lg font-semibold description">{product.name}</h2>
            <p className="text-gray-600 mb-2 description">{product.description}</p>
            <p className="text-green-600 font-semibold">${product.price.toFixed(2)}</p>
            <div className="flex flex-col mt-2">
              <Link
                to={`/products/${product.id}`}
                className="bg-green-600 text-white py-1 text-center px-4 rounded-md hover:bg-green-700"
              >
                Enquire Now
              </Link>
              <Link
                to={`/products/${product.id}`}
                className="bg-blue-600 text-white py-1 text-center px-4 rounded-md hover:bg-blue-700 mt-2"
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
