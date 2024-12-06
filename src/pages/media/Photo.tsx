import Banner from '@/features/media/common/Banner';
import MediaLayout from '@/features/media/common/MediaLayout';
import PhotoContent from '@/features/media/components/photo/PhotoContent';
import PhotoFilter from '@/features/media/components/photo/PhotoFilter';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import { useTabFromUrl } from '@/features/media/hooks/useTabFromUrl';
import { cn } from '@/lib/utils';

import '@/features/media/css/media-list-layout.css';
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
              <TabsTrigger
                value="game"
                onClick={() => handleTabChange('game')}
                className={cn('media-tabs-trigger', 'px-6 py-2.5')}
              >
                wiz 경기
              </TabsTrigger>
              <TabsTrigger
                value="training"
                onClick={() => handleTabChange('training')}
                className={cn('media-tabs-trigger', 'px-6 py-2.5')}
              >
                wiz 훈련
              </TabsTrigger>
              <TabsTrigger
                value="event"
                onClick={() => handleTabChange('event')}
                className={cn('media-tabs-trigger', 'px-6 py-2.5')}
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
          <PhotoContent />
        </TabsContent>
        <TabsContent value="training">
          <PhotoContent />
        </TabsContent>
        <TabsContent value="event">
          <PhotoContent />
        </TabsContent>
      </Tabs>
    </MediaLayout>
  );
};

export default PhotoPage;
