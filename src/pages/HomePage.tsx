import {
  MainImageSlider,
  MatchInfo,
  WizGallery,
  WizVideo,
} from '@/features/home';

function HomePage() {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* 슬라이더 영역 */}
      <MainImageSlider />

      {/* 경기 일정, 비디오, 갤러리 */}
      <div className="w-full flex flex-col items-center gap-4">
        <MatchInfo />
        <WizVideo />
        <WizGallery />
      </div>
    </div>
  );
}

export default HomePage;
