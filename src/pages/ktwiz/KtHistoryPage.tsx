import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { useTabFromUrl } from "@/hooks/useTabFromUrl";
import { cn } from "@/lib/utils";

import Banner from "@/features/common/Banner";
import Layout from "@/features/common/Layout";
import { TeamHistoryTab, TeamIntroduceTab } from "@/features/kwWiz";

const WIZ_TABS_CONFIG = [
  { value: "about", path: "/about" },
  { value: "history", path: "/history" },
];

const KtHistoryPage = () => {
  const { currentTab, handleTabChange } = useTabFromUrl({
    basePath: "/ktwiz",
    tabs: WIZ_TABS_CONFIG,
    defaultTab: "history",
  });

  return (
    <Layout
      header={
        <Banner>
          <Banner.Image
            src="https://placehold.co/1200x200/141414/642521?text=KT+WIZ"
            alt="KT 소개"
          />
          <Banner.Overlay>
            <Banner.Heading
              title="KT WIZ는?"
              subtitle="한국 프로야구의 10번째 심장"
            />
            <Banner.Description description=" kt wiz를 소개합니다!" />
          </Banner.Overlay>
        </Banner>
      }
    >
      <Tabs
        className="container"
        defaultValue={currentTab}
        onValueChange={handleTabChange}
      >
        <div className={cn("header")}>
          {/* 탭 */}
          <div className="tabs-wrapper">
            <TabsList className="tabs-list">
              <TabsTrigger
                value="about"
                onClick={() => handleTabChange("about")}
              >
                구단 소개
              </TabsTrigger>
              <TabsTrigger
                value="history"
                onClick={() => handleTabChange("history")}
              >
                구단 연혁
              </TabsTrigger>
            </TabsList>
          </div>
        </div>
        {/* 탭 컨텐츠 */}
        <TabsContent value="about">
          <TeamIntroduceTab />
        </TabsContent>
        <TabsContent value="history">
          <TeamHistoryTab />
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default KtHistoryPage;
