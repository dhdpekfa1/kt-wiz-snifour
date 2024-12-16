import Breadcrumb from '@/features/common/Breadcrumb';

/*const mockCheerTeamList = [
  {
    imgPath:
      'https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/d29b494e3a4d4703932d74e58f99bebf.png',
    imgPrvwPath:
      'https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/5bac60a758864203b48a29bdff39695e.png',
    leaderBirthDay: '1984.02.15',
    leaderNickName: "목소리미녀",

  },
];*/

function CheerleaderPage() {
  return (
    <div className="w-[1200px]">
      {/* breadcrumbs */}
      <Breadcrumb
        paths={[
          { key: 'home', label: 'Home' },
          { key: 'player', label: 'Player' },
          { key: 'wiz-player', label: 'Wiz Plyer' },
          { key: 'coach', label: '응원단', isActive: true },
        ]}
      />
    </div>
  );
}

export default CheerleaderPage;
