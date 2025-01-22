import SEO from '@/components/SEO';
import { Banner, Breadcrumb, SearchBar } from '@/features/common';
import { FirstPitchListView, MediaLayout } from '@/features/media';

import '@/features/media/css/media.css';
import { useSearchParams } from 'react-router';

/** 시구자 정보 페이지 */
const FirstPitchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

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
      <SEO
        title="kt wiz 시구자 정보"
        description="야구장을 빛낸 특별한 손님들, 시구자들과 함께 만든 KT WIZ의 소중한 추억을 함께해요."
        keywords="ktwiz, 야구, 시구"
      />
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
      <FirstPitchListView />
    </MediaLayout>
  );
};

export default FirstPitchPage;
