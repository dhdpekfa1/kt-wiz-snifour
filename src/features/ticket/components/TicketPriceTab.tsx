import Breadcrumb from '@/features/common/Breadcrumb';
import SubTitle from '@/features/common/SubTitle';

const TicketPriceTab = () => {
  return (
    <div className="bg-wiz-black text-wiz-white py-10 min-h-[600px]">
      <Breadcrumb />
      <h1 className="text-wiz-white text-4xl text-center font-bold mt-8 mb-8">
        입장 요금
      </h1>
      <div className="relative max-w-5xl mx-auto">
        <SubTitle title="입장 요금" />
        <div className="rounded-lg p-6 bg-opacity-10 bg-wiz-black mt-6 mb-6 flex justify-center">
          <img
            src="/assets/ticketpurchase/seat.png"
            alt="좌석 정보"
            className="w-full max-w-4xl rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TicketPriceTab;
