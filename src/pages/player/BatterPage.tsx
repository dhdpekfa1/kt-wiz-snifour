import { Tabs, TabsContent, TabsList } from '@/components/ui';
import Banner from '@/features/common/Banner';
import SubTabsTrigger from '@/features/common/SubTabsTrigger';
import { CatcherTab, InfielderTab, OutfielderTab } from '@/features/player';
import { useTabFromUrl } from '@/hooks/useTabFromUrl';

const REG_TABS_CONFIG = [
  { value: 'catcher', path: '/catcher' },
  { value: 'infielder', path: '/infielder' },
  { value: 'outfielder', path: '/outfielder' },
];

function BatterPage() {
  const { currentTab, handleTabChange } = useTabFromUrl({
    basePath: '/player',
    tabs: REG_TABS_CONFIG,
    defaultTab: 'catcher',
  });

  return (
    <div className="text-white">
      <Banner>
        <Banner.Image
          src="https://placehold.co/1200x200/141414/642521?text=WIZ+BATTERS"
          alt="KT WIZ 타자"
        />
        <Banner.Overlay>
          <Banner.Heading title="KT Wiz 선수단" subtitle="타자" />
          <Banner.Description description="KT Wiz의 자랑스런 '첫 번째 선수단'을 소개합니다." />
        </Banner.Overlay>
      </Banner>

      <Tabs defaultValue={currentTab} onValueChange={handleTabChange}>
        <TabsList>
          <SubTabsTrigger value="catcher">포수</SubTabsTrigger>
          <SubTabsTrigger value="infielder">내야수</SubTabsTrigger>
          <SubTabsTrigger value="outfielder">외야수</SubTabsTrigger>
        </TabsList>
        <TabsContent value="catcher">
          <CatcherTab />
        </TabsContent>
        <TabsContent value="infielder">
          <InfielderTab />
        </TabsContent>
        <TabsContent value="outfielder">
          <OutfielderTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default BatterPage;
