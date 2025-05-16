import Link from "next/link";
import { Button } from "../../components/ui/button";
import React from "react";

interface PromoCardProps {
  title: string;
  description: string;
  cta: string;
  icon: React.ReactNode;
  href: string;
}

export default function PromoCard({ title, description, cta, icon, href }: PromoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center">
      {icon}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <Button asChild className="bg-pink-600 hover:bg-pink-700">
        <Link href={href}>{cta}</Link>
      </Button>
    </div>
  );
} 