import Layout from "@/components/layout/Layout"
import FilterSidebar from "@/components/ui/FilterSidebar"
import ProductCard from "@/components/ui/ProductCard"
import CallToActionScan from "@/components/ui/CallToActionScan"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function ShopPage({ params }: { params: { type: string } }) {
  const typeName = params.type.charAt(0).toUpperCase() + params.type.slice(1).replace("-", " ")
  const isBrand = !["foundation", "concealer", "powder", "blush", "highlighter", "lips"].includes(params.type.toLowerCase())

  // Mock data for products
  const products = isBrand ? [
    {
      id: "1",
      name: "Soft Matte Foundation",
      brand: typeName,
      price: 38,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "2",
      name: "Pro Filt'r Concealer",
      brand: typeName,
      price: 28,
      image: "/placeholder.svg?height=300&width=300",
    },
    { id: "3", name: "Setting Powder", brand: typeName, price: 34, image: "/placeholder.svg?height=300&width=300" },
    {
      id: "4",
      name: "Killawatt Highlighter",
      brand: typeName,
      price: 36,
      image: "/placeholder.svg?height=300&width=300",
    },
    { id: "5", name: "Cheeks Out Blush", brand: typeName, price: 22, image: "/placeholder.svg?height=300&width=300" },
    { id: "6", name: "Gloss Bomb", brand: typeName, price: 20, image: "/placeholder.svg?height=300&width=300" },
    { id: "7", name: "Stunna Lip Paint", brand: typeName, price: 26, image: "/placeholder.svg?height=300&width=300" },
    { id: "8", name: "Snap Shadows", brand: typeName, price: 28, image: "/placeholder.svg?height=300&width=300" },
  ] : [
    {
      id: "1",
      name: `Soft Matte ${typeName}`,
      brand: "Fenty Beauty",
      price: 38,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "2",
      name: `Liquid Touch ${typeName}`,
      brand: "Rare Beauty",
      price: 29,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "3",
      name: `Airbrush Flawless ${typeName}`,
      brand: "Charlotte Tilbury",
      price: 44,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "4",
      name: `Skin Tint ${typeName}`,
      brand: "AMI COLÉ",
      price: 32,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "5",
      name: `Natural Radiant ${typeName}`,
      brand: "NARS",
      price: 49,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "6",
      name: `Perfecting Skin ${typeName}`,
      brand: "Glossier",
      price: 26,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "7",
      name: `Luminous Silk ${typeName}`,
      brand: "Armani Beauty",
      price: 65,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "8",
      name: `Double Wear ${typeName}`,
      brand: "Estée Lauder",
      price: 43,
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        {isBrand && (
          <div className="flex items-center justify-center mb-8">
            <img src="/placeholder.svg?height=100&width=200" alt={typeName} className="h-16 object-contain" />
          </div>
        )}

        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          {isBrand ? typeName : `Shop ${typeName}`}
        </h1>
        {isBrand && (
          <p className="text-center text-gray-600 mb-8">
            {typeName === "Fenty Beauty"
              ? "Beauty for All. Created by Rihanna, Fenty Beauty products are designed to feel lightweight and work for all skin types and tones."
              : "Premium beauty products designed for all skin types and tones."}
          </p>
        )}

        <div className="flex flex-col mt-8 lg:flex-row lg:gap-8">
          {/* Sidebar Filters - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block lg:w-1/4">
            <FilterSidebar productType={isBrand ? "all" : params.type.toLowerCase()} />
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
            {/* Category Navigation */}
            {isBrand && (
              <div className="flex overflow-x-auto pb-4 mb-6 gap-2">
                {[
                  "All Products",
                  "New Arrivals",
                  "Foundation",
                  "Concealer",
                  "Powder",
                  "Blush",
                  "Highlighter",
                  "Lips",
                ].map((category) => (
                  <Button
                    key={category}
                    variant={category === "All Products" ? "default" : "outline"}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            )}

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