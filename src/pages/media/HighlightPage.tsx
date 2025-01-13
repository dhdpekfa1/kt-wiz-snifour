import Banner from '@/features/common/Banner';
import MediaLayout from '@/features/media/common/MediaLayout';
import SearchBar from '@/features/media/common/SearchBar';
import HighlightGridView from '@/features/media/components/highlight/HighlightGridView';
import { useSearchParams } from 'react-router';

import Breadcrumb from '@/features/common/Breadcrumb';
import '@/features/media/css/media-grid-layout.css';
import '@/features/media/css/media.css';

/** 하이라이트 페이지 */
const HighlightPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

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
      <HighlightGridView />
    </MediaLayout>
  );
};

export default HighlightPage;
