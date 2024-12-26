import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { Button } from '@/components/ui';
import Banner from '@/features/common/Banner';
import Breadcrumb from '@/features/common/Breadcrumb';
import Layout from '@/features/common/Layout';
import WizParkMap from '@/features/home/components/WizParkMap';
import { ArrowBigRightIcon, MapPin } from 'lucide-react';

function ParkLocationPage() {
  return (
    <Layout
      header={
        <Banner>
          <Banner.Image
            src="https://placehold.co/1200x200/141414/642521?text=KTWIZ+PARK"
            alt="Suwon KT WIZ PARK"
          />
          <Banner.Overlay>
            <Banner.Heading
              title="찾아오기"
              subtitle="수원 kt wiz park 오시는 길"
            />
            <Banner.Description description="오시는 길을 상세하게 알려드립니다." />
          </Banner.Overlay>
        </Banner>
      }
    >
      <div className="flex flex-col items-center text-wiz-white">
        <Breadcrumb />
        <WizParkMap />
        <div className="flex flex-col items-center my-8 gap-2 break-keep md:text-xl ">
          <p className="font-semibold">
            경기도 수원시 장안구 경수대로 893(조원동) 수원 케이티 위즈 파크
          </p>
          <p>(구 : 경기도 수원시 장안구 조원동 775)</p>
          <Button className="bg-wiz-white text-wiz-red rounded-xl w-fit h-10 mt-3 flex items-center justify-center hover:bg-wiz-red hover:text-wiz-white">
            <a
              href="https://map.kakao.com/link/to/수원 KT 위즈파크,37.299759,127.009781"
              target="_blank"
              rel="noreferrer"
              className="flex gap-1 items-center"
            >
              <MapPin />
              <span className="md:text-xl">빠른길찾기</span>
            </a>
          </Button>
        </div>
        <div className="flex gap-5 w-full flex-col md:flex-row">
          <Card className="rounded-3xl w-full">
            <CardHeader>
              <CardTitle>버스 이용 시</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <Button className="bg-green-500 h-6 border-none rounded-xl hover:bg-green-500">
                    일반
                  </Button>
                  25, 25-2, 27, 36, 55, 62-1, 99, 99-2, 300-1
                </li>
                <li className="flex items-center gap-3">
                  <Button className="bg-green-500 h-6 border-none rounded-xl hover:bg-green-500">
                    일반
                  </Button>
                  310, 777
                </li>
                <li className="flex items-center gap-3">
                  <Button className="bg-wiz-red h-6 border-none rounded-xl hover:bg-wiz-red">
                    직행
                  </Button>
                  2007, 3000, 7770
                </li>
                <li className="flex items-center gap-3">
                  <Button className="bg-blue-700 h-6 border-none rounded-xl hover:bg-blue-700">
                    좌석
                  </Button>
                  300, 900
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-3xl w-full">
            <CardHeader>
              <CardTitle>지하철 이용시</CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="text-xl font-bold mb-2 relative z-0">
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-wiz-red bg-opacity-50 -z-10" />
                화서역 하차
              </h1>
              <ul className="mt-3 flex flex-col gap-2">
                <li className="flex">
                  <ArrowBigRightIcon className="w-6 h-6" />
                  택시로 10분
                </li>
                <li className="flex break-keep">
                  <ArrowBigRightIcon className="w-6 h-6" />
                  37, 39번 버스이용: 수성중 사거리 하차 후 도보 3분
                </li>
                <li className="flex break-keep">
                  <ArrowBigRightIcon className="w-6 h-6" />
                  55분 버스이용 종합운동장 하차 수원역하차 (택시로 20분)
                </li>
                <li className="flex break-keep">
                  <ArrowBigRightIcon className="w-6 h-6" />
                  1번, 5번, 8번 버스이용: 수성중 사거리 하차 후 도보 3분
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default ParkLocationPage;
