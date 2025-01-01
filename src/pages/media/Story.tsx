import { useSearchParams } from 'react-router';

import Banner from '@/features/common/Banner';
import MediaLayout from '@/features/media/common/MediaLayout';
import SearchBar from '@/features/media/common/SearchBar';
import StoryContent from '@/features/media/components/story/StoryContent';

import '@/features/media/css/media-grid-layout.css';
import '@/features/media/css/media.css';
import { cn } from '@/lib/utils';

/** 스토리 페이지 */
const StoryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <MediaLayout
      header={
        <Banner>
          <Banner.Image
            src="https://placehold.co/1200x200/141414/642521?text=WIZ+STORY"
            alt="kt wiz story"
          />
          <Banner.Overlay>
            <Banner.Heading
              title="WIZ STORY"
              subtitle="KT WIZ의 특별한 이야기"
            />
            <Banner.Description description="선수들의 활약상과 팬들과 함께한 순간들을 영상으로 만나보세요." />
          </Banner.Overlay>
        </Banner>
      }
    >
      <div className={cn('media-header', 'justify-end')}>
        <SearchBar
          value={searchParams.get('searchWord') || ''}
          onSubmit={(searchWord) =>
            setSearchParams({
              ...Object.fromEntries(searchParams.entries()),
              searchWord,
            })
          }
        />
      </div>
      <StoryContent />
    </MediaLayout>
  );
};

export default StoryPage;
