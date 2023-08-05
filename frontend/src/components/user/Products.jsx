import React from 'react'
import { Link } from 'react-router-dom';
import SearchProduct from './SearchProduct';

const products = [
    {
      id: 2,
      name: "Prestige Popular Svachh Hard Anodised Pressure Cooker",
      price: 19.99,
      description: "Prestige Popular Svachh Hard Anodised Pressure Cooker",
      imageUrl:
        "https://shop.ttkprestige.com/media/catalog/product/cache/4621d7ae1d3cb7858b425ba98dff92b3/2/0/20334-P-IMG1.jpg",
    },
    {
      id: 1,
      name: "Preethi Mixie Galaxy Plus 750W",
      price: 19.99,
      description:
        "Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency",
      imageUrl:
        "https://sathya.in/media/82401/catalog/photo_2022-07-19_17-32-53.jpg",
      photos: [
        "https://sathya.in/media/82401/catalog/photo_2022-07-19_17-32-53.jpg",
        "https://sathya.in/media/82401/catalog/photo_2022-07-19_17-32-53.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPcusLlLkpG18cGY4ctxLEiY4dS9dPnSHecmOxrFtmQCY3GEzYtFC-H0gOUvwsHMvMm0",
      ],
    },
    {
      id: 2,
      name: "Prestige Popular Svachh Hard Anodised Pressure Cooker",
      price: 19.99,
      description: "Prestige Popular Svachh Hard Anodised Pressure Cooker",
      imageUrl:
        "https://shop.ttkprestige.com/media/catalog/product/cache/4621d7ae1d3cb7858b425ba98dff92b3/2/0/20334-P-IMG1.jpg",
    },
    {
      id: 1,
      name: "Preethi Mixie Galaxy Plus 750W",
      price: 19.99,
      description:
        "Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency Preethi, Total 4 jars, 750W, 230V voltage, and 50Hz frequency",
      imageUrl:
        "https://sathya.in/media/82401/catalog/photo_2022-07-19_17-32-53.jpg",
      photos: [
        "https://sathya.in/media/82401/catalog/photo_2022-07-19_17-32-53.jpg",
        "https://sathya.in/media/82401/catalog/photo_2022-07-19_17-32-53.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPcusLlLkpG18cGY4ctxLEiY4dS9dPnSHecmOxrFtmQCY3GEzYtFC-H0gOUvwsHMvMm0",
      ],
    },
    {
      id: 2,
      name: "Prestige Popular Svachh Hard Anodised Pressure Cooker",
      price: 19.99,
      description: "Prestige Popular Svachh Hard Anodised Pressure Cooker",
      imageUrl:
        "https://shop.ttkprestige.com/media/catalog/product/cache/4621d7ae1d3cb7858b425ba98dff92b3/2/0/20334-P-IMG1.jpg",
    },
  ];

  const generateWhatsAppLink = (product) => {
    const whatsappNumber = "9847531356"; // Replace with your WhatsApp number
    const message = `Hello, I'm interested in the product "${product.name}" (ID: ${product.id}). Here is the product image: ${product.imageUrl}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

function Products() {
  return (
    <>
    <SearchProduct />
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-2 mt-16 mx-2 md:mx-5">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded-lg">
            <Link to={`/products/${product.id}`} className="cursor-default">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-32 md:h-48 object-contain mb-2"
              />
              <h2 className="text-lg font-semibold description">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-2 description">
                {product.description}
              </p>
              <p className="text-green-600 font-semibold">
                ${product.price.toFixed(2)}
              </p>
            </Link>
            <div className="md:flex flex-col mt-2 hidden">
              {/* <Link
                to={`/products/${product.id}`}
                className="bg-green-600 text-white py-1 text-center px-4 rounded-md hover:bg-green-700"
              >
                Enquire Now
              </Link> */}
              <a
                href={generateWhatsAppLink(product)}
                className="bg-green-600 text-white py-1 text-center px-4 rounded-md hover:bg-green-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire Now
              </a>
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
    </>
  )
}

export default Products

