import { Card, DialogContent } from '@/components/ui';
import Breadcrumb from '@/features/common/Breadcrumb';
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog';
import { Separator } from '@radix-ui/react-select';
import { SocialIcon } from 'react-social-icons';

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
          { key: 'wiz-player', label: 'Wiz Plyer' },
          { key: 'coach', label: '응원단', isActive: true },
        ]}
      />
      {/* 응원단 컴포넌트 */}
      <div className="text-wiz-white grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {cheerleaderList.map((cheerleader) => (
          <Dialog>
            <DialogTrigger asChild>
              <Card className="flex flex-col items-center">
                <img src={cheerleader.imgPath} alt="응원단 사진" />
                <h1>{cheerleader.leaderName}</h1>
              </Card>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[650px] h-auto bg-wiz-black text-wiz-white">
              <div className="flex gap-4">
                <img
                  className="w-2/5"
                  src="https://media.istockphoto.com/id/1328176926/ko/%EB%B2%A1%ED%84%B0/%EC%9D%91%EC%9B%90%EC%9D%B4%EB%9D%BC%EB%8A%94-%EB%8B%A8%EC%96%B4%EC%99%80-%ED%95%A8%EA%BB%98-%EB%9D%BC%EC%9A%B0%EB%93%9C-%EC%8A%A4%ED%94%BC%EC%BB%A4%EC%9D%98-%EB%B3%B4%EA%B8%B0.jpg?s=1024x1024&w=is&k=20&c=l7YaOg604gbmu4h_2Qa0sNBI2XeBcpMfU3Ekua5YlSw="
                  alt="사진"
                />
                <div>
                  <div className="flex gap-2 items-baseline">
                    <p className="text-2xl font-bold">
                      {cheerleader.leaderName}
                    </p>
                    <p className="text-xl font-bold">
                      {cheerleader.leaderEngName}
                    </p>
                    <SocialIcon
                      target="_blank"
                      url={`https://www.instagram.com/${cheerleader.snsId}/`}
                    />
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="flex items-baseline gap-4">
                      <p className="font-semibold text-lg">생년월일</p>
                      <p>{cheerleader.leaderBirthDay}</p>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <p className="font-semibold text-lg">포지션</p>
                      <p>{cheerleader.leaderPosition}</p>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <p className="font-semibold text-lg">닉네임</p>
                      <p>{cheerleader.leaderNickName}</p>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <p className="font-semibold text-lg">좋아하는 선수</p>
                      <p>{cheerleader.leaderLikePlayer}</p>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <p className="font-semibold text-lg">모토</p>
                      <p>{cheerleader.leaderMotto}</p>
                    </div>
                    <div className="mt-2">
                      <p className="font-semibold text-lg">경력</p>
                      <Separator className="w-full h-0.5 bg-wiz-red mb-2" />
                      <p>{cheerleader.leaderCareer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}

export default CheerleaderPage;
