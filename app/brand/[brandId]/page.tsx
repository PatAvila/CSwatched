import BrandBanner from '@/components/brand/BrandBanner';
import CompanyAnnouncementBanner from '@/components/brand/CompanyAnnouncementBanner';
import ShopByCategoryCarousel from '@/components/brand/ShopByCategoryCarousel';
import NewArrivalsCarousel from '@/components/brand/NewArrivalsCarousel';
import AllProductsList from '@/components/brand/AllProductsList';
import RecentlyViewedItemsList from '@/components/brand/RecentlyViewedItemsList';

export default function BrandPage({ params }: { params: { brandId: string } }) {
  // Example: use params.brandId for fetching brand data
  return (
    <div>
      <div className="container mx-auto px-4">
        <BrandBanner />
        <CompanyAnnouncementBanner />
        <ShopByCategoryCarousel />
        <NewArrivalsCarousel />
        <AllProductsList />
        <RecentlyViewedItemsList />
      </div>
    </div>
  );
} 