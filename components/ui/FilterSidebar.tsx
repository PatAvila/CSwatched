"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface FilterSidebarProps {
  productType?: string
}

export default function FilterSidebar({ productType }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState<number[]>([29, 138]);
  const [filters, setFilters] = useState({
    colorFamily: "",
    coverage: "",
    finish: "",
    tone: "",
    undertone: "",
    formula: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full lg:w-64 bg-white p-4 rounded-md border">
      <div className="space-y-6">
        {/* Color Family */}
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="colorFamily">Color Family</label>
          <select
            id="colorFamily"
            name="colorFamily"
            className="w-full border rounded px-3 py-2 text-sm"
            value={filters.colorFamily}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="Light">Light</option>
            <option value="Medium">Medium</option>
            <option value="Tan">Tan</option>
            <option value="Deep">Deep</option>
          </select>
        </div>
        {/* Coverage */}
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="coverage">Coverage</label>
          <select
            id="coverage"
            name="coverage"
            className="w-full border rounded px-3 py-2 text-sm"
            value={filters.coverage}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="Sheer">Sheer</option>
            <option value="Light">Light</option>
            <option value="Medium">Medium</option>
            <option value="Full">Full</option>
          </select>
        </div>
        {/* Finish */}
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="finish">Finish</label>
          <select
            id="finish"
            name="finish"
            className="w-full border rounded px-3 py-2 text-sm"
            value={filters.finish}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="Matte">Matte</option>
            <option value="Natural">Natural</option>
            <option value="Dewy">Dewy</option>
            <option value="Radiant">Radiant</option>
          </select>
        </div>
        {/* Tone */}
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="tone">Tone</label>
          <select
            id="tone"
            name="tone"
            className="w-full border rounded px-3 py-2 text-sm"
            value={filters.tone}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="Cool">Cool</option>
            <option value="Neutral">Neutral</option>
            <option value="Warm">Warm</option>
            <option value="Olive">Olive</option>
          </select>
        </div>
        {/* Undertone */}
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="undertone">Undertone</label>
          <select
            id="undertone"
            name="undertone"
            className="w-full border rounded px-3 py-2 text-sm"
            value={filters.undertone}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="Cool">Cool</option>
            <option value="Neutral">Neutral</option>
            <option value="Warm">Warm</option>
            <option value="Olive">Olive</option>
          </select>
        </div>
        {/* Formula */}
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="formula">Formula</label>
          <select
            id="formula"
            name="formula"
            className="w-full border rounded px-3 py-2 text-sm"
            value={filters.formula}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="Liquid">Liquid</option>
            <option value="Cream">Cream</option>
            <option value="Stick">Stick</option>
            <option value="Powder">Powder</option>
          </select>
        </div>
        {/* Price Range */}
        <div>
          <label className="block text-sm font-semibold mb-1">Price Range</label>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm">${priceRange[0]}</span>
            <span className="text-sm">-</span>
            <span className="text-sm">${priceRange[1]}</span>
            <Button className="ml-auto px-4 py-1 text-sm" variant="outline">GO</Button>
          </div>
          <Slider
            min={29}
            max={138}
            step={1}
            value={priceRange}
            onValueChange={setPriceRange}
          />
        </div>
      </div>
    </div>
  )
}
