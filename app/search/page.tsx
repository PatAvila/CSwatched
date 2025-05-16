import Layout from "@/components/layout/Layout"
import FilterSidebar from "@/components/ui/FilterSidebar"
import ProductCard from "@/components/ui/ProductCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, Search, Camera } from "lucide-react"
import Link from "next/link"

export default function SearchPage() {
  // Mock search results
  const searchResults = [
    {
      id: "1",
      name: "Soft Matte Foundation",
      brand: "Fenty Beauty",
      price: 38,
      image: "/placeholder.svg?height=300&width=300&text=Foundation&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "2",
      name: "Pro Filt'r Concealer",
      brand: "Fenty Beauty",
      price: 28,
      image: "/placeholder.svg?height=300&width=300&text=Concealer&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "3",
      name: "Liquid Touch Foundation",
      brand: "Rare Beauty",
      price: 29,
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

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="search"
              placeholder="Search for products, brands, or categories..."
              className="pl-10 pr-16"
              defaultValue="foundation"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Camera className="h-5 w-5 text-gray-400" />
              </Button>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              Foundation
            </Button>
            <Button variant="outline" size="sm">
              Concealer
            </Button>
            <Button variant="outline" size="sm">
              Fenty Beauty
            </Button>
            <Button variant="outline" size="sm">
              Under $50
            </Button>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900">Search Results for "foundation"</h1>
        <p className="mt-2 text-gray-600">Showing 8 of 24 results</p>

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
            {/* Sort Options */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-gray-500">8 products</div>
              <div>
                <select className="text-sm border-gray-300 rounded-md">
                  <option>Sort by: Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                  <option>Best Selling</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {searchResults.map((product) => (
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
              <Button variant="outline">Load More Results</Button>
            </div>

            {/* AI Scan CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg text-center">
              <h2 className="text-xl font-bold text-gray-900">Not finding what you're looking for?</h2>
              <p className="mt-2 text-gray-600">
                Try our AI Face Scan to get personalized product recommendations that match your unique features.
              </p>
              <Button asChild className="mt-4 bg-pink-600 hover:bg-pink-700">
                <Link href="/scan">
                  <Camera className="mr-2 h-4 w-4" />
                  Scan My Face
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
