import Breadcrumb from '@/features/common/Breadcrumb';
import SubTitle from '@/features/common/SubTitle';
import TicketItem from '@/features/ticket/components/TicketItem';
import { Link } from 'react-router';

function TicketReservation() {
  return (
    <div className="bg-wiz-black min-h-screen text-wiz-white py-10 px-4">
      <Breadcrumb />
      <h1 className="text-wiz-white text-4xl text-center font-bold mb-10">
        KT Wiz 티켓 예매
      </h1>
      <div className="relative max-w-5xl mx-auto">
        <SubTitle title="예매 / 구매 방법" />
        <div className="border border-wiz-red rounded-lg p-6 bg-opacity-10 bg-wiz-black mt-6 mb-6">
          <div className="grid grid-cols-2 gap-x-2 gap-y-4">
            <TicketItem
              icon="/assets/ticketpurchase/icon1.png"
              title="kt wiz 전용 wizzap앱"
              description="앱 설치"
              link="https://play.google.com/store/apps/details?id=kr.co.ktwiz.wizzap"
              isButton={true}
            />
            <TicketItem
              icon="/assets/ticketpurchase/icon2.png"
              title="kt wiz 홈페이지 티켓 예매"
              description="http://www.ticketlink.co.kr"
              link="/login"
              isButton={false}
            />
            <TicketItem
              icon="/assets/ticketpurchase/icon3.png"
              title="티켓링크 콜센터"
              description="1588-7890"
            />
            <TicketItem
              icon="/assets/ticketpurchase/icon4.png"
              title="kt wiz park 매표소"
              description="현장 구매"
            />
          </div>
        </div>

        <SubTitle title="티켓 예매하기" />
        <div className="border border-wiz-red rounded-lg p-6 bg-opacity-10 bg-wiz-black mt-6 mb-6 flex items-center space-x-6">
          <div>
            <p className="mb-4 mt-4 text-wiz-white text-lg leading-relaxed">
              예매를 통해서 kt wiz 경기를 경기장에서 직접 만나 보세요.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="px-4 py-2 bg-wiz-red text-wiz-white rounded shadow flex items-center justify-center"
              >
                예매하기
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 bg-wiz-white text-wiz-black rounded shadow flex items-center justify-center"
              >
                예매 확인 / 취소
              </Link>
            </div>
          </div>
          <img
            src="/assets/ticketpurchase/ticket.png"
            alt="티켓 이미지"
            className="w-32 h-32"
          />
        </div>
      </div>
    </div>
  );
}

export default TicketReservation;
