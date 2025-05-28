import React from 'react';

interface AllProductsListProps {
  // Define props for the all products list, e.g., all products data
}

const AllProductsList: React.FC<AllProductsListProps> = () => {
  return (
    <div className="my-8">
      <h4 className="text-xl font-bold mb-4">All Products</h4>
      {/* Placeholder for All Products List */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded">Product 1</div>
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded">Product 2</div>
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded">Product 3</div>
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded">Product 4</div>
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded">Product 5</div>
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded">Product 6</div>
      </div>
    </div>
  );
};

export default AllProductsList; 