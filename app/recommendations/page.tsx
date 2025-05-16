import Layout from "@/components/layout/Layout"
import ProductCard from "@/components/ui/ProductCard"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Share2, Download, ArrowRight } from "lucide-react"

export default function RecommendationsPage() {
  // Mock data for beauty profile
  const beautyProfile = {
    skinType: "Combination",
    concerns: ["Uneven Tone", "Occasional Breakouts"],
    features: ["Medium-Deep Skin Tone", "Warm Undertone"],
    preferences: ["Medium Coverage", "Natural Finish"],
  }

  // Mock data for recommended products
  const recommendedProducts = {
    foundation: [
      {
        id: "1",
        name: "Soft Matte Foundation",
        brand: "Fenty Beauty",
        price: 38,
        image:
          "/placeholder.svg?height=300&width=300&text=Foundation&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
        isMatch: true,
        matchPercentage: 98,
      },
      {
        id: "2",
        name: "Liquid Touch Foundation",
        brand: "Rare Beauty",
        price: 29,
        image:
          "/placeholder.svg?height=300&width=300&text=Foundation&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
        isMatch: true,
        matchPercentage: 95,
      },
      {
        id: "3",
        name: "Skin Tint",
        brand: "AMI COLÉ",
        price: 32,
        image: "/placeholder.svg?height=300&width=300&text=Skin+Tint&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
        isMatch: true,
        matchPercentage: 92,
      },
    ],
    concealer: [
      {
        id: "4",
        name: "Pro Filt'r Concealer",
        brand: "Fenty Beauty",
        price: 28,
        image: "/placeholder.svg?height=300&width=300&text=Concealer&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
        isMatch: true,
        matchPercentage: 97,
      },
      {
        id: "5",
        name: "Liquid Touch Concealer",
        brand: "Rare Beauty",
        price: 24,
        image: "/placeholder.svg?height=300&width=300&text=Concealer&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
        isMatch: true,
        matchPercentage: 94,
      },
    ],
    powder: [
      {
        id: "6",
        name: "Setting Powder",
        brand: "Fenty Beauty",
        price: 34,
        image: "/placeholder.svg?height=300&width=300&text=Powder&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
        isMatch: true,
        matchPercentage: 96,
      },
      {
        id: "7",
        name: "Blot Powder",
        brand: "NARS",
        price: 37,
        image: "/placeholder.svg?height=300&width=300&text=Powder&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
        isMatch: true,
        matchPercentage: 93,
      },
    ],
    blush: [
      {
        id: "8",
        name: "Cheeks Out Blush",
        brand: "Fenty Beauty",
        price: 22,
        image: "/placeholder.svg?height=300&width=300&text=Blush&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
        isMatch: true,
        matchPercentage: 95,
      },
      {
        id: "9",
        name: "Soft Pinch Blush",
        brand: "Rare Beauty",
        price: 23,
        image: "/placeholder.svg?height=300&width=300&text=Blush&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
        isMatch: true,
        matchPercentage: 92,
      },
    ],
  }

  // Mock data for recently viewed products
  const recentlyViewed = [
    {
      id: "10",
      name: "Gloss Bomb",
      brand: "Fenty Beauty",
      price: 20,
      image: "/placeholder.svg?height=300&width=300&text=Lip+Gloss&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "11",
      name: "Lip Soufflé",
      brand: "Rare Beauty",
      price: 20,
      image: "/placeholder.svg?height=300&width=300&text=Lip+Soufflé&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "12",
      name: "Lip Oil",
      brand: "AMI COLÉ",
      price: 20,
      image: "/placeholder.svg?height=300&width=300&text=Lip+Oil&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "13",
      name: "Lip Gloss",
      brand: "Glossier",
      price: 14,
      image: "/placeholder.svg?height=300&width=300&text=Lip+Gloss&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
  ]

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col items-start justify-between gap-4 mb-8 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Your Beauty Matches</h1>
            <p className="mt-2 text-gray-600">
              Based on your facial scan and preferences, we've found your perfect matches.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Beauty Profile */}
          <div className="lg:col-span-1">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900">Your Beauty Profile</h2>

              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Skin Type</h3>
                  <p className="text-sm text-gray-600">{beautyProfile.skinType}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900">Concerns</h3>
                  <ul className="mt-1 text-sm text-gray-600">
                    {beautyProfile.concerns.map((concern, index) => (
                      <li key={index}>{concern}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900">Features</h3>
                  <ul className="mt-1 text-sm text-gray-600">
                    {beautyProfile.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900">Preferences</h3>
                  <ul className="mt-1 text-sm text-gray-600">
                    {beautyProfile.preferences.map((preference, index) => (
                      <li key={index}>{preference}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <Button variant="outline" size="sm" className="w-full">
                  Update Profile
                </Button>
              </div>
            </div>
          </div>

          {/* Product Recommendations */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="foundation">
              <TabsList className="mb-6">
                <TabsTrigger value="foundation">Foundation</TabsTrigger>
                <TabsTrigger value="concealer">Concealer</TabsTrigger>
                <TabsTrigger value="powder">Powder</TabsTrigger>
                <TabsTrigger value="blush">Blush</TabsTrigger>
              </TabsList>

              {Object.entries(recommendedProducts).map(([category, products]) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        brand={product.brand}
                        price={product.price}
                        image={product.image}
                        isMatch={product.isMatch}
                        matchPercentage={product.matchPercentage}
                      />
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Button variant="outline">
                      View More {category.charAt(0).toUpperCase() + category.slice(1)} Options
                    </Button>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="mt-12">
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

        {/* Save Results CTA */}
        <div className="p-6 mt-12 text-center bg-pink-50 rounded-lg">
          <h2 className="text-xl font-bold text-gray-900">Save Your Personalized Results</h2>
          <p className="mt-2 text-gray-600">Create an account to save your beauty profile and recommendations.</p>
          <Button className="mt-4 bg-pink-600 hover:bg-pink-700">
            Create Account
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </Layout>
  )
}
