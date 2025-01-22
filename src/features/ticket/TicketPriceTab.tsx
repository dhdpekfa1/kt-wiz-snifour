import { Breadcrumb, SubTitle } from '@/features/common';

const TicketPriceTab = () => {
  return (
    <div>
      <Breadcrumb />
      <SubTitle title="입장 요금" className="mt-8 mb-4" />
      <img
        src="/assets/ticketpurchase/seat.png"
        alt="좌석 정보"
        className="w-full h-auto rounded-lg mb-8"
      />
    </div>
  );
};

export { TicketPriceTab };
