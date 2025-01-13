import Breadcrumb from '@/features/common/Breadcrumb';
import Layout from '@/features/common/Layout';
import SubTitle from '@/features/common/SubTitle';
import TicketItem from '@/features/ticket/components/TicketItem';
import { LoginConfirmationDialog } from './LoginConfirmationDialog';

function TicketReservationTab() {
  return (
    <Layout>
      <Breadcrumb />
      <div className="relative w-full mt-8">
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
            <div className="flex items-start space-x-2">
              <img
                src="/assets/ticketpurchase/icon2.png"
                alt="kt wiz 홈페이지 티켓 예매 아이콘"
                className="w-6 h-6"
              />
              <div>
                <p className="text-wiz-white text-sm mb-1">
                  kt wiz 홈페이지 티켓 예매
                </p>
                <div className="flex items-center space-x-1">
                  <p className="text-wiz-white text-sm">티켓링크에서 예매</p>
                  <LoginConfirmationDialog>
                    <button
                      type="button"
                      className="underline text-wiz-red text-sm"
                    >
                      (http://www.ticketlink.co.kr)
                    </button>
                  </LoginConfirmationDialog>
                </div>
              </div>
            </div>
            <TicketItem
              icon="/assets/ticketpurchase/icon3.png"
              title="티켓링크 콜센터"
              description="1588-7890"
            />
            <div className="flex items-start space-x-2">
              <img
                src="/assets/ticketpurchase/icon4.png"
                alt="kt wiz park 매표소 아이콘"
                className="w-6 h-6"
              />
              <div>
                <p className="text-wiz-white text-sm mb-1">
                  kt wiz park 매표소
                </p>
                <p className="text-wiz-white text-sm">현장 구매</p>
              </div>
            </div>
          </div>
        </div>

        <SubTitle title="티켓 예매하기" />
        <div className="border border-wiz-red rounded-lg p-6 bg-opacity-10 bg-wiz-black mt-6 mb-6 flex items-center space-x-6">
          <div>
            <p className="mb-4 mt-4 text-wiz-white text-lg leading-relaxed">
              예매를 통해서 kt wiz 경기를 경기장에서 직접 만나 보세요.
            </p>
            <div className="flex space-x-4">
              <LoginConfirmationDialog>
                <button
                  type="button"
                  className="px-4 py-2 bg-wiz-red text-wiz-white rounded shadow"
                >
                  예매하기
                </button>
              </LoginConfirmationDialog>

              <LoginConfirmationDialog>
                <button
                  type="button"
                  className="px-4 py-2 bg-wiz-white text-black rounded shadow"
                >
                  예매 확인 / 취소
                </button>
              </LoginConfirmationDialog>
            </div>
          </div>
          <img
            src="/assets/ticketpurchase/ticket.png"
            alt="티켓 이미지"
            className="w-32 h-32"
          />
        </div>
      </div>
    </Layout>
  );
}

export default TicketReservationTab;
