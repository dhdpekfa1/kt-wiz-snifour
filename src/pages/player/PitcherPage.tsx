import Banner from '@/features/common/Banner';
import Breadcrumb from '@/features/common/Breadcrumb';
import { PlayerList } from '@/features/player/components';

function PitcherPage() {
  return (
    <div>
      <Banner>
        <Banner.Image
          src="https://placehold.co/1200x200/141414/642521?text=WIZ+PITCHERS"
          alt="KT WIZ 투수"
        />
        <Banner.Overlay>
          <Banner.Heading title="투수" />
          <Banner.Description description="KT Wiz의 자랑스런 '첫 번째 선수단'을 소개합니다." />
        </Banner.Overlay>
      </Banner>

      <div className="my-20">
        <Breadcrumb />
        {/* 투수 리스트 */}
        <PlayerList playerList={[]} endpoint="pitcher" />
      </div>
    </div>
  );
}

export default PitcherPage;
