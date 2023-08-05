import React from "react";
import "./style.css";
import Banner from "./Banner";
import Products from "./ProductsInHome";

const products = [
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

const bannerImages = [
  `${process.env.PUBLIC_URL + '/img1.jpg'}`,
  `${process.env.PUBLIC_URL + '/img2.jpg'}`,
  `${process.env.PUBLIC_URL + '/img1.jpg'}`,
];

const HomePage = () => {
    // Limit the number of products displayed on the homepage
    const maxProductsToShow = 5; // Change this number to your desired limit
    const limitedProducts = products.slice(0, maxProductsToShow);

  return (
    <div className="bg-gray-100 min-h-screen pt-8 px-2 md:px-5 mt-12">
      <Banner images={bannerImages} />
      <h1 className="text-2xl md:text-3xl font-semibold md:text-start text-center mb-4">
        Welcome to Boba Metals
      </h1>
      <Products products={limitedProducts} />
    </div>
  );
};

export default HomePage;
