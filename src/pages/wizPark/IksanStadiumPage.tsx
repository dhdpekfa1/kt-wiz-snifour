import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { Button } from '@/components/ui';
import Banner from '@/features/common/Banner';
import Breadcrumb from '@/features/common/Breadcrumb';
import Layout from '@/features/common/Layout';
import SubTitle from '@/features/common/SubTitle';
import IksanParkMap from '@/features/wizPark/IksanParkMap';
import { BusFront, MapPin } from 'lucide-react';

function IksanStadiumPage() {
  return (
    <Layout
      header={
        <Banner>
          <Banner.Image
            src="https://placehold.co/1200x200/141414/642521?text=IKSAN+BASEBALL+STADIUM"
            alt="Iksan Baseball Stadium"
          />
          <Banner.Overlay>
            <Banner.Heading title="익산 야구장" subtitle="kt wiz의 둥지" />
            <Banner.Description description="kt wiz의 둥지 '익산 야구장'을 소개합니다." />
          </Banner.Overlay>
        </Banner>
      }
    >
      <div className="flex flex-col">
        <Breadcrumb />

        <SubTitle title="퓨쳐스리그가 펼쳐지는 익산 야구장" />
        <div className="flex gap-4 mt-4">
          <div className="w-1/2 sm:h-[250px] md:h-[350px] h-[180px] border border-wiz-white border-opacity-30">
            사진1
          </div>
          <div className="w-1/2 sm:h-[250px] md:h-[350px] h-[180px] border border-wiz-white border-opacity-30">
            사진2
          </div>
        </div>
        <div className="flex gap-1 mt-2 mb-8 p-3 bg-wiz-white bg-opacity-10 text-lg overflow-x-scroll whitespace-nowrap">
          <p className="font-semibold">규격</p>: 좌우 98m, 중앙 : 121m /
          <p className="font-semibold">관람석</p>: 740석 /
          <p className="font-semibold">본부석</p>: 덕아웃 /
          <p className="font-semibold">전광판</p>:전자식 /
          <p className="font-semibold">펜스</p>:고정식 /
          <p className="font-semibold">건립</p>2011년 6월 /
          <p className="font-semibold">그라운드</p>: 인조잔디
        </div>

        <SubTitle title="오시는 길" />
        <IksanParkMap />
        <div className="flex flex-col justify-between mt-6 mb-12">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">
              전라북도 익산시 무왕로 1397 익산 야구장
            </p>
            <Button className="bg-wiz-white text-wiz-red rounded-xl w-fit h-10 mt-3 flex items-center justify-center hover:bg-wiz-red hover:text-wiz-white">
              <a
                href="https://map.kakao.com/link/to/익산 야구장,35.96755,127.0063"
                target="_blank"
                rel="noreferrer"
                className="flex gap-1 items-center"
              >
                <MapPin />
                <span className="text-xl">빠른길찾기</span>
              </a>
            </Button>
          </div>
          <p>(구 :전라북도 익산시 부송동 180번지)</p>
        </div>
        <div className="flex gap-5 w-full">
          <Card className="rounded-3xl w-full">
            <CardHeader>
              <CardTitle className="flex gap-2">
                <BusFront className="text-wiz-red" />
                버스
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8 md:grid-cols-2 sm:grid-cols-1">
              {/* <CardContent className="flex gap-8"> */}
              <div className="flex flex-col gap-6 w-full">
                <div className="mt-2 md:mt-0">
                  <p className="text-xl font-semibold pb-3">
                    익산 공설 운동장 하차
                  </p>
                  <p className="flex items-center gap-3 break-keep">
                    <Button className="bg-green-500 h-6 border-none rounded-xl hover:bg-green-500">
                      일반
                    </Button>
                    102-1, 102-2, 103, 103-1
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-xl font-semibold pb-3">
                    종합경기장. 파출소 옆 하차
                  </p>
                  <p className="flex gap-3 break-keep">
                    <Button className="bg-green-500 h-6 border-none rounded-xl hover:bg-green-500">
                      일반
                    </Button>
                    1, 40, 58, 59, 59-1, 60, 60-1, 60-2, 60-3, 61, 62, 63, 63-1,
                    64, 65, 65-1, 102-1, 102-2, 03, 105
                  </p>

                  <p className="flex items-center gap-3 break-keep">
                    <Button className="bg-blue-700 h-6 border-none rounded-xl hover:bg-blue-700">
                      좌석
                    </Button>
                    222, 222-1, 222-2, 222-3, 555
                  </p>
                </div>
              </div>
              <div className="flex  flex-col gap-6 w-full">
                <div className="mt-2 md:mt-0">
                  <p className="text-xl font-semibold pb-3">
                    이리팔봉초등학교 하차
                  </p>
                  <p className="flex items-center gap-3 break-keep">
                    <Button className="bg-green-500 h-6 border-none rounded-xl hover:bg-green-500">
                      일반
                    </Button>
                    40, 55, 56, 58, 102-2, 103
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-xl font-semibold pb-3">
                    팔봉동사무소 하차
                  </p>
                  <p className="flex gap-3 break-keep">
                    <Button className="bg-green-500 h-6 border-none rounded-xl hover:bg-green-500">
                      일반
                    </Button>
                    55, 56, 58, 59, 59-1, 60, 60-1, 60-2, 60-3, 61, 62, 63,
                    63-1, 64, 65, 65-1, 103
                  </p>

                  <p className="flex items-center gap-3 break-keep">
                    <Button className="bg-blue-700 h-6 border-none rounded-xl hover:bg-blue-700">
                      좌석
                    </Button>
                    222, 222-1, 222-2, 222-3, 555
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default IksanStadiumPage;
