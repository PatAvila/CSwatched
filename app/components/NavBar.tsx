import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full bg-black border-b border-gray-900">
      <div className="w-full flex items-center justify-start sm:justify-center gap-6 h-12 px-2 overflow-x-auto sm:overflow-x-visible whitespace-nowrap sm:whitespace-normal scrollbar-none">
        <Link href="/shop" className="text-sm font-medium text-white hover:text-pink-400 transition">Shop All</Link>
        <Link href="/brands" className="text-sm font-medium text-white hover:text-pink-400 transition">Brands</Link>
        <Link href="/shop/skincare" className="text-sm font-medium text-white hover:text-pink-400 transition">Skincare</Link>
        <Link href="/shop/makeup" className="text-sm font-medium text-white hover:text-pink-400 transition">Makeup</Link>
        <Link href="/shop/lipcare" className="text-sm font-medium text-white hover:text-pink-400 transition">Lipcare</Link>
        <Link href="/shop/nails" className="text-sm font-medium text-white hover:text-pink-400 transition">Nails</Link>
        <Link href="/shop/accessories" className="text-sm font-medium text-white hover:text-pink-400 transition">Accessories</Link>
      </div>
    </nav>
  );
} 