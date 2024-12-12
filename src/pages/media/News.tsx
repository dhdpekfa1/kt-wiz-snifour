import { cn } from '@/lib/utils';
import { useSearchParams } from 'react-router';
import { useTabFromUrl } from '@/hooks/useTabFromUrl';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui';

import Banner from '@/features/common/Banner';
import SearchBar from '@/features/media/common/SearchBar';
import Layout from '@/features/common/Layout';
import NewsListView from '@/features/media/components/news/NewsListView';

export const NEWS_TABS_CONFIG = [
  { value: 'news', path: '/wiznews', label: 'wiz 소식' },
  { value: 'press', path: '/wizpress', label: 'wiz 보도자료' },
];

/** 뉴스 페이지 */
const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { currentTab, handleTabChange } = useTabFromUrl({
    basePath: '/media',
    tabs: NEWS_TABS_CONFIG,
    defaultTab: NEWS_TABS_CONFIG[0].value,
  });

  return (
    <Layout
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
          <div className={cn('media-tabs-wrapper')}>
            <TabsList className={cn('media-tabs-list')}>
              {NEWS_TABS_CONFIG.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={cn('media-tabs-trigger')}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <SearchBar
            onSubmit={(searchWord) =>
              setSearchParams({
                ...Object.fromEntries(searchParams.entries()),
                searchWord,
              })
            }
          />
        </div>

        <NewsListView />
      </Tabs>
    </Layout>
  );
};

export default NewsPage;
