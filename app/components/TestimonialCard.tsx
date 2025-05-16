import React from "react";
import SafeImage from "./SafeImage";

interface TestimonialCardProps {
  user: string;
  text: string;
  img: string;
}

export default function TestimonialCard({ user, text, img }: TestimonialCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center">
      <SafeImage
        src={img}
        alt={`${user}'s profile picture`}
        className="w-14 h-14 rounded-full mb-2 object-cover"
        fallback={<span className="text-xl text-gray-400">👤</span>}
      />
      <span className="font-medium text-gray-900">{user}</span>
      <p className="text-gray-600 text-sm mt-2">"{text}"</p>
    </div>
  );
} 