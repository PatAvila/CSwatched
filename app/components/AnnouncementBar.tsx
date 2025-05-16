import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <Link href="/account" className="block w-full bg-black text-white text-xs text-center py-2 cursor-pointer hover:bg-gray-900 transition">
      Create an account to receive standard shipping on all orders!
    </Link>
  );
} 