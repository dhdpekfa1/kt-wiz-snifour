import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import { Banner } from '@/features/common';
import { MediaLayout, PhotoFilter, PhotoGridView } from '@/features/media';
import { useTabFromUrl } from '@/hooks/useTabFromUrl';
import { cn } from '@/lib/utils';

import '@/features/media/css/media-grid-layout.css';
import '@/features/media/css/media.css';

const PHOTO_TABS_CONFIG = [
  { value: 'game', path: '/photos/1' },
  { value: 'training', path: '/photos/2' },
  { value: 'event', path: '/photos/3' },
];

/** 포토 페이지 */
const PhotoPage = () => {
  const { currentTab, handleTabChange } = useTabFromUrl({
    basePath: '/media',
    tabs: PHOTO_TABS_CONFIG,
    defaultTab: 'news',
  });

  return (
    <MediaLayout
      header={
        <Banner>
          <Banner.Image
            src="https://placehold.co/1200x200/141414/642521?text=WIZ+PHOTO"
            alt="KT WIZ PHOTO"
          />
          <Banner.Overlay>
            <Banner.Heading
              title="LIVE WIZ PHOTO"
              subtitle="KT WIZ의 생생한 순간"
            />
            <Banner.Description description="경기, 훈련, 행사에서 포착한 특별한 순간들을 만나보세요. kt wiz의 생생한 역사적 순간을 담았습니다." />
          </Banner.Overlay>
        </Banner>
      }
    >
      <Tabs
        className="media-container"
        defaultValue={currentTab}
        onValueChange={handleTabChange}
      >
        <div
          className={cn(
            'media-header',
            'flex-wrap md:justify-start lg:justify-end'
          )}
        >
          {/* 탭 */}
          <div className="media-tabs-wrapper">
            <TabsList className="media-tabs-list">
              <TabsTrigger value="game" onClick={() => handleTabChange('game')}>
                wiz 경기
              </TabsTrigger>
              <TabsTrigger
                value="training"
                onClick={() => handleTabChange('training')}
              >
                wiz 훈련
              </TabsTrigger>
              <TabsTrigger
                value="event"
                onClick={() => handleTabChange('event')}
              >
                wiz 행사
              </TabsTrigger>
            </TabsList>
          </div>
          {/* 필터 */}
          <PhotoFilter />
        </div>
        {/* 포토 컨텐츠 */}
        <TabsContent value="game">
          <PhotoGridView />
        </TabsContent>
        <TabsContent value="training">
          <PhotoGridView />
        </TabsContent>
        <TabsContent value="event">
          <PhotoGridView />
        </TabsContent>
      </Tabs>
    </MediaLayout>
  );
};

export default PhotoPage;
