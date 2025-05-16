import Layout from "@/components/layout/Layout"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, User, Heart, ShoppingBag, Settings, LogOut } from "lucide-react"
import Link from "next/link"
import ProductCard from "@/components/ui/ProductCard"

export default function UserProfilePage() {
  // Mock data for beauty profile
  const beautyProfile = {
    skinType: "Combination",
    concerns: ["Uneven Tone", "Occasional Breakouts"],
    features: ["Medium-Deep Skin Tone", "Warm Undertone"],
    preferences: ["Medium Coverage", "Natural Finish"],
  }

  // Mock data for saved products
  const savedProducts = [
    {
      id: "1",
      name: "Soft Matte Foundation",
      brand: "Fenty Beauty",
      price: 38,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "2",
      name: "Liquid Touch Foundation",
      brand: "Rare Beauty",
      price: 29,
      image: "/placeholder.svg?height=300&width=300",
    },
    { id: "3", name: "Skin Tint", brand: "AMI COLÉ", price: 32, image: "/placeholder.svg?height=300&width=300" },
    {
      id: "4",
      name: "Pro Filt'r Concealer",
      brand: "Fenty Beauty",
      price: 28,
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  // Mock data for purchase history
  const purchaseHistory = [
    {
      id: "ORD12345",
      date: "May 10, 2023",
      total: 86.0,
      status: "Delivered",
      items: [
        { id: "1", name: "Soft Matte Foundation", brand: "Fenty Beauty", price: 38, quantity: 1 },
        { id: "2", name: "Pro Filt'r Concealer", brand: "Fenty Beauty", price: 28, quantity: 1 },
        { id: "3", name: "Setting Powder", brand: "Fenty Beauty", price: 34, quantity: 1 },
      ],
    },
    {
      id: "ORD12346",
      date: "April 22, 2023",
      total: 49.0,
      status: "Delivered",
      items: [
        { id: "4", name: "Cheeks Out Blush", brand: "Fenty Beauty", price: 22, quantity: 1 },
        { id: "5", name: "Gloss Bomb", brand: "Fenty Beauty", price: 20, quantity: 1 },
      ],
    },
  ]

  // Mock data for recommended products
  const recommendedProducts = [
    {
      id: "6",
      name: "Killawatt Highlighter",
      brand: "Fenty Beauty",
      price: 36,
      image: "/placeholder.svg?height=300&width=300&text=Highlighter&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
      isMatch: true,
      matchPercentage: 95,
    },
    {
      id: "7",
      name: "Soft Pinch Blush",
      brand: "Rare Beauty",
      price: 23,
      image: "/placeholder.svg?height=300&width=300&text=Blush&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
      isMatch: true,
      matchPercentage: 92,
    },
    {
      id: "8",
      name: "Lip Soufflé",
      brand: "Rare Beauty",
      price: 20,
      image: "/placeholder.svg?height=300&width=300&text=Lip+Soufflé&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
      isMatch: true,
      matchPercentage: 90,
    },
    {
      id: "9",
      name: "Lip Oil",
      brand: "AMI COLÉ",
      price: 20,
      image: "/placeholder.svg?height=300&width=300&text=Lip+Oil&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
      isMatch: true,
      matchPercentage: 88,
    },
  ]

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col items-start justify-between gap-4 mb-8 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome, Jessica</h1>
            <p className="mt-2 text-gray-600">Manage your account, view your beauty profile, and track your orders.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 mr-4 bg-gray-200 rounded-full"></div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Jessica Smith</h3>
                  <p className="text-xs text-gray-500">jessica@example.com</p>
                </div>
              </div>

              <nav className="space-y-1">
                <Link
                  href="/account"
                  className="flex items-center px-3 py-2 text-sm font-medium text-pink-600 bg-pink-50 rounded-md"
                >
                  <User className="w-5 h-5 mr-3" />
                  My Profile
                </Link>
                <Link
                  href="/account/saved"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
                >
                  <Heart className="w-5 h-5 mr-3" />
                  Saved Products
                </Link>
                <Link
                  href="/account/orders"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
                >
                  <ShoppingBag className="w-5 h-5 mr-3" />
                  Purchase History
                </Link>
                <Link
                  href="/scan"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
                >
                  <Camera className="w-5 h-5 mr-3" />
                  Rescan My Face
                </Link>
                <Link
                  href="/quiz"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Redo Quiz
                </Link>
                <Link
                  href="/account/settings"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
                >
                  <Settings className="w-5 h-5 mr-3" />
                  Settings
                </Link>
                <Link
                  href="/logout"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  Sign Out
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile">
              <TabsList className="mb-6">
                <TabsTrigger value="profile">My Profile</TabsTrigger>
                <TabsTrigger value="saved">Saved Products</TabsTrigger>
                <TabsTrigger value="orders">Purchase History</TabsTrigger>
                <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <div className="p-6 bg-white rounded-lg shadow-sm">
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

                  <div className="flex gap-4 mt-6">
                    <Button asChild className="bg-pink-600 hover:bg-pink-700">
                      <Link href="/scan">
                        <Camera className="mr-2 h-4 w-4" />
                        Rescan My Face
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/quiz">Update Preferences</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="saved">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900">Saved Products</h2>

                  <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
                    {savedProducts.map((product) => (
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
              </TabsContent>

              <TabsContent value="orders">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900">Purchase History</h2>

                  <div className="mt-6 space-y-6">
                    {purchaseHistory.map((order) => (
                      <div key={order.id} className="p-4 border rounded-md">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <p className="text-sm font-medium text-gray-900">Order #{order.id}</p>
                            <p className="text-xs text-gray-500">{order.date}</p>
                          </div>
                          <div>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {order.status}
                            </span>
                          </div>
                          <div className="text-sm font-medium text-gray-900">${order.total.toFixed(2)}</div>
                        </div>

                        <div className="mt-4">
                          <h4 className="text-xs font-medium text-gray-500">Items</h4>
                          <ul className="mt-2 space-y-2">
                            {order.items.map((item) => (
                              <li key={item.id} className="flex justify-between text-sm">
                                <span>
                                  {item.quantity}x {item.name}
                                </span>
                                <span>${item.price.toFixed(2)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-4">
                          <Button variant="outline" size="sm">
                            View Order Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="recommendations">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900">Recommended For You</h2>

                  <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
                    {recommendedProducts.map((product) => (
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
                    <Button asChild variant="outline">
                      <Link href="/recommendations">View All Recommendations</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  )
}
