import {
  MainImageSlider,
  MatchInfo,
  TeamRanking,
  WizGallery,
  WizVideo,
} from '@/features/home';

function HomePage() {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* 슬라이더 영역 */}
      <MainImageSlider />

      {/* 우리 팀 순위 */}
      <TeamRanking />

      {/* 경기 일정, 비디오, 갤러리 */}
      <div className="w-[1200px] flex flex-col items-center gap-4">
        <MatchInfo />
        <WizVideo />
        <WizGallery />
      </div>
    </div>
  );
}

export default HomePage;
