"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const placeholderCategories = [
  { name: 'Foundation', href: '/shop?category=foundation' },
  { name: 'Concealer', href: '/shop?category=concealer' },
  { name: 'Powder', href: '/shop?category=powder' },
  { name: 'Blush', href: '/shop?category=blush' },
  { name: 'Bronzer', href: '/shop?category=bronzer' },
  { name: 'Highlighter', href: '/shop?category=highlighter' },
  { name: 'Lipstick', href: '/shop?category=lipstick' },
  { name: 'Lip Gloss', href: '/shop?category=lip-gloss' },
];

const ShopByCategoryCarousel: React.FC = () => {
  const [selected, setSelected] = useState('Foundation');
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Shop by Category</h2>
      <div className="flex overflow-x-auto space-x-2 p-2 no-scrollbar">
        {placeholderCategories.map((category) => (
          <Button
            key={category.name}
            variant={selected === category.name ? undefined : 'outline'}
            className={
              selected === category.name
                ? 'bg-black text-white border-black shadow-none' // selected style
                : 'bg-white text-black border-gray-300 hover:bg-gray-100 shadow-none'
            }
            onClick={() => setSelected(category.name)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategoryCarousel; 