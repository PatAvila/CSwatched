import Layout from "@/components/layout/Layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react"
import Link from "next/link"
import ProductCard from "@/components/ui/ProductCard"

export default function CartPage() {
  // Mock cart items
  const cartItems = [
    {
      id: "1",
      name: "Soft Matte Foundation",
      brand: "Fenty Beauty",
      price: 38,
      shade: "150 - Medium",
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100&text=Foundation&fontsize=12&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "2",
      name: "Pro Filt'r Concealer",
      brand: "Fenty Beauty",
      price: 28,
      shade: "150 - Medium",
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100&text=Concealer&fontsize=12&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "3",
      name: "Cheeks Out Blush",
      brand: "Fenty Beauty",
      price: 22,
      shade: "Strawberry Drip",
      quantity: 2,
      image: "/placeholder.svg?height=100&width=100&text=Blush&fontsize=12&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
  ]

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 5.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  // Mock recommended products
  const recommendedProducts = [
    {
      id: "4",
      name: "Setting Powder",
      brand: "Fenty Beauty",
      price: 34,
      image:
        "/placeholder.svg?height=300&width=300&text=Setting+Powder&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "5",
      name: "Gloss Bomb",
      brand: "Fenty Beauty",
      price: 20,
      image: "/placeholder.svg?height=300&width=300&text=Lip+Gloss&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "6",
      name: "Killawatt Highlighter",
      brand: "Fenty Beauty",
      price: 36,
      image: "/placeholder.svg?height=300&width=300&text=Highlighter&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "7",
      name: "Stunna Lip Paint",
      brand: "Fenty Beauty",
      price: 26,
      image: "/placeholder.svg?height=300&width=300&text=Lip+Paint&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
  ]

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">Your Shopping Bag</h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border overflow-hidden">
                <div className="p-6">
                  <h2 className="text-lg font-medium text-gray-900">Items ({cartItems.length})</h2>

                  <div className="mt-6 divide-y">
                    {cartItems.map((item) => (
                      <div key={item.id} className="py-6 flex">
                        <div className="flex-shrink-0 w-24 h-24 border rounded-md overflow-hidden">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>

                        <div className="ml-4 flex-1 flex flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{item.name}</h3>
                              <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
                            <p className="mt-1 text-sm text-gray-500">Shade: {item.shade}</p>
                          </div>
                          <div className="flex-1 flex items-end justify-between text-sm">
                            <div className="flex items-center border rounded-md">
                              <button className="p-2">
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="px-4">{item.quantity}</span>
                              <button className="p-2">
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>

                            <div className="flex">
                              <button type="button" className="font-medium text-pink-600 hover:text-pink-500">
                                <X className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border overflow-hidden">
                <div className="p-6">
                  <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between text-sm">
                      <p className="text-gray-600">Subtotal</p>
                      <p className="font-medium text-gray-900">${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <p className="text-gray-600">Shipping</p>
                      <p className="font-medium text-gray-900">${shipping.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <p className="text-gray-600">Tax</p>
                      <p className="font-medium text-gray-900">${tax.toFixed(2)}</p>
                    </div>
                    <div className="border-t pt-4 flex justify-between">
                      <p className="text-base font-medium text-gray-900">Total</p>
                      <p className="text-base font-medium text-gray-900">${total.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-pink-600 hover:bg-pink-700">
                      Checkout
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center">
                      <div className="flex-grow border-t border-gray-200"></div>
                      <span className="mx-4 text-sm text-gray-500">or</span>
                      <div className="flex-grow border-t border-gray-200"></div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <Button variant="outline" className="w-full">
                        Continue Shopping
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mt-6 bg-white rounded-lg border overflow-hidden">
                <div className="p-6">
                  <h2 className="text-sm font-medium text-gray-900">Promo Code</h2>
                  <div className="mt-4 flex space-x-2">
                    <Input placeholder="Enter code" className="flex-1" />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-12 text-center">
            <ShoppingBag className="mx-auto h-16 w-16 text-gray-400" />
            <h2 className="mt-4 text-lg font-medium text-gray-900">Your shopping bag is empty</h2>
            <p className="mt-2 text-sm text-gray-600">Looks like you haven't added any products to your bag yet.</p>
            <div className="mt-6">
              <Button asChild className="bg-pink-600 hover:bg-pink-700">
                <Link href="/shop">Start Shopping</Link>
              </Button>
            </div>
          </div>
        )}

        {/* Recommended Products */}
        {cartItems.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900">You Might Also Like</h2>
            <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-4">
              {recommendedProducts.map((product) => (
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
        )}
      </div>
    </Layout>
  )
}
