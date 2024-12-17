import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import Breadcrumb from '@/features/common/Breadcrumb';
import SubTitle from '@/features/common/SubTitle';
import { PhoneCall } from 'lucide-react';
import { Link } from 'react-router';

function ParkingPage() {
  return (
    <div className="my-20 text-white">
      <Breadcrumb />

      <div>
        <SubTitle title="주차 예약 안내" />

        <div className="text-center text-3xl my-4">
          <h3>수원종합운동장 (수원 kt wiz park 포함) 주차장은</h3>
          <h3 className="mt-2">
            <strong className="text-wiz-red">
              프로야구 경기일에만 주차예약제
            </strong>
            가 시행됩니다.
          </h3>
          <p className="mt-6 text-base text-gray-300">
            <span className="font-bold">사전 예약차량만 주차가 가능</span>
            하며, 경기시간 2시간 전부터 주차가 가능합니다.
          </p>
        </div>
      </div>

      <div className="my-12">
        <SubTitle title="예약 기간" />
        <p className="mt-2 text-lg">수원 홈경기 프로야구 입장권 예매기간</p>
        <p className="text-gray-400">
          (kt wiz 홈경기 7일전 14시 00분부터 만차시)
        </p>
      </div>

      <div>
        <SubTitle title="예약 방법" />

        <div className="grid grid-cols-3 gap-4 pt-4">
          <Card className="rounded-xl bg-wiz-white text-black">
            <CardHeader>
              <CardTitle>홈페이지</CardTitle>
            </CardHeader>
            <CardContent className="mt-2 flex flex-col items-start gap-8">
              <p>
                kt wiz, 수원종합운동장 홈페이지를 통한
                <br />
                예약, 수정 및 취소 가능
              </p>
              <Link
                to="https://suwonparkingbaseball.or.kr/suwonwps/EgovPageLink.do?link=main/menu/prs/ParkingReservationPrivacy"
                className="bg-wiz-red px-4 py-2 rounded self-center text-white"
                target="_blank"
              >
                홈페이지 바로 가기
              </Link>
            </CardContent>
          </Card>

          <Card className="rounded-xl bg-wiz-white text-black">
            <CardHeader>
              <CardTitle>예약 및 문의</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mt-2">
                <p className="mt-1 mb-11">수원종합운동장</p>
                <p className="flex items-center gap-2">
                  <PhoneCall className="w-4" /> 031-240-2720
                </p>
                <p className="flex items-center gap-2 mt-1">
                  <PhoneCall className="w-4" /> 031-240-2721
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl bg-wiz-white text-black">
            <CardHeader>
              <CardTitle>예약 제외 차량</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mt-2">
                <p className="mt-1">25인승 소형버스 이상 및 장애인 차량</p>
                <p className="mt-1">: 입차 시 요금만 납부</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ParkingPage;
