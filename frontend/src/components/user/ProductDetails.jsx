import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Preethi Mixie Galaxy Plus 750W',
    price: 19.99,
    description: 'Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency',
    imageUrl: 'https://sathya.in/media/82401/catalog/photo_2022-07-19_17-32-53.jpg',
    rating: 4.5,
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
    photos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaEXxcbNjtMPPWwsQ3M6fikGvLjYE31KaljW0ROH6Tj6UGgtm1unjgrLpxCTqKGQh-Vco',
      'https://img.tatacliq.com/images/i7/1348Wx2000H/MP000000008549391_1348Wx2000H_202101131720432.jpeg',
    ],
  },
  // Add more products as needed
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  if (!product) {
    return <div>Product not found.</div>;
  }

  const handlePhotoClick = (index) => {
    setActivePhotoIndex(index);
  };

  return (
    <div className="bg-white min-h-screen p-8 mt-14">
      <div className="p-6 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src={product.photos[activePhotoIndex]}
            alt={product.name}
            className="w-full h-96 object-contain mb-4"
          />
          <div className="flex justify-center">
            {product.photos.map((photo, index) => (
              <div
                key={index}
                onClick={() => handlePhotoClick(index)}
                className={`w-10 md:w-16 h-10 md:h-16 mx-1 cursor-pointer rounded-full border ${
                  index === activePhotoIndex ? 'border-blue-500' : 'border-gray-300'
                }`}
                style={{ backgroundImage: `url(${photo})`, backgroundSize: 'cover' }}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-6 mt-4 md:mt-0">
          <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-green-600 font-semibold">${product.price.toFixed(2)}</p>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
            onClick={() => alert('You clicked Buy Now')}
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
