import Link from "next/link";
import SafeImage from "./SafeImage";
import React from "react";

interface BrandLinkProps {
  name: string;
  logo: string;
  tagline: string;
}

export default function BrandLink({ name, logo, tagline }: BrandLinkProps) {
  // Assuming brand links navigate to a path like /brands/brandname
  const href = `/brands/${name.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <Link href={href} className="flex flex-col items-center hover:opacity-80 transition">
      <div className="w-16 h-16 rounded-full bg-gray-100 mb-2 flex items-center justify-center overflow-hidden">
        <SafeImage
          src={logo}
          alt={`${name} logo`}
          className="w-full h-full object-contain"
          fallback={<span className="text-2xl text-gray-400">🛍️</span>}
        />
      </div>
      <span className="font-medium text-gray-900 text-sm">{name}</span>
      <span className="text-xs text-gray-500 text-center">{tagline}</span>
    </Link>
  );
} 