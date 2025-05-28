import React from 'react';

const CompanyAnnouncementBanner: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden flex justify-center items-center">
      <img
        src="/company-announcement-banner.jpg.png"
        alt="Company Announcement Banner"
        className="w-full h-40 md:h-80 object-cover"
      />
    </div>
  );
};

export default CompanyAnnouncementBanner; 