import Breadcrumb from '@/features/common/Breadcrumb';

const GeneralMemberTab = () => {
  return (
    <div className="w-full h-full">
      <Breadcrumb />
      <img
        className="w-full h-full object-cover"
        src="/assets/Ktwiz/general-member.jpg"
        alt="general-member"
      />
    </div>
  );
};

export { GeneralMemberTab };
