import Layout from "@/components/layout/Layout"
import FilterSidebar from "@/components/ui/FilterSidebar"
import ProductCard from "@/components/ui/ProductCard"
import BrandCard from "@/components/ui/BrandCard"
import CallToActionScan from "@/components/ui/CallToActionScan"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function ShopAllPage() {
  // Mock data for products
  const products = [
    {
      id: "1",
      name: "Soft Matte Foundation",
      brand: "Fenty Beauty",
      price: 38,
      image: "/placeholder.svg?height=300&width=300&text=Foundation&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "2",
      name: "Liquid Touch Foundation",
      brand: "Rare Beauty",
      price: 29,
      image: "/placeholder.svg?height=300&width=300&text=Foundation&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "3",
      name: "Airbrush Flawless Foundation",
      brand: "Charlotte Tilbury",
      price: 44,
      image: "/placeholder.svg?height=300&width=300&text=Foundation&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "4",
      name: "Skin Tint",
      brand: "AMI COLÉ",
      price: 32,
      image: "/placeholder.svg?height=300&width=300&text=Skin+Tint&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "5",
      name: "Natural Radiant Foundation",
      brand: "NARS",
      price: 49,
      image: "/placeholder.svg?height=300&width=300&text=Foundation&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "6",
      name: "Perfecting Skin Tint",
      brand: "Glossier",
      price: 26,
      image: "/placeholder.svg?height=300&width=300&text=Skin+Tint&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "7",
      name: "Luminous Silk Foundation",
      brand: "Armani Beauty",
      price: 65,
      image: "/placeholder.svg?height=300&width=300&text=Foundation&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "8",
      name: "Double Wear Foundation",
      brand: "Estée Lauder",
      price: 43,
      image: "/placeholder.svg?height=300&width=300&text=Foundation&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
  ]

  // Mock data for brands
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
  ]

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">Shop All Products</h1>

        <div className="flex flex-col mt-8 lg:flex-row lg:gap-8">
          {/* Sidebar Filters - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block lg:w-1/4">
            <FilterSidebar />
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
              {products.map((product) => (
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
    </Layout>
  )
}
