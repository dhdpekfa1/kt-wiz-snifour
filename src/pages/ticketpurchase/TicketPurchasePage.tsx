import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import { Banner } from '@/features/common';
import TicketPriceTab from '@/features/ticket/components/TicketPriceTab';
import TicketReservationTab from '@/features/ticket/components/TicketReservationTab';
import { useTabFromUrl } from '@/hooks/useTabFromUrl';

const WIZ_TABS_CONFIG = [
  { value: 'reservation', path: '/reservation' },
  { value: 'price', path: '/price' },
];

const TicketPurchasePage = () => {
  const { currentTab, handleTabChange } = useTabFromUrl({
    basePath: '/ticket',
    tabs: WIZ_TABS_CONFIG,
    defaultTab: 'reservation',
  });

  return (
    <div className="bg-wiz-black min-h-screen text-wiz-white">
      {/* 공통 배너 */}
      <Banner>
        <Banner.Image
          src="https://placehold.co/1200x200/141414/642521?text=TICKET+RESERVATION"
          alt="Ticket Reservation"
        />
        <Banner.Overlay>
          <Banner.Heading title="일반티켓" subtitle="티켓 정보 및 예매" />
          <Banner.Description description="Kt wiz 경기를 경기장에서 직접 만나 보세요." />
        </Banner.Overlay>
      </Banner>

      {/* Tabs 구성 */}
      <Tabs
        className="container"
        defaultValue={currentTab}
        onValueChange={handleTabChange}
      >
        <div className="header">
          {/* 탭 리스트 */}
          <div className="tabs-wrapper">
            <TabsList className="tabs-list ">
              <TabsTrigger value="reservation">티켓 예매</TabsTrigger>
              <TabsTrigger value="price">입장 요금</TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* 탭 콘텐츠 */}
        <TabsContent value="reservation">
          <TicketReservationTab />
        </TabsContent>
        <TabsContent value="price">
          <TicketPriceTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TicketPurchasePage;
