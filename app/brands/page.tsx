"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BrandCard from '@/components/ui/BrandCard';
import { Camera, ListChecks } from 'lucide-react';

// Placeholder data for product types (similar to ShopView)
const productTypes = [
  { name: "All" },
  { name: "Foundation" },
  { name: "Concealer" },
  { name: "Powder" },
  { name: "Blush" },
  { name: "Highlighter" },
  { name: "Lips" },
  { name: "Mascara" },
  { name: "Eyeshadow" },
  { name: "Brow" },
  { name: "Primer" },
];

// Placeholder data for brands
const allBrands = [
  { id: '1', name: 'Fenty Beauty', logo: '/placeholder-logo.png' },
  { id: '2', name: 'Rare Beauty', logo: '/placeholder-logo.png' },
  { id: '3', name: 'Charlotte Tilbury', logo: '/placeholder-logo.png' },
  { id: '4', name: 'AM COL', logo: '/placeholder-logo.png' },
  { id: '5', name: 'NARS', logo: '/placeholder-logo.png' },
  { id: '6', name: 'Glossier', logo: '/placeholder-logo.png' },
  { id: '7', name: 'Armani Beauty', logo: '/placeholder-logo.png' },
  { id: '8', name: 'Estee Lauder', logo: '/placeholder-logo.png' },
  { id: '9', name: 'Dior', logo: '/placeholder-logo.png' },
  { id: '10', name: 'Chanel', logo: '/placeholder-logo.png' },
  { id: '11', name: 'Benefit Cosmetics', logo: '/placeholder-logo.png' },
  { id: '12', name: 'Too Faced', logo: '/placeholder-logo.png' },
  { id: '13', name: 'Urban Decay', logo: '/placeholder-logo.png' },
  { id: '14', name: 'Anastasia Beverly Hills', logo: '/placeholder-logo.png' },
  { id: '15', name: 'Huda Beauty', logo: '/placeholder-logo.png' },
  { id: '16', name: 'Kylie Cosmetics', logo: '/placeholder-logo.png' },
  { id: '17', name: 'MAC Cosmetics', logo: '/placeholder-logo.png' },
  { id: '18', name: 'Sephora Collection', logo: '/placeholder-logo.png' },
  { id: '19', name: 'NYX Professional Makeup', logo: '/placeholder-logo.png' },
  { id: '20', name: 'Morphe', logo: '/placeholder-logo.png' },
  { id: '21', name: 'ColourPop', logo: '/placeholder-logo.png' },
  { id: '22', name: 'E.L.F. Cosmetics', logo: '/placeholder-logo.png' },
  { id: '23', name: 'L\'Oréal Paris', logo: '/placeholder-logo.png' },
  { id: '24', name: 'Maybelline New York', logo: '/placeholder-logo.png' },
  { id: '25', name: 'Revlon', logo: '/placeholder-logo.png' },
  { id: '26', name: 'Covergirl', logo: '/placeholder-logo.png' },
  { id: '27', name: 'Neutrogena', logo: '/placeholder-logo.png' },
  { id: '28', name: 'Innisfree', logo: '/placeholder-logo.png' },
  { id: '29', name: '00 Naturals', logo: '/placeholder-logo.png' },
  { id: '30', name: '100% Pure', logo: '/placeholder-logo.png' },
];

const alphabet = ['0-9', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

export default function BrandsPage() {
  const [shuffledBrands, setShuffledBrands] = useState(allBrands);
  const [selectedProductType, setSelectedProductType] = useState('All');
  const [selectedLetter, setSelectedLetter] = useState('All'); // Use 'All' or a similar indicator for no letter filter

  // Shuffle brands on component mount
  useEffect(() => {
    const shuffleArray = (array: any[]) => {
      let currentIndex = array.length,
        randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
      return array;
    };
    setShuffledBrands(shuffleArray([...allBrands])); // Shuffle a copy
  }, []);

  // Filter brands based on selected product type and letter
  const filteredBrands = shuffledBrands.filter((brand) => {
    // Basic filtering logic - expand this later with actual product type/brand data
    const matchesProductType = selectedProductType === 'All' ? true : false; // Replace with actual filtering

    const matchesLetter = selectedLetter === 'All' || (selectedLetter === '0-9' ? /^[0-9]/.test(brand.name) : brand.name.startsWith(selectedLetter));

    return matchesProductType && matchesLetter;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Brands</h1>
          <p className="text-gray-600 text-base max-w-xl">Browse our entire collection of beauty brands and find your new favorite.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/scan">
            <Button className="justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 bg-[#5B6D5B] hover:bg-[#4a5a4a] text-white font-semibold px-6 py-2 flex items-center gap-2">
              <Camera className="w-5 h-5 mr-2" />
              Scan to Match
            </Button>
          </Link>
          <Link href="/quiz">
            <Button className="justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 font-semibold px-6 py-2 flex items-center gap-2">
              <ListChecks className="w-5 h-5 mr-2" />
              Take the Quiz
            </Button>
          </Link>
        </div>
      </div>

      {/* Product Type Buttons */}
      <div className="flex overflow-x-auto space-x-2 p-2 no-scrollbar mb-6 justify-center">
        {productTypes.map((type) => (
          <Button
            key={type.name}
            variant={selectedProductType === type.name ? undefined : 'outline'}
            className={
              selectedProductType === type.name
                ? 'bg-black text-white border-black shadow-none'
                : 'bg-white text-black border-gray-300 hover:bg-gray-100 shadow-none'
            }
            onClick={() => setSelectedProductType(type.name)}
          >
            {type.name}
          </Button>
        ))}
      </div>

      {/* Alphabet Filter */}
      <div className="flex overflow-x-auto space-x-1 p-2 no-scrollbar mb-8 justify-center">
        <Button
            key="All"
            variant={selectedLetter === 'All' ? undefined : 'outline'}
            className={
                selectedLetter === 'All'
                ? 'bg-black text-white border-black shadow-none px-3 py-1 text-sm'
                : 'bg-white text-black border-gray-300 hover:bg-gray-100 shadow-none px-3 py-1 text-sm'
            }
            onClick={() => setSelectedLetter('All')}
        >
            All
        </Button>
        {alphabet.map((letter) => (
          <Button
            key={letter}
            variant={selectedLetter === letter ? undefined : 'outline'}
            className={
              selectedLetter === letter
                ? 'bg-black text-white border-black shadow-none px-3 py-1 text-sm'
                : 'bg-white text-black border-gray-300 hover:bg-gray-100 shadow-none px-3 py-1 text-sm'
            }
            onClick={() => setSelectedLetter(letter)}
          >
            {letter}
          </Button>
        ))}
      </div>

      {/* Brand Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredBrands.map((brand) => (
          <BrandCard key={brand.id} id={brand.id} name={brand.name} logo={brand.logo} />
        ))}
      </div>
    </div>
  );
} 