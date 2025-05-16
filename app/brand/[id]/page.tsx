import Layout from "@/components/layout/Layout"
import ProductCard from "@/components/ui/ProductCard"
import CallToActionScan from "@/components/ui/CallToActionScan"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

interface BrandPageProps {
  params: {
    id: string
  }
}

export default function BrandPage({ params }: BrandPageProps) {
  // Mock brand data
  const brand = {
    id: params.id,
    name: "AMI COLÉ",
    tagline: "Clean Beauty Made to Celebrate Melanin Rich Skin",
    description:
      "AMI COLÉ is a clean beauty brand designed to celebrate melanin-rich skin. Our products are formulated with nourishing ingredients that enhance your natural beauty.",
    logo: "/placeholder.svg?height=200&width=200&text=AMI+COLÉ&fontsize=18&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    heroImage: "/placeholder.svg?height=600&width=1200&text=AMI+COLÉ&fontsize=32&textcolor=%23d946ef&bgcolor=%23fdf2f8",
  }

  // Mock product categories
  const categories = ["Face", "Lips", "Cheeks", "Eyes", "Tools"]

  // Mock new arrivals
  const newArrivals = [
    {
      id: "1",
      name: "Skin Enhancing Tint",
      brand: brand.name,
      price: 32,
      image: "/placeholder.svg?height=300&width=300&text=Skin+Tint&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "2",
      name: "Light Catching Highlighter",
      brand: brand.name,
      price: 22,
      image: "/placeholder.svg?height=300&width=300&text=Highlighter&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "3",
      name: "Lip Treatment Oil",
      brand: brand.name,
      price: 20,
      image: "/placeholder.svg?height=300&width=300&text=Lip+Oil&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
  ]

  // Mock all products
  const allProducts = [
    ...newArrivals,
    {
      id: "4",
      name: "Concealer",
      brand: brand.name,
      price: 24,
      image: "/placeholder.svg?height=300&width=300&text=Concealer&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "5",
      name: "Cream Blush",
      brand: brand.name,
      price: 22,
      image: "/placeholder.svg?height=300&width=300&text=Blush&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "6",
      name: "Setting Powder",
      brand: brand.name,
      price: 34,
      image: "/placeholder.svg?height=300&width=300&text=Powder&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "7",
      name: "Mascara",
      brand: brand.name,
      price: 19,
      image: "/placeholder.svg?height=300&width=300&text=Mascara&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "8",
      name: "Brow Gel",
      brand: brand.name,
      price: 16,
      image: "/placeholder.svg?height=300&width=300&text=Brow+Gel&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
  ]

  // Mock recently viewed products
  const recentlyViewed = [
    {
      id: "9",
      name: "Soft Matte Foundation",
      brand: "Fenty Beauty",
      price: 38,
      image: "/placeholder.svg?height=300&width=300&text=Foundation&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "10",
      name: "Liquid Touch Foundation",
      brand: "Rare Beauty",
      price: 29,
      image: "/placeholder.svg?height=300&width=300&text=Foundation&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "11",
      name: "Airbrush Flawless Foundation",
      brand: "Charlotte Tilbury",
      price: 44,
      image: "/placeholder.svg?height=300&width=300&text=Foundation&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "12",
      name: "Natural Radiant Foundation",
      brand: "NARS",
      price: 49,
      image: "/placeholder.svg?height=300&width=300&text=Foundation&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
  ]

  return (
    <Layout>
      {/* Brand Hero */}
      <div className="relative bg-gray-100">
        <div className="container px-4 py-12 mx-auto md:py-16">
          <div className="flex flex-col items-center text-center">
            <img
              src={brand.logo || "/placeholder.svg"}
              alt={brand.name}
              className="w-32 h-32 mb-6 bg-white rounded-full object-contain p-4"
            />
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">{brand.name}</h1>
            <p className="mt-2 text-lg text-gray-600">{brand.tagline}</p>
            <p className="max-w-2xl mt-4 text-gray-600">{brand.description}</p>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8 mx-auto">
        {/* Shop by Category */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
          <div className="flex flex-wrap gap-2 mt-4">
            <Button asChild variant="outline">
              <Link href={`/brand/${params.id}`}>All Products</Link>
            </Button>
            {categories.map((category) => (
              <Button key={category} asChild variant="outline">
                <Link href={`/brand/${params.id}?category=${category.toLowerCase()}`}>{category}</Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Product Tabs */}
        <Tabs defaultValue="new">
          <TabsList className="mb-6">
            <TabsTrigger value="new">NEW ARRIVALS</TabsTrigger>
            <TabsTrigger value="all">ALL PRODUCTS</TabsTrigger>
          </TabsList>

          <TabsContent value="new">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {newArrivals.map((product) => (
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
          </TabsContent>

          <TabsContent value="all">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {allProducts.map((product) => (
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

            <div className="mt-8 text-center">
              <Button variant="outline">Load More Products</Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-16">
          <CallToActionScan />
        </div>

        {/* Recently Viewed */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Recently Viewed</h2>
          <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-4">
            {recentlyViewed.map((product) => (
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
        </div>
      </div>
    </Layout>
  )
}
