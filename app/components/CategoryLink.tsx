import Link from "next/link";
import React from "react";

interface CategoryLinkProps {
  name: string;
  icon: React.ReactNode;
  href: string;
}

const peach = "#FBE7DD";

export default function CategoryLink({ name, icon, href }: CategoryLinkProps) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center aspect-square min-h-[120px] rounded-xl shadow-sm hover:shadow-md transition border border-white"
      style={{ background: peach }}
    >
      <div className="mb-2">{icon}</div>
      <span className="text-sm font-medium text-gray-900">{name}</span>
    </Link>
  );
} 