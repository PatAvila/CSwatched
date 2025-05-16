import Link from "next/link"

interface BrandCardProps {
  id: string
  name: string
  logo: string
  description?: string
}

export default function BrandCard({ id, name, logo, description }: BrandCardProps) {
  return (
    <Link href={`/brand/${id}`} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
        <img src={logo || "/placeholder.svg"} alt={name} className="h-full w-full object-contain object-center p-4" />
      </div>
      <h3 className="mt-4 text-sm text-center text-gray-700">{name}</h3>
      {description && <p className="mt-1 text-sm text-center text-gray-500">{description}</p>}
    </Link>
  )
}
