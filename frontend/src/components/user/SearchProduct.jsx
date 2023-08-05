import React from 'react';

const SearchProduct = ({ onSearch }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-28">
      <div className="md:w-96 w-72 bg-white rounded-lg overflow-hidden shadow-md">
        <div className="flex items-center p-3 border-b border-gray-200">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 py-2 px-3 focus:outline-none text-gray-700 placeholder-gray-400"
            onChange={handleSearch}
          />
          <button
            className="bg-blue-500 text-white rounded-md p-2 ml-2 transition-colors hover:bg-blue-600 focus:outline-none"
            onClick={() => onSearch('')}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
