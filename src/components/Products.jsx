import React, { useState } from 'react';
import products from '../config/products';
import ProductCard from './ProductCard';

const PopularProducts = () => {
  const [startIndex, setStartIndex] = useState(0);
  const productsPerSlide = 4;

  const handlePrev = () => {
    setStartIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, products.length - productsPerSlide) : Math.max(0, prevIndex - productsPerSlide)
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => 
      Math.min(prevIndex + productsPerSlide, Math.max(0, products.length - productsPerSlide))
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Products</h2>
      <div className="relative">
        <div className="flex overflow-hidden">
          {products.slice(startIndex, startIndex + productsPerSlide).map((product, index) => (
            <div key={startIndex + index} className="w-1/4 flex-shrink-0 px-2">
              <ProductCard
                title={product.title}
                description={product.description}
                isActive={true}
              />
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-red-500 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center focus:outline-none"
          disabled={startIndex === 0}
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-red-500 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center focus:outline-none"
          disabled={startIndex + productsPerSlide >= products.length}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default PopularProducts;