import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  categoryName: string;
  imageUrl: string;
  href: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ categoryName, imageUrl, href }) => {
  return (
    <Link href={href} className="block w-[180px] h-[140px] rounded-xl overflow-hidden shadow-lg relative flex-shrink-0 group">
      <Image
        src={imageUrl}
        alt={categoryName}
        fill
        className="object-cover"
        sizes="180px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <span className="absolute left-3 bottom-3 text-white font-bold text-lg drop-shadow">
        {categoryName}
      </span>
    </Link>
  );
};

export default CategoryCard; 