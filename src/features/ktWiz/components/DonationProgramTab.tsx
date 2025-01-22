import { Breadcrumb } from '@/features/common';

const DonationProgramTab = () => {
  return (
    <div className="w-full h-full">
      <Breadcrumb />
      <img
        className="w-full h-full object-cover"
        src="/assets/Ktwiz/donation-program.jpg"
        alt="donation-program"
      />
    </div>
  );
};

export { DonationProgramTab };
