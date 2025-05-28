"use client"

import React from "react";
import ShopView from "@/components/shop/ShopView"

interface ShopPageProps {
  params: {
    type: string
  }
}

export default function ShopTypePage({ params }: ShopPageProps) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
  const { type } = React.use(params as any) as { type: string };
  return <ShopView initialType={type.charAt(0).toUpperCase() + type.slice(1)} />;
} 