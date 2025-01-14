import Banner from '@/features/common/Banner';
import Breadcrumb from '@/features/common/Breadcrumb';
import { MediaLayout, SearchBar, StoryGridView } from '@/features/media';
import '@/features/media/css/media-grid-layout.css';
import '@/features/media/css/media.css';
import { useSearchParams } from 'react-router';

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
      <Breadcrumb
        leftComponent={
          <SearchBar
            value={searchParams.get('searchWord') || ''}
            onSubmit={(searchWord) =>
              setSearchParams({
                ...Object.fromEntries(searchParams.entries()),
                searchWord,
              })
            }
          />
        }
      />

      <StoryGridView />
    </MediaLayout>
  );
};

export default StoryPage;
