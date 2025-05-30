"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from '@/components/ui/ProductCard'; // Import ProductCard
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'; // Import Carousel components
// We'll add other imports as we build the sections

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
}

interface RecommendedProducts {
  [key: string]: Product[];
}

// Placeholder data for product types
const productTypes = [
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

export default function MatchesPage() {
  // Placeholder state for beauty profile and selected product types
  const [beautyProfile, setBeautyProfile] = useState({
    skinTone: '',
    skinUndertone: '',
    skinType: '',
    eyeColor: '',
    hairColor: '',
    faceShape: '',
    coverage: '',
    finish: '',
    features: '',
    avoid: '',
  });

  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]); // e.g., ['Foundation', 'Bronzer']

  // Placeholder data for recommended products (grouped by type)
  const recommendedProducts: RecommendedProducts = {
    'Foundation': [
      { id: 'prod1', name: 'Soft Matte Foundation', brand: 'Fenty Beauty', price: 38, image: '/placeholder.svg?height=300&width=300&text=Foundation+1&fontsize=16' },
      { id: 'prod2', name: 'Liquid Touch Foundation', brand: 'Rare Beauty', price: 29, image: '/placeholder.svg?height=300&width=300&text=Foundation+2&fontsize=16' },
      { id: 'prod3', name: 'Airbrush Flawless Foundation', brand: 'Charlotte Tilbury', price: 44, image: '/placeholder.svg?height=300&width=300&text=Foundation+3&fontsize=16' },
      { id: 'prod4', name: 'Skin Tint', brand: 'AMI COLÉ', price: 32, image: '/placeholder.svg?height=300&width=300&text=Foundation+4&fontsize=16' },
      { id: 'prod5', name: 'Natural Radiant Foundation', brand: 'NARS', price: 49, image: '/placeholder.svg?height=300&width=300&text=Foundation+5&fontsize=16' },
      { id: 'prod6', name: 'Perfecting Skin Tint', brand: 'Glossier', price: 26, image: '/placeholder.svg?height=300&width=300&text=Foundation+6&fontsize=16' },
      { id: 'prod7', name: 'Luminous Silk Foundation', brand: 'Armani Beauty', price: 65, image: '/placeholder.svg?height=300&width=300&text=Foundation+7&fontsize=16' },
      // Add more foundation products
    ],
    'Bronzer': [
      { id: 'prod8', name: 'Bronzer Stick', brand: 'Rare Beauty', price: 24, image: '/placeholder.svg?height=300&width=300&text=Bronzer+1&fontsize=16' },
      { id: 'prod9', name: 'Matte Bronzer', brand: 'Fenty Beauty', price: 30, image: '/placeholder.svg?height=300&width=300&text=Bronzer+2&fontsize=16' },
      { id: 'prod10', name: 'Filmstar Bronze & Glow', brand: 'Charlotte Tilbury', price: 68, image: '/placeholder.svg?height=300&width=300&text=Bronzer+3&fontsize=16' },
      // Add more bronzer products
    ],
    'Blush': [
      { id: 'prod11', name: 'Soft Pinch Liquid Blush', brand: 'Rare Beauty', price: 23, image: '/placeholder.svg?height=300&width=300&text=Blush+1&fontsize=16' },
      { id: 'prod12', name: 'Killawatt Freestyle Highlighter', brand: 'Fenty Beauty', price: 36, image: '/placeholder.svg?height=300&width=300&text=Blush+2&fontsize=16' }, // Often used as blush too
      // Add more blush products
    ],
     'Highlighter': [
      { id: 'prod13', name: 'Liquid Luminizer', brand: 'Rare Beauty', price: 25, image: '/placeholder.svg?height=300&width=300&text=Highlighter+1&fontsize=16' },
      { id: 'prod14', name: 'Diamond Bomb All-Over Diamond Veil', brand: 'Fenty Beauty', price: 40, image: '/placeholder.svg?height=300&width=300&text=Highlighter+2&fontsize=16' },
      // Add more highlighter products
    ],
     'Lips': [
      { id: 'prod15', name: 'Lip Soufflé Matte Lip Cream', brand: 'Rare Beauty', price: 20, image: '/placeholder.svg?height=300&width=300&text=Lips+1&fontsize=16' },
      { id: 'prod16', name: 'Gloss Bomb Universal Lip Luminizer', brand: 'Fenty Beauty', price: 22, image: '/placeholder.svg?height=300&width=300&text=Lips+2&fontsize=16' },
      // Add more lip products
    ]
    // Add more product types with recommended products
  };

  // Function to handle beauty profile updates (will be used with dropdowns)
  const handleProfileChange = (field: string, value: string) => {
    setBeautyProfile({ ...beautyProfile, [field]: value });
  };

  // Function to handle product type selection
  const handleProductTypeSelect = (type: string) => {
    // Toggle selection - add if not selected, remove if selected
    if (selectedProductTypes.includes(type)) {
      setSelectedProductTypes(selectedProductTypes.filter(t => t !== type));
    } else {
      setSelectedProductTypes([...selectedProductTypes, type]);
    }
  };

  // Determine if the view should be a grid or carousel
  const isGridView = selectedProductTypes.length === 1;

  return (
    <div className="container mx-auto px-4 py-4">
      {/* 1. Your Matches Banner */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Your Matches</h1>
        <p className="text-gray-600 text-sm max-w-xl mx-auto">
          Based on your facial scan and beauty preferences, we've selected products that are perfect for your unique features.
        </p>
      </div>

      {/* 2. Your Beauty Profile */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Your Beauty Profile</h2>
        
        {/* Profile details - using Select dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Skin filters */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-1">Skin Filters</h3>
            <div className="space-y-3">
              <div>
                <label htmlFor="skinTone" className="block text-xs font-medium text-gray-700">Skin Tone</label>
                <Select onValueChange={(value) => handleProfileChange('skinTone', value)} value={beautyProfile.skinTone}>
                  <SelectTrigger className="mt-1 block w-full text-sm px-2 py-1">
                    <SelectValue placeholder="Select Skin Tone" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* Placeholder options */}
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="skinUndertone" className="block text-xs font-medium text-gray-700">Skin Undertone</label>
                <Select onValueChange={(value) => handleProfileChange('skinUndertone', value)} value={beautyProfile.skinUndertone}>
                  <SelectTrigger className="mt-1 block w-full text-sm px-2 py-1">
                    <SelectValue placeholder="Select Skin Undertone" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* Placeholder options */}
                    <SelectItem value="warm">Warm</SelectItem>
                    <SelectItem value="cool">Cool</SelectItem>
                    <SelectItem value="neutral">Neutral</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="skinType" className="block text-xs font-medium text-gray-700">Skin Type</label>
                <Select onValueChange={(value) => handleProfileChange('skinType', value)} value={beautyProfile.skinType}>
                  <SelectTrigger className="mt-1 block w-full text-sm px-2 py-1">
                    <SelectValue placeholder="Select Skin Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* Placeholder options */}
                    <SelectItem value="oily">Oily</SelectItem>
                    <SelectItem value="dry">Dry</SelectItem>
                    <SelectItem value="combination">Combination</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Attributes */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-1">Attributes</h3>
            <div className="space-y-3">
              <div>
                <label htmlFor="eyeColor" className="block text-xs font-medium text-gray-700">Eye Color</label>
                <Select onValueChange={(value) => handleProfileChange('eyeColor', value)} value={beautyProfile.eyeColor}>
                  <SelectTrigger className="mt-1 block w-full text-sm px-2 py-1">
                    <SelectValue placeholder="Select Eye Color" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* Placeholder options */}
                    <SelectItem value="brown">Brown</SelectItem>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="green">Green</SelectItem>
                    <SelectItem value="hazel">Hazel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="hairColor" className="block text-xs font-medium text-gray-700">Hair Color</label>
                <Select onValueChange={(value) => handleProfileChange('hairColor', value)} value={beautyProfile.hairColor}>
                  <SelectTrigger className="mt-1 block w-full text-sm px-2 py-1">
                    <SelectValue placeholder="Select Hair Color" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* Placeholder options */}
                    <SelectItem value="black">Black</SelectItem>
                    <SelectItem value="brown">Brown</SelectItem>
                    <SelectItem value="blonde">Blonde</SelectItem>
                    <SelectItem value="red">Red</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="faceShape" className="block text-xs font-medium text-gray-700">Face Shape</label>
                <Select onValueChange={(value) => handleProfileChange('faceShape', value)} value={beautyProfile.faceShape}>
                  <SelectTrigger className="mt-1 block w-full text-sm px-2 py-1">
                    <SelectValue placeholder="Select Face Shape" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* Placeholder options */}
                    <SelectItem value="oval">Oval</SelectItem>
                    <SelectItem value="round">Round</SelectItem>
                    <SelectItem value="square">Square</SelectItem>
                    <SelectItem value="heart">Heart</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-1">Preferences</h3>
            <div className="space-y-3">
              <div>
                <label htmlFor="coverage" className="block text-xs font-medium text-gray-700">Coverage</label>
                <Select onValueChange={(value) => handleProfileChange('coverage', value)} value={beautyProfile.coverage}>
                  <SelectTrigger className="mt-1 block w-full text-sm px-2 py-1">
                    <SelectValue placeholder="Select Coverage" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* Placeholder options */}
                    <SelectItem value="sheer">Sheer</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="full">Full</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="finish" className="block text-xs font-medium text-gray-700">Finish</label>
                <Select onValueChange={(value) => handleProfileChange('finish', value)} value={beautyProfile.finish}>
                  <SelectTrigger className="mt-1 block w-full text-sm px-2 py-1">
                    <SelectValue placeholder="Select Finish" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* Placeholder options */}
                    <SelectItem value="matte">Matte</SelectItem>
                    <SelectItem value="natural">Natural</SelectItem>
                    <SelectItem value="dewy">Dewy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="features" className="block text-xs font-medium text-gray-700">Features</label>
                <Select onValueChange={(value) => handleProfileChange('features', value)} value={beautyProfile.features}>
                  <SelectTrigger className="mt-1 block w-full text-sm px-2 py-2">
                    <SelectValue placeholder="Select Features" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* Placeholder options */}
                    <SelectItem value="hydrating">Hydrating</SelectItem>
                    <SelectItem value="long-wearing">Long-Wearing</SelectItem>
                    <SelectItem value="spf">SPF</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="avoid" className="block text-xs font-medium text-gray-700">Avoid</label>
                <Select onValueChange={(value) => handleProfileChange('avoid', value)} value={beautyProfile.avoid}>
                  <SelectTrigger className="mt-1 block w-full text-sm px-2 py-1">
                    <SelectValue placeholder="Select What to Avoid" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* Placeholder options */}
                    <SelectItem value="fragrance">Fragrance</SelectItem>
                    <SelectItem value="parabens">Parabens</SelectItem>
                    <SelectItem value="sulfates">Sulfates</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Product Type Selection */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Product Types</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {productTypes.map((type) => (
            <button
              key={type.name}
              className={`px-4 py-2 rounded-md border text-sm font-medium transition ${selectedProductTypes.includes(type.name) ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300 hover:bg-gray-100'}`}
              onClick={() => handleProductTypeSelect(type.name)}
              type="button"
            >
              {type.name}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Recommended Products */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recommended Products</h2>
        {/* Recommended products grid or carousel will go here */}
        
        {/* Conditional Rendering based on selectedProductTypes */}
        {selectedProductTypes.length === 0 ? (
          <p className="text-gray-700">Select a product type above to see recommendations.</p>
        ) : isGridView ? (
          // Grid View for single selected type
          <div className="grid grid-cols-6 gap-3 sm:grid-cols-7 md:grid-cols-8 lg:grid-cols-10">
            {/* Map through recommended products for the single selected type */}
            {recommendedProducts[selectedProductTypes[0]]?.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                brand={product.brand}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        ) : (
          // Carousel View for multiple selected types
          <div className="space-y-8">
            {selectedProductTypes.map((type) => (
              <div key={type}>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{type}</h3>
                {/* Carousel component */}
                <Carousel>
                  <CarouselContent className="-ml-3">
                    {recommendedProducts[type]?.map((product) => (
                      <CarouselItem key={product.id} className="pl-3 sm:basis-1/3 md:basis-1/5 lg:basis-1/6">
                        <ProductCard
                          id={product.id}
                          name={product.name}
                          brand={product.brand}
                          price={product.price}
                          image={product.image}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 