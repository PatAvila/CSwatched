import React from 'react';

const BrandBanner: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden flex justify-center items-center">
      <img
        src="/brand-banner.jpg.png"
        alt="Brand Banner"
        className="w-full h-40 md:h-80 object-cover"
      />
    </div>
  );
};

export default BrandBanner; 