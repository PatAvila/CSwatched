import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProductCardProps {
  id: string
  name: string
  brand: string
  price: number
  image: string
  isMatch?: boolean
  matchPercentage?: number
}

export default function ProductCard({ id, name, brand, price, image, isMatch, matchPercentage }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-100">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        {isMatch && (
          <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs font-medium px-2 py-1 rounded-full">
            {matchPercentage}% Match
          </div>
        )}
        <Button variant="ghost" size="icon" className="absolute top-2 left-2 bg-white/80 hover:bg-white">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/product/${id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{brand}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price.toFixed(2)}</p>
      </div>
    </div>
  )
}
