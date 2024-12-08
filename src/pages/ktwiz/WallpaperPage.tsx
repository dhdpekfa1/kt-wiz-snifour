import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import Breadcrumb from '@/features/common/Breadcrumb';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function WallpaperPage() {
  return (
    <div className="my-20 text-white">
      <Breadcrumb
        paths={[
          { key: 'home', label: 'Home' },
          { key: 'ktwiz', label: 'KT Wiz' },
          { key: 'wallpaper', label: '월페이퍼', isActive: true },
        ]}
      />
      <div className="flex items-center justify-center py-4 gap-8 text-3xl">
        <button
          type="button"
          className="bg-wiz-white bg-opacity-10 rounded-full p-2"
        >
          <ChevronLeft />
        </button>
        2024년 12월
        <button
          type="button"
          className="bg-wiz-white bg-opacity-10 rounded-full p-2"
        >
          <ChevronRight />
        </button>
      </div>

      <div>
        <Tabs
          defaultValue="calendar"
          className="w-full flex flex-col items-center"
        >
          <TabsList className="w-fit flex items-center gap-4 my-2">
            <TabsTrigger
              value="calendar"
              className="text-black text-lg bg-white rounded"
            >
              달력형
            </TabsTrigger>
            <TabsTrigger
              value="paper"
              className="text-black text-lg bg-white rounded"
            >
              일반형
            </TabsTrigger>
          </TabsList>
          <TabsContent value="calendar" className="w-full">
            <div className="px-16 pt-4 pb-8">
              <img
                src="/assets/wallpaper/calendar-1920x1080.png"
                alt="wallpaper-calendar"
              />
            </div>
          </TabsContent>
          <TabsContent value="paper" className="w-full">
            <div className="px-16 pt-4 pb-8">
              <img
                src="/assets/wallpaper/paper-1920x1080.jpg"
                alt="wallpaper-paper"
              />
            </div>
          </TabsContent>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="bg-wiz-white bg-opacity-10 text-lg px-4 py-2 rounded"
            >
              1024x768
            </button>
            <button
              type="button"
              className="bg-wiz-white bg-opacity-10 text-lg px-4 py-2 rounded"
            >
              1280x1024
            </button>
            <button
              type="button"
              className="bg-wiz-white bg-opacity-10 text-lg px-4 py-2 rounded"
            >
              1680x1050
            </button>
            <button
              type="button"
              className="bg-wiz-white bg-opacity-10 text-lg px-4 py-2 rounded"
            >
              1920x1080
            </button>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default WallpaperPage;
