import React from 'react'
import { Link } from "react-router-dom";

  const generateWhatsAppLink = (product) => {
    const whatsappNumber = "9847531356"; // Replace with your WhatsApp number
    const message = `Hello, I'm interested in the product "${product.name}" (ID: ${product.id}). Here is the product image: ${product.imageUrl}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };
  
function ProductsInHome({ products }) {
  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-2">
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

export default ProductsInHome

