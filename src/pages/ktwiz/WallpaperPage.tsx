import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import { Banner, Breadcrumb, Layout } from '@/features/common';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const size = ['1024x768', '1280x1024', '1680x1050', '1920x1080'];

function WallpaperPage() {
  return (
    <Layout
      header={
        <Banner>
          <Banner.Image
            src="https://placehold.co/1200x200/141414/642521?text=WALLPAPER"
            alt="Wallpapers"
          />
          <Banner.Overlay>
            <Banner.Heading title="Wallpaper" subtitle="" />
            <Banner.Description description="kt wiz 팬들을 위한 월페이퍼 다운로드 서비스" />
          </Banner.Overlay>
        </Banner>
      }
    >
      <div className="text-white">
        <Breadcrumb />
        <div
          className={cn(
            'flex items-center justify-center py-2 gap-4 text-base',
            'md:gap-6',
            'lg:text-2xl lg:gap-8 lg:py-4'
          )}
        >
          <button
            type="button"
            className={cn('bg-wiz-white bg-opacity-10 rounded-full', 'lg:p-1')}
          >
            <ChevronLeft className={cn('w-4 h-4', 'lg:w-6 lg:h-6')} />
          </button>
          2024년 12월
          <button
            type="button"
            className="bg-wiz-white bg-opacity-10 rounded-full p-1"
          >
            <ChevronRight className={cn('w-4 h-4', 'lg:w-6 lg:h-6')} />
          </button>
        </div>

        <div>
          <Tabs defaultValue="calendar" className="flex flex-col items-center">
            <TabsList className="justify-center">
              <TabsTrigger value="calendar">달력형</TabsTrigger>
              <TabsTrigger value="paper">일반형</TabsTrigger>
            </TabsList>
            <TabsContent value="calendar">
              <img
                src="/assets/wallpaper/calendar-1920x1080.png"
                alt="wallpaper-calendar"
              />
            </TabsContent>
            <TabsContent value="paper">
              <img
                src="/assets/wallpaper/paper-1920x1080.jpg"
                alt="wallpaper-paper"
              />
            </TabsContent>

            {/* 다운로드 버튼 */}
            <div
              className={cn(
                'mt-4 max-w-full flex items-center gap-2',
                'md:gap-4',
                'lg:mt-6'
              )}
            >
              {size.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={cn(
                    'bg-wiz-white bg-opacity-10 rounded text-xs px-2 py-1',
                    'md:text-base md:px-3 py-1.5',
                    'lg:text-lg lg:px-4 lg:py-2'
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

export default WallpaperPage;
