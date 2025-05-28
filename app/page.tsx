import { Button } from "../components/ui/button"
import { Camera, Droplet, Sun, Gift, Sparkles, Eye, Scissors, Brush, Smile } from "lucide-react"
import Link from "next/link"
import CallToActionScan from "../components/ui/CallToActionScan"
import { useMemo } from "react"
import SafeImage from "./components/SafeImage"
import CategoryLink from "./components/CategoryLink"
import BrandLink from "./components/BrandLink"
import PromoCard from "./components/PromoCard"
import TestimonialCard from "./components/TestimonialCard"

const peach = "#FBE7DD";
const peachDark = "#E7BFA7";
const peachText = "#2D2320";
const pink = "#E38CB7";
const lightBg = "#F6F6F6"; // very light gray for contrast

const categories = [
  { name: "Foundation", icon: <Droplet className="h-8 w-8 text-black" /> },
  { name: "Lipstick", icon: <Smile className="h-8 w-8 text-black" /> },
  { name: "Eyeshadow", icon: <Eye className="h-8 w-8 text-black" /> },
  { name: "Skincare", icon: <Sparkles className="h-8 w-8 text-black" /> },
  { name: "Haircare", icon: <Scissors className="h-8 w-8 text-black" /> },
  { name: "Tools", icon: <Brush className="h-8 w-8 text-black" /> },
]

const allBrands = [
  { id: "1", name: "Chanel", logo: "/placeholder.svg?height=80&width=80&text=Chanel", tagline: "Luxury cosmetics" },
  { id: "2", name: "Fenty Beauty", logo: "/placeholder.svg?height=80&width=80&text=Fenty", tagline: "Inclusive beauty" },
  { id: "3", name: "Dior", logo: "/placeholder.svg?height=80&width=80&text=Dior", tagline: "Timeless elegance" },
  { id: "4", name: "Rare Beauty", logo: "/placeholder.svg?height=80&width=80&text=Rare", tagline: "Clean formulas" },
]

const seasonalPromos = [
  {
    title: "Summer is Here!",
    description: "Discover products perfect for the season.",
    cta: "Find My Match",
    icon: <Sun className="h-10 w-10 text-yellow-400 mx-auto mb-2" />,
    href: "/shop/foundation"
  },
  {
    title: "Shopping for someone special?",
    description: "Need some ideas? We've got you covered.",
    cta: "Let us help!",
    icon: <Gift className="h-10 w-10 text-pink-400 mx-auto mb-2" />,
    href: "/quiz"
  }
]

const testimonials = [
  {
    user: "@beautyjayden",
    text: "The foundation finder is a match made in heaven – no more mixing shades!",
    img: "/placeholder.svg?height=60&width=60&text=User1"
  },
  {
    user: "@makeupsofiya",
    text: "Swatched recommended the shades and it's so easy, my everyday lip color!",
    img: "/placeholder.svg?height=60&width=60&text=User2"
  },
  {
    user: "@jessytina",
    text: "This site gives me the perfect blush that complements my skin tone!",
    img: "/placeholder.svg?height=60&width=60&text=User3"
  },
  {
    user: "@beautybytaylor",
    text: "These makeup picks from my AI match explain my style!",
    img: "/placeholder.svg?height=60&width=60&text=User4"
  },
]

function shuffle(array: any[]) {
  return array.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)
}

export default function LandingPage() {
  // Randomize brands on each render
  const trendingBrands = useMemo(() => shuffle(allBrands), [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-neutral-100">
        <div className="container px-4 py-12 mx-auto md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Discover your perfect beauty match</h1>
              <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto md:mx-0">
                AI-powered personalization for your unique beauty profile. Find products that truly work for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild className="bg-pink-600 hover:bg-pink-700 text-lg px-6 py-3">
                  <Link href="/scan">
                    <Camera className="mr-2 h-5 w-5" /> Facial Scan
                  </Link>
                </Button>
                <Button asChild variant="outline" className="text-lg px-6 py-3">
                  <Link href="/quiz">Take Beauty Quiz</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              {/* Use a neutral placeholder if the image is missing */}
              <div className="w-80 h-80 bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-5xl text-gray-400">💄</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-8 bg-neutral-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <CategoryLink
                key={cat.name}
                name={cat.name}
                icon={cat.icon}
                href={`/shop/${cat.name.toLowerCase()}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Scan Your Face Feature */}
      <section className="py-10" style={{ background: peach }}>
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2" style={{ color: peachText }}>Scan Your Face</h2>
              <p className="mb-4 text-[15px] text-[#5B4A3A]">Our AI will analyze your facial features and skin characteristics to provide personalized product recommendations.</p>
              <ol className="space-y-3 mb-4">
                {[
                  { label: "Position Your Face", desc: "Center your face in the frame with good lighting" },
                  { label: "AI Analysis", desc: "We'll analyze your skin tone, type, and facial features" },
                  { label: "Get Personalized Matches", desc: "View products selected specifically for you" },
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex items-center justify-center rounded-full bg-white border border-[#E7BFA7] text-[#E7BFA7] font-bold w-7 h-7 text-base mt-0.5">{i + 1}</span>
                    <span>
                      <span className="font-semibold text-[#2D2320]">{step.label}</span>
                      <span className="block text-xs text-[#5B4A3A]">{step.desc}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <Button asChild className="bg-[#E38CB7] hover:bg-pink-500 text-white rounded-full px-6 py-2 text-base font-semibold">
                <Link href="/scan">Start Face Scan</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              {/* Use a neutral placeholder if the image is missing */}
              <div className="relative w-72 h-72 bg-gray-200 rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
                <SafeImage
                  src="/face-scan-demo.jpg"
                  alt="Face scan demo"
                  className="rounded-xl object-cover w-full h-full"
                  style={{ objectPosition: 'center' }}
                  fallback={<span className="text-6xl text-gray-400">📷</span>}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-40 rounded-xl p-4 text-white text-center">
                    <Camera className="mx-auto mb-2" />
                    <span className="block font-semibold">Camera permission required</span>
                    <span className="block text-xs mt-1">Click \"Start Face Scan\" to begin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Brands */}
      <section className="py-10 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Trending Brands</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">
            {trendingBrands.map((brand) => (
              <BrandLink
                key={brand.id}
                name={brand.name}
                logo={brand.logo}
                tagline={brand.tagline}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Promotions */}
      <section className="py-10 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seasonalPromos.map((promo) => (
              <PromoCard
                key={promo.title}
                title={promo.title}
                description={promo.description}
                cta={promo.cta}
                icon={promo.icon}
                href={promo.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Community */}
      <section className="py-10 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">What Our Community Says</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.user} user={t.user} text={t.text} img={t.img} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="py-8 bg-neutral-50">
        <div className="container px-4 mx-auto">
          <CallToActionScan />
        </div>
      </section>
    </>
  )
}
