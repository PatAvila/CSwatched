"use client";

import FilterSidebar from "@/components/ui/FilterSidebar";
import ProductCard from "@/components/ui/ProductCard";
import BrandCard from "@/components/ui/BrandCard";
import CallToActionScan from "@/components/ui/CallToActionScan";
import { Button } from "@/components/ui/button";
import { ChevronDown, Camera, ListChecks } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ShopViewProps {
  initialType?: string;
}

const productTypes = [
  { name: "Foundation", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-droplet h-8 w-8 text-black"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg> },
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

const typeDescriptions: Record<string, string> = {
  All: "Browse our entire collection of beauty products across all categories.",
  Foundation: "Find your perfect match with our extensive range of foundations for every skin tone, type, and preference.",
  Concealer: "Discover concealers that blend seamlessly and provide flawless coverage for every skin type.",
  Powder: "Set your look with our collection of powders for a smooth, matte, or radiant finish.",
  Blush: "Add a natural flush to your cheeks with our range of blushes in every shade.",
  Highlighter: "Illuminate your features with our selection of highlighters for every skin tone.",
  Lips: "Explore lipsticks, glosses, and balms for every mood and occasion.",
  Mascara: "Lengthen, volumize, and define your lashes with our mascaras.",
  Eyeshadow: "Create stunning eye looks with our versatile eyeshadow palettes.",
  Brow: "Shape and define your brows with our brow products.",
  Primer: "Prep your skin for makeup with our range of primers.",
};

const products = [
  {
    id: "1",
    name: "Soft Matte Foundation",
    brand: "Fenty Beauty",
    price: 38,
    image: "/placeholder.svg?height=300&width=300&text=Foundation&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    type: "Foundation",
  },
  {
    id: "2",
    name: "Liquid Touch Foundation",
    brand: "Rare Beauty",
    price: 29,
    image: "/placeholder.svg?height=300&width=300&text=Foundation&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    type: "Foundation",
  },
  {
    id: "3",
    name: "Airbrush Flawless Foundation",
    brand: "Charlotte Tilbury",
    price: 44,
    image: "/placeholder.svg?height=300&width=300&text=Foundation&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    type: "Foundation",
  },
  {
    id: "4",
    name: "Skin Tint",
    brand: "AMI COLÉ",
    price: 32,
    image: "/placeholder.svg?height=300&width=300&text=Skin+Tint&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    type: "Foundation",
  },
  {
    id: "5",
    name: "Natural Radiant Foundation",
    brand: "NARS",
    price: 49,
    image: "/placeholder.svg?height=300&width=300&text=Foundation&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    type: "Foundation",
  },
  {
    id: "6",
    name: "Perfecting Skin Tint",
    brand: "Glossier",
    price: 26,
    image: "/placeholder.svg?height=300&width=300&text=Skin+Tint&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    type: "Foundation",
  },
  {
    id: "7",
    name: "Luminous Silk Foundation",
    brand: "Armani Beauty",
    price: 65,
    image: "/placeholder.svg?height=300&width=300&text=Foundation&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    type: "Foundation",
  },
  {
    id: "8",
    name: "Double Wear Foundation",
    brand: "Estée Lauder",
    price: 43,
    image: "/placeholder.svg?height=300&width=300&text=Foundation&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    type: "Foundation",
  },
  // Add more products for other types as needed
];

const featuredBrands = [
  {
    id: "1",
    name: "Fenty Beauty",
    logo: "/placeholder.svg?height=200&width=200&text=Fenty&fontsize=18&textcolor=%23d946ef&bgcolor=%23fdf2f8",
  },
  {
    id: "2",
    name: "Rare Beauty",
    logo: "/placeholder.svg?height=200&width=200&text=Rare&fontsize=18&textcolor=%23d946ef&bgcolor=%23fdf2f8",
  },
  {
    id: "3",
    name: "Charlotte Tilbury",
    logo: "/placeholder.svg?height=200&width=200&text=CT&fontsize=18&textcolor=%23d946ef&bgcolor=%23fdf2f8",
  },
];

export default function ShopView({ initialType = "All" }: ShopViewProps) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    initialType === "All" ? [] : [initialType]
  );
  const mainType = selectedTypes[0] || "All";

  // Filter products by mainType or show all
  const filteredProducts =
    mainType === "All"
      ? products
      : products.filter((p) => p.type === mainType);

  // ...rest of the UI is the same as in /shop
  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">{mainType === "All" ? "Shop All" : mainType}</h1>
          <p className="text-gray-600 text-base max-w-xl">{typeDescriptions[mainType]}</p>
        </div>
        <div className="flex gap-3">
          <Link href="/scan">
            <Button className="bg-[#5B6D5B] hover:bg-[#4a5a4a] text-white font-semibold px-6 py-2 flex items-center gap-2">
              <Camera className="w-5 h-5 mr-2" />
              Scan to Match
            </Button>
          </Link>
          <Link href="/quiz">
            <Button variant="outline" className="font-semibold px-6 py-2 flex items-center gap-2">
              <ListChecks className="w-5 h-5 mr-2" />
              Take the Quiz
            </Button>
          </Link>
        </div>
      </div>
      {/* Product Type Multi-Select Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {productTypes.map((type) => (
          <button
            key={type.name}
            className={`px-4 py-2 rounded-md border text-sm font-medium transition ${selectedTypes.includes(type.name) ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300 hover:bg-gray-100'}`}
            onClick={() => setSelectedTypes([type.name])}
            type="button"
          >
            {type.name}
          </button>
        ))}
      </div>
      <div className="flex flex-col mt-8 lg:flex-row lg:gap-8">
        {/* Sidebar Filters - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:block lg:w-1/4">
          <FilterSidebar productType={mainType} />
        </div>
        {/* Mobile Filter Button */}
        <div className="mb-4 lg:hidden">
          <Button variant="outline" className="w-full justify-between">
            <span>Filters</span>
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </div>
        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
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
          {/* Load More Button */}
          <div className="mt-8 text-center">
            <Button variant="outline">Load More Products</Button>
          </div>
          {/* Brand Spotlight */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">Brand Spotlight</h2>
            <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-3">
              {featuredBrands.map((brand) => (
                <BrandCard key={brand.id} id={brand.id} name={brand.name} logo={brand.logo} />
              ))}
            </div>
          </div>
          {/* Call to Action */}
          <div className="mt-12">
            <CallToActionScan />
          </div>
        </div>
      </div>
    </div>
  );
} 