import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import Banner from '@/features/common/Banner';
import Breadcrumb from '@/features/common/Breadcrumb';
import Layout from '@/features/common/Layout';
import SubTitle from '@/features/common/SubTitle';
import { cn } from '@/lib/utils';
import { PhoneCall } from 'lucide-react';
import { Link } from 'react-router';

function ParkingPage() {
  return (
    <Layout
      header={
        <Banner>
          <Banner.Image
            src="https://placehold.co/1200x200/141414/642521?text=PARKING RESERVATION"
            alt="Parking Reservation"
          />
          <Banner.Overlay>
            <Banner.Heading
              title="Parking Reservations"
              subtitle="주차 예약 안내"
            />
            <Banner.Description description="수원 kt wiz park 주자 예약에 대해 상세하게 알려드립니다." />
          </Banner.Overlay>
        </Banner>
      }
    >
      <div className="">
        <Breadcrumb />

        <div>
          <SubTitle title="주차 예약 안내" />

          <div
            className={cn(
              'text-center my-2',
              'md:text-2xl md:my-3',
              'lg:text-3xl lg:my-4'
            )}
          >
            <h3>수원종합운동장 (수원 kt wiz park 포함) 주차장은</h3>
            <h3 className="md:mt-1 lg:mt-2">
              <strong className="text-wiz-red">
                프로야구 경기일에만 주차예약제
              </strong>
              가 시행됩니다.
            </h3>
            <p
              className={cn(
                'mt-2 text-xs text-gray-300 break-keep',
                'md:mt-4 md:text-sm',
                'lg:mt-6 lg:text-base'
              )}
            >
              <span className="font-bold">사전 예약차량만 주차가 가능</span>
              하며, 경기시간 2시간 전부터 주차가 가능합니다.
            </p>
          </div>
        </div>

        <div className="my-12">
          <SubTitle title="예약 기간" />
          <p className="text-sm md:mt-1 lg:mt-2 md:text-base lg:text-lg">
            수원 홈경기 프로야구 입장권 예매기간
          </p>
          <p className="text-neutral-400 text-xs md:text-sm lg:text-base">
            (kt wiz 홈경기 7일전 14시 00분부터 만차시)
          </p>
        </div>

        <div>
          <SubTitle title="예약 방법" />

          <p className="text-neutral-400 break-keep text-xs md:text-sm lg:text-base lg:mt-2">
            ※ 예약 제외 차량: 25인승 소형버스 이상 및 장애인 차량 (입차 시
            요금만 납부)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <Card className="min-h-44 rounded-xl bg-wiz-white text-black flex flex-col">
              <CardHeader>
                <CardTitle
                  className={cn('text-lg', 'md:text-xl', 'lg:text-2xl')}
                >
                  홈페이지
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-sm md:text-base">
                  kt wiz, 수원종합운동장 홈페이지를 통한
                  <br />
                  예약, 수정 및 취소 가능
                </p>
                <Link
                  to="https://suwonparkingbaseball.or.kr/suwonwps/EgovPageLink.do?link=main/menu/prs/ParkingReservationPrivacy"
                  className={cn(
                    'bg-wiz-red px-2 py-1 rounded self-center text-white text-sm',
                    'lg:px-4 lg:py-2 lg:text-base'
                  )}
                  target="_blank"
                >
                  홈페이지 바로 가기
                </Link>
              </CardContent>
            </Card>

            <Card className="min-h-44 rounded-xl bg-wiz-white text-black">
              <CardHeader>
                <CardTitle
                  className={cn('text-lg', 'md:text-xl', 'lg:text-2xl')}
                >
                  예약 및 문의
                </CardTitle>
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
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ParkingPage;
