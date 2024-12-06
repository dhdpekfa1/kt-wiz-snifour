import Banner from '@/features/media/common/Banner';
import MediaLayout from '@/features/media/common/MediaLayout';
import SearchBar from '@/features/media/common/SearchBar';
import FirstPitchContent from '@/features/media/components/firstPitch/FirstPitchContent';

import '@/features/media/css/media.css';
import { cn } from '@/lib/utils';

/** 시구자 정보 페이지 */
const FirstPitchPage = () => {
  return (
    <MediaLayout
      header={
        <Banner>
          <Banner.Image
            src="https://placehold.co/1200x200/141414/642521?text=FIRST+PITCH"
            alt="FIRST PITCH"
          />
          <Banner.Overlay>
            <Banner.Heading
              title="WIZ FIRST PITCH"
              subtitle="마운드의 첫 번째 손님"
            />
            <Banner.Description description="야구장을 빛낸 특별한 손님들, 시구자들과 함께 만든 KT WIZ의 소중한 추억" />
          </Banner.Overlay>
        </Banner>
      }
    >
      <div className={cn('media-header', 'flex justify-end')}>
        <SearchBar />
      </div>
      <FirstPitchContent />
    </MediaLayout>
  );
};

export default FirstPitchPage;
