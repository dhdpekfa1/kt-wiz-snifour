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
        <div className="rounded-lg p-3 md:p-6 bg-wiz-white bg-opacity-10 my-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
            <TicketItem
              icon="/assets/ticketpurchase/icon1.png"
              title="kt wiz 전용 wizzap앱"
              description="앱 설치"
              link="https://play.google.com/store/apps/details?id=kr.co.ktwiz.wizzap"
              isButton={true}
            />
            <div className="flex items-start gap-2">
              <img
                src="/assets/ticketpurchase/icon2.png"
                alt="kt wiz 홈페이지 티켓 예매 아이콘"
                className="w-8 h-auto md:w-10 lg:w-12"
              />
              <div className="text-base md:text-lg text-wiz-white">
                <p>kt wiz 홈페이지 티켓 예매</p>
                <div className="flex flex-col md:flex-row md:items-center md:gap-2">
                  <p className="text-wiz-white text-sm lg:text-base">
                    티켓링크에서 예매
                  </p>
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
            <div className="flex items-start gap-2 text-base md:text-lg text-wiz-white">
              <img
                src="/assets/ticketpurchase/icon4.png"
                alt="kt wiz park 매표소 아이콘"
                className="w-8 h-auto md:w-10 lg:w-12"
              />
              <div>
                <p>kt wiz park 매표소</p>
                <p>현장 구매</p>
              </div>
            </div>
          </div>
        </div>

        <SubTitle title="티켓 예매하기" />
        <div className="rounded-lg p-3 md:p-6 bg-wiz-white bg-opacity-10 my-6 flex items-center justify-between lg:justify-center lg:gap-4">
          <div>
            <p className="mb-4 mt-4 text-wiz-white text-base md:text-lg break-keep">
              예매를 통해서 kt wiz 경기를 경기장에서 직접 만나 보세요.
            </p>
            <div className="flex gap-2">
              <LoginConfirmationDialog>
                <button
                  type="button"
                  className="px-3 bg-wiz-red text-wiz-white rounded shadow text-sm md:text-base"
                >
                  예매하기
                </button>
              </LoginConfirmationDialog>
              <LoginConfirmationDialog>
                <button
                  type="button"
                  className="px-3 py-1 h-flt md:py-2 bg-wiz-white bg-opacity-30 text-wiz-white rounded shadow text-sm md:text-base"
                >
                  예매 확인 / 취소
                </button>
              </LoginConfirmationDialog>
            </div>
          </div>
          <img
            src="/assets/ticketpurchase/ticket.png"
            alt="티켓 이미지"
            className="w-20 md:w-32 lg:2-40 h-full"
          />
        </div>
      </div>
    </Layout>
  );
}

export default TicketReservationTab;
