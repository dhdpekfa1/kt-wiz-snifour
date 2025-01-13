import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog/dialog';
import Breadcrumb from '@/features/common/Breadcrumb';
import SubTitle from '@/features/common/SubTitle';
import TicketItem from '@/features/ticket/components/TicketItem';
import { useNavigate } from 'react-router';

function TicketReservation() {
  const navigate = useNavigate();

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
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="underline text-wiz-red text-sm"
                      >
                        (http://www.ticketlink.co.kr)
                      </button>
                    </DialogTrigger>
                    <DialogContent className="w-80 p-6 bg-white rounded-lg shadow-lg text-center flex flex-col items-center">
                      <DialogHeader>
                        <DialogTitle className="text-lg font-bold mb-1">
                          로그인 후 이용 가능합니다.
                        </DialogTitle>
                      </DialogHeader>
                      <DialogFooter className="flex justify-center">
                        <button
                          type="button"
                          className="px-4 py-2 bg-wiz-red text-white rounded font-bold mr-8"
                          onClick={() => navigate('/login')}
                        >
                          로그인
                        </button>
                        <DialogClose asChild>
                          <button
                            type="button"
                            className="px-4 py-2 bg-black text-white rounded font-bold"
                          >
                            취소
                          </button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
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
              {/* Dialog Trigger 버튼 */}
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="px-4 py-2 bg-wiz-red text-wiz-white rounded shadow"
                  >
                    예매하기
                  </button>
                </DialogTrigger>
                <DialogContent className="w-80 p-6 bg-white rounded-lg shadow-lg text-center flex flex-col items-center">
                  <DialogHeader>
                    <DialogTitle className="text-lg font-bold mb-1">
                      로그인 후 이용 가능합니다.
                    </DialogTitle>
                  </DialogHeader>
                  <DialogFooter className="flex justify-center">
                    <button
                      type="button"
                      className="px-4 py-2 bg-wiz-red text-white rounded font-bold mr-8"
                      onClick={() => navigate('/login')}
                    >
                      로그인
                    </button>
                    <DialogClose asChild>
                      <button
                        type="button"
                        className="px-4 py-2 bg-black text-white rounded font-bold"
                      >
                        취소
                      </button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="px-4 py-2 bg-wiz-white text-black rounded shadow"
                  >
                    예매 확인 / 취소
                  </button>
                </DialogTrigger>
                <DialogContent className="w-80 p-6 bg-white rounded-lg shadow-lg text-center flex flex-col items-center">
                  <DialogHeader>
                    <DialogTitle className="text-lg font-bold mb-1">
                      로그인 후 이용 가능합니다.
                    </DialogTitle>
                  </DialogHeader>
                  <DialogFooter className="flex justify-center">
                    <button
                      type="button"
                      className="px-4 py-2 bg-wiz-red text-white rounded font-bold mr-8"
                      onClick={() => navigate('/login')}
                    >
                      로그인
                    </button>
                    <DialogClose asChild>
                      <button
                        type="button"
                        className="px-4 py-2 bg-black text-white rounded font-bold"
                      >
                        취소
                      </button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
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
