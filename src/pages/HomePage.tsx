import SEO from '@/components/SEO';
import {
  MainImageSlider,
  MatchInfo,
  WizGallery,
  WizVideo,
} from '@/features/home';

function HomePage() {
  return (
    <div className="flex flex-col items-center gap-4">
      <SEO
        title="KT Wiz 홈페이지"
        description="가을의 마법사 KT Wiz가 궁금하신가요?"
        keywords="ktwiz, 야구, kt"
      />
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
