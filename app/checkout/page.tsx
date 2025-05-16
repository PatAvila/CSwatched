import Layout from "@/components/layout/Layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, CreditCard } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  // Mock cart items
  const cartItems = [
    {
      id: "1",
      name: "Soft Matte Foundation",
      brand: "Fenty Beauty",
      price: 38,
      shade: "150 - Medium",
      quantity: 1,
      image: "/placeholder.svg?height=60&width=60&text=F&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "2",
      name: "Pro Filt'r Concealer",
      brand: "Fenty Beauty",
      price: 28,
      shade: "150 - Medium",
      quantity: 1,
      image: "/placeholder.svg?height=60&width=60&text=C&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
    {
      id: "3",
      name: "Cheeks Out Blush",
      brand: "Fenty Beauty",
      price: 22,
      shade: "Strawberry Drip",
      quantity: 2,
      image: "/placeholder.svg?height=60&width=60&text=B&fontsize=16&textcolor=%23d946ef&bgcolor=%23fdf2f8",
    },
  ]

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 5.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Shipping Information */}
                <div className="bg-white p-6 rounded-lg border">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Shipping Information</h2>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" className="mt-1" defaultValue="Jessica" />
                    </div>
                    <div>
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" className="mt-1" defaultValue="Smith" />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" className="mt-1" defaultValue="jessica@example.com" />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" className="mt-1" defaultValue="123 Main St" />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" className="mt-1" defaultValue="New York" />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input id="state" className="mt-1" defaultValue="NY" />
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" className="mt-1" defaultValue="10001" />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" className="mt-1" defaultValue="United States" />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" className="mt-1" defaultValue="(212) 555-1234" />
                    </div>
                  </div>
                </div>

                {/* Shipping Method */}
                <div className="bg-white p-6 rounded-lg border">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Shipping Method</h2>

                  <RadioGroup defaultValue="standard">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border p-4 rounded-md">
                        <div className="flex items-center">
                          <RadioGroupItem value="standard" id="standard" />
                          <Label htmlFor="standard" className="ml-2">
                            <div>Standard Shipping (3-5 business days)</div>
                            <div className="text-sm text-gray-500">Delivered by Jun 15-17</div>
                          </Label>
                        </div>
                        <div className="font-medium">$5.99</div>
                      </div>
                      <div className="flex items-center justify-between border p-4 rounded-md">
                        <div className="flex items-center">
                          <RadioGroupItem value="express" id="express" />
                          <Label htmlFor="express" className="ml-2">
                            <div>Express Shipping (2-3 business days)</div>
                            <div className="text-sm text-gray-500">Delivered by Jun 13-14</div>
                          </Label>
                        </div>
                        <div className="font-medium">$12.99</div>
                      </div>
                      <div className="flex items-center justify-between border p-4 rounded-md">
                        <div className="flex items-center">
                          <RadioGroupItem value="overnight" id="overnight" />
                          <Label htmlFor="overnight" className="ml-2">
                            <div>Overnight Shipping (1 business day)</div>
                            <div className="text-sm text-gray-500">Delivered by Jun 12</div>
                          </Label>
                        </div>
                        <div className="font-medium">$19.99</div>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Payment Information */}
                <div className="bg-white p-6 rounded-lg border">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Information</h2>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" className="mt-1" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiration">Expiration Date</Label>
                        <Input id="expiration" placeholder="MM/YY" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="name-on-card">Name on Card</Label>
                      <Input id="name-on-card" placeholder="Jessica Smith" className="mt-1" />
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="save-card" />
                      <Label htmlFor="save-card" className="ml-2 text-sm">
                        Save this card for future purchases
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Button asChild variant="outline">
                  <Link href="/cart">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Return to Cart
                  </Link>
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border sticky top-24">
                <div className="p-6">
                  <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

                  <div className="mt-6 divide-y">
                    {cartItems.map((item) => (
                      <div key={item.id} className="py-4 flex">
                        <div className="flex-shrink-0 w-16 h-16 border rounded-md overflow-hidden">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>

                        <div className="ml-4 flex-1 flex flex-col">
                          <div>
                            <div className="flex justify-between text-sm font-medium text-gray-900">
                              <h3>{item.name}</h3>
                              <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <p className="mt-1 text-xs text-gray-500">{item.brand}</p>
                            <p className="mt-1 text-xs text-gray-500">
                              {item.shade} • Qty: {item.quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

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
                      <CreditCard className="mr-2 h-4 w-4" />
                      Place Order
                    </Button>
                  </div>

                  <div className="mt-6 text-xs text-gray-500 text-center">
                    By placing your order, you agree to our{" "}
                    <Link href="/terms" className="text-pink-600 hover:text-pink-700">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-pink-600 hover:text-pink-700">
                      Privacy Policy
                    </Link>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
