import Banner from '@/features/media/common/Banner';
import MediaLayout from '@/features/media/common/MediaLayout';
import SearchBar from '@/features/media/common/SearchBar';
import HighlightContent from '@/features/media/components/highlight/HighlightContent';

import '@/features/media/css/media-list-layout.css';
import '@/features/media/css/media.css';
import { cn } from '@/lib/utils';

/** 하이라이트 페이지 */
const HighlightPage = () => {
  return (
    <MediaLayout
      header={
        <Banner>
          <Banner.Image
            src="https://placehold.co/1200x200/141414/642521?text=HIGHLIGHT"
            alt="kt wiz Highlight"
          />
          <Banner.Overlay>
            <Banner.Heading title="WIZ Highlight" subtitle="KT WIZ의 명장면" />
            <Banner.Description description="짜릿한 홈런부터 환상적인 수비까지, KT WIZ가 만들어낸 최고의 순간들을 영상으로 만나보세요." />
          </Banner.Overlay>
        </Banner>
      }
    >
      <div className={cn('media-header', 'justify-end')}>
        <SearchBar />
      </div>
      <HighlightContent />
    </MediaLayout>
  );
};

export default HighlightPage;
