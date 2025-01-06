import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import Banner from '@/features/common/Banner';
import Layout from '@/features/common/Layout';
import { DonationProgramTab, GeneralMemberTab } from '@/features/kwWiz';
import { useTabFromUrl } from '@/hooks/useTabFromUrl';

const REG_TABS_CONFIG = [
  { value: 'regular', path: '/regular' },
  { value: 'donation', path: '/donation' },
];
const MembershipPolicyPage = () => {
  const { currentTab, handleTabChange } = useTabFromUrl({
    basePath: '/ktwiz/policy',
    tabs: REG_TABS_CONFIG,
    defaultTab: 'regular',
  });
  return (
    <Layout
      header={
        <Banner>
          <Banner.Image
            src="https://placehold.co/1200x200/141414/642521?text=WIZ+Membership+Policy"
            alt="회원 정책"
          />
          <Banner.Overlay>
            <Banner.Heading title="회원 정책" subtitle="" />
            <Banner.Description description="kt wiz 회원만의 특별한 할인 혜택을 만나 보세요." />
          </Banner.Overlay>
        </Banner>
      }
    >
      <Tabs defaultValue={currentTab} onValueChange={handleTabChange}>
        {/* 탭 */}
        <div>
          <TabsList>
            <TabsTrigger
              value="regular"
              onClick={() => handleTabChange('regular')}
            >
              일반 회원
            </TabsTrigger>
            <TabsTrigger
              value="donation"
              onClick={() => handleTabChange('donation')}
            >
              기부 프로그램
            </TabsTrigger>
          </TabsList>
        </div>
        {/* 탭 컨텐츠 */}
        <TabsContent value="regular">
          <GeneralMemberTab />
        </TabsContent>
        <TabsContent value="donation">
          <DonationProgramTab />
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default MembershipPolicyPage;
