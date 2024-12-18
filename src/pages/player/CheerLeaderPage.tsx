import Breadcrumb from '@/features/common/Breadcrumb';
import CheerleaderDialog from '@/features/player/components/CheerLeaderDialog';

const cheerleaderList = [
  {
    imgPath:
      'https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/d29b494e3a4d4703932d74e58f99bebf.png',
    leaderBirthDay: '1984.02.15',
    leaderCareer:
      '케이티위즈 야구단,\n삼성썬더스 농구단,\n삼성생명블루밍스 농구단',
    leaderEngName: 'PARK SOO MI',
    leaderLikePlayer: '배정대',
    leaderMotto: '겸손한 자신감',
    leaderName: '박수미',
    leaderNickName: '목소리미녀',
    leaderPosition: '아나운서',
    snsId: 'voicesoomipark',
  },
];

function CheerleaderPage() {
  return (
    <div className="w-[1200px]">
      {/* breadcrumbs */}
      <Breadcrumb
        paths={[
          { key: 'home', label: 'Home' },
          { key: 'player', label: 'Player' },
          { key: 'wiz-player', label: 'Wiz Player' },
          { key: 'coach', label: '응원단', isActive: true },
        ]}
      />
      {/* 응원단 컴포넌트 :  TODO - 고유 넘버로 key 수정 */}
      <div className="text-wiz-white grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {cheerleaderList.map((cheerleader) => (
          <CheerleaderDialog data={cheerleader} key={cheerleader.leaderName} />
        ))}
      </div>
    </div>
  );
}

export default CheerleaderPage;
