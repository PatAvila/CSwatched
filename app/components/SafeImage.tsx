'use client'
import { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: React.ReactNode;
}

export default function SafeImage({ fallback, ...props }: SafeImageProps) {
  const [error, setError] = useState(false);
  if (error && fallback) return <>{fallback}</>;
  return <img {...props} onError={() => setError(true)} />;
} 