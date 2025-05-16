"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface FilterSidebarProps {
  productType?: string
}

export default function FilterSidebar({ productType }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = React.useState([0, 100])

  return (
    <div className="w-full lg:w-64 bg-white p-4 rounded-md border">
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">My Swatch</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <Checkbox id="my-matches" />
              <Label htmlFor="my-matches" className="ml-2 text-sm">
                My Matches
              </Label>
            </div>
          </div>
        </div>

        {productType && (
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Color Family</h3>
            <div className="grid grid-cols-4 gap-2">
              {["Light", "Medium", "Tan", "Deep"].map((color) => (
                <div
                  key={color}
                  className="w-full aspect-square rounded-md bg-amber-200 flex items-center justify-center text-xs cursor-pointer hover:ring-2 hover:ring-pink-600"
                >
                  {color}
                </div>
              ))}
            </div>
          </div>
        )}

        {productType === "foundation" && (
          <>
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Coverage</h3>
              <div className="space-y-2">
                {["Sheer", "Light", "Medium", "Full"].map((coverage) => (
                  <div key={coverage} className="flex items-center">
                    <Checkbox id={`coverage-${coverage.toLowerCase()}`} />
                    <Label htmlFor={`coverage-${coverage.toLowerCase()}`} className="ml-2 text-sm">
                      {coverage}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Finish</h3>
              <div className="space-y-2">
                {["Matte", "Natural", "Dewy", "Radiant"].map((finish) => (
                  <div key={finish} className="flex items-center">
                    <Checkbox id={`finish-${finish.toLowerCase()}`} />
                    <Label htmlFor={`finish-${finish.toLowerCase()}`} className="ml-2 text-sm">
                      {finish}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Undertone</h3>
              <div className="space-y-2">
                {["Cool", "Neutral", "Warm", "Olive"].map((undertone) => (
                  <div key={undertone} className="flex items-center">
                    <Checkbox id={`undertone-${undertone.toLowerCase()}`} />
                    <Label htmlFor={`undertone-${undertone.toLowerCase()}`} className="ml-2 text-sm">
                      {undertone}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
          <Slider defaultValue={[0, 100]} max={100} step={1} value={priceRange} onValueChange={setPriceRange} />
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-gray-500">${priceRange[0]}</span>
            <span className="text-sm text-gray-500">${priceRange[1]}</span>
          </div>
        </div>

        <div className="pt-4 border-t">
          <Button className="w-full" variant="outline">
            Clear All
          </Button>
        </div>
      </div>
    </div>
  )
}
