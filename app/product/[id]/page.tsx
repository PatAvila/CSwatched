import ProductCard from "@/components/ui/ProductCard"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Share2, Star, Camera } from "lucide-react"

export default function ProductPage({ params }: { params: { id: string } }) {
  // Mock product data
  const product = {
    id: params.id,
    name: "Soft Matte Foundation",
    brand: "Fenty Beauty",
    price: 38,
    rating: 4.8,
    reviewCount: 2456,
    description:
      "A soft matte, long-wear foundation with buildable, medium to full coverage, in a boundary-breaking range of 50 shades.",
    shades: ["100", "110", "120", "130", "140", "150", "160", "170", "180", "190"],
    selectedShade: "150",
    images: [
      "/placeholder.svg?height=500&width=500&text=Foundation&fontsize=24&textcolor=%23d946ef&bgcolor=%23fdf2f8",
      "/placeholder.svg?height=500&width=500&text=Shade+View&fontsize=24&textcolor=%23d946ef&bgcolor=%23fdf2f8",
      "/placeholder.svg?height=500&width=500&text=Model+View&fontsize=24&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    ],
    ingredients:
      "Water, Dimethicone, Talc, Peg-10 Dimethicone, Trimethylsiloxysilicate, Polypropylene, Isododecane, Cetyl Peg/Ppg-10/1 Dimethicone, Nylon-12, Hdi/Trimethylol Hexyllactone Crosspolymer, Phenoxyethanol, Sodium Chloride, Hydrogen Dimethicone, Glycerin, Magnesium Sulfate, Sodium Dehydroacetate, Disteardimonium Hectorite, Aluminum Hydroxide, Methicone, Benzoic Acid, Dehydroacetic Acid, Propylene Carbonate, Ethylhexylglycerin, Parfum/Fragrance, Silica, Biosaccharide Gum-4, Ananas Sativus (Pineapple) Fruit Extract, Carica Papaya (Papaya) Fruit Extract, Paullinia Cupana Seed Extract, Potassium Sorbate, Sorbic Acid.",
    howToUse:
      "For medium to full coverage: Apply 1-2 pumps of foundation to the back of your hand. Using the Pro Filt'r Instant Retouch Concealer Brush, dot product onto the center of your face and blend outward.",
  }

  // Mock data for complete the look products
  const completeTheLook = [
    {
      id: "2",
      name: "Pro Filt'r Concealer",
      brand: "Fenty Beauty",
      price: 28,
      image: "/placeholder.svg?height=300&width=300&text=Concealer&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "3",
      name: "Setting Powder",
      brand: "Fenty Beauty",
      price: 34,
      image: "/placeholder.svg?height=300&width=300&text=Powder&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "4",
      name: "Cheeks Out Blush",
      brand: "Fenty Beauty",
      price: 22,
      image: "/placeholder.svg?height=300&width=300&text=Blush&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "5",
      name: "Killawatt Highlighter",
      brand: "Fenty Beauty",
      price: 36,
      image: "/placeholder.svg?height=300&width=300&text=Highlighter&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
  ]

  return (
    <>
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Product Images */}
          <div>
            <div className="overflow-hidden bg-gray-100 rounded-lg aspect-square max-w-[100px] mx-auto">
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                className="object-cover w-full h-full p-2"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2 max-w-[100px] mx-auto">
              {product.images.map((image, index) => (
                <div key={index} className="overflow-hidden bg-gray-100 rounded-md aspect-square">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    className="object-cover w-full h-full p-1"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-2 text-sm text-gray-500">{product.brand}</div>
            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">{product.name}</h1>

            <div className="flex items-center mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <div className="mt-4 text-xl font-bold text-gray-900">${product.price.toFixed(2)}</div>

            {/* Shade Selection */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Shade: {product.selectedShade}</h3>
                <Button variant="link" className="text-pink-600 hover:text-pink-700">
                  <Camera className="w-4 h-4 mr-1" />
                  Not sure about your shade?
                </Button>
              </div>

              <div className="grid grid-cols-5 gap-2 mt-2">
                {product.shades.map((shade) => (
                  <div
                    key={shade}
                    className={`flex items-center justify-center h-10 text-xs font-medium border rounded-md cursor-pointer ${
                      shade === product.selectedShade
                        ? "border-pink-600 bg-pink-50 text-pink-600"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {shade}
                  </div>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-2 mt-6">
              <Button className="flex-1 bg-pink-600 hover:bg-pink-700">Add to Cart</Button>
              <Button variant="outline" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Product Information Tabs */}
            <div className="mt-8">
              <Tabs defaultValue="description">
                <TabsList className="w-full">
                  <TabsTrigger value="description" className="flex-1">
                    Description
                  </TabsTrigger>
                  <TabsTrigger value="ingredients" className="flex-1">
                    Ingredients
                  </TabsTrigger>
                  <TabsTrigger value="how-to-use" className="flex-1">
                    How to Use
                  </TabsTrigger>
                  <TabsTrigger value="reviews" className="flex-1">
                    Reviews
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="mt-4 text-sm text-gray-600">
                  <p>{product.description}</p>
                </TabsContent>

                <TabsContent value="ingredients" className="mt-4 text-sm text-gray-600">
                  <p>{product.ingredients}</p>
                </TabsContent>

                <TabsContent value="how-to-use" className="mt-4 text-sm text-gray-600">
                  <p>{product.howToUse}</p>
                </TabsContent>

                <TabsContent value="reviews" className="mt-4">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-900">{product.rating} out of 5</span>
                  </div>

                  <p className="text-sm text-gray-600">Based on {product.reviewCount} reviews</p>

                  <Button variant="outline" className="mt-4">
                    Write a Review
                  </Button>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Complete the Look */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Complete the Look</h2>
          <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-4 lg:grid-cols-8">
            {completeTheLook.map((product) => (
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
    </>
  )
}
