import Banner from '@/features/common/Banner';
import MediaLayout from '@/features/media/common/MediaLayout';
import SearchBar from '@/features/media/common/SearchBar';
import NewsContent from '@/features/media/components/news/NewsContent';

import { useTabFromUrl } from '@/assets/hooks/useTabFromUrl';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import { cn } from '@/lib/utils';

import '@/features/media/css/media.css';

const NEWS_TABS_CONFIG = [
  { value: 'news', path: '/wiznews', label: 'wiz 소식' },
  { value: 'press', path: '/wizpress', label: 'wiz 보도자료' },
];

/** 뉴스 페이지 */
const NewsPage = () => {
  const { currentTab, handleTabChange } = useTabFromUrl({
    basePath: '/media',
    tabs: NEWS_TABS_CONFIG,
    defaultTab: 'news',
  });

  return (
    <MediaLayout
      header={
        <Banner>
          <Banner.Image
            src="https://placehold.co/1200x200/141414/642521?text=WIZ+NEWS"
            alt="KT WIZ 뉴스"
          />
          <Banner.Overlay>
            <Banner.Heading
              title="WIZ NEWS"
              subtitle="KT WIZ와 함께하는 순간"
            />
            <Banner.Description description="KT WIZ의 시즌 소식을 가장 빠르게 만나보세요. 경기 소식부터 팬 이벤트까지 다양한 소식을 전해드립니다." />
          </Banner.Overlay>
        </Banner>
      }
    >
      <Tabs
        className="media-container"
        defaultValue={currentTab}
        onValueChange={handleTabChange}
      >
        <div className={cn('media-header')}>
          <div className="media-tabs-wrapper">
            {/* 탭 */}
            <TabsList className={cn('media-tabs-list')}>
              {NEWS_TABS_CONFIG.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="media-tabs-trigger"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {/* 검색바 */}
          <SearchBar />
        </div>

        {/* 탭 컨텐츠 */}
        <TabsContent value={currentTab}>
          <NewsContent />
        </TabsContent>
      </Tabs>
    </MediaLayout>
  );
};

export default NewsPage;
