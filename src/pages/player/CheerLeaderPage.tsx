import Breadcrumb from '@/features/common/Breadcrumb';

function CheerTeamPage() {
  return (
    <div className="w-[1200px]">
      {/* breadcrumbs */}
      <Breadcrumb
        paths={[
          { key: 'home', label: 'Home' },
          { key: 'player', label: 'Player' },
          { key: 'wiz-player', label: 'Wiz Plyer' },
          { key: 'coach', label: '코치', isActive: true },
        ]}
      />
    </div>
  );
}

export default CheerTeamPage;
