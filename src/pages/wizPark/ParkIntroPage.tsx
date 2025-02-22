import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { Banner, Breadcrumb, Layout } from '@/features/common';

function ParkIntroPage() {
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
              title="Suwon KT WIZ PARK"
              subtitle="수원 kt wiz park를 소개합니다."
            />
            <Banner.Description description="" />
          </Banner.Overlay>
        </Banner>
      }
    >
      <div className="flex flex-col items-center justify-center">
        <Breadcrumb />
        {/* biome-ignore lint/a11y/useAltText: <explanation> */}
        <img src="/assets/ktwizpark.jpg" className="w-full h-2/3" />
        <Card className="h-1/3 w-full px-8 pb-8 flex flex-col items-center border-none shadow-none text-wiz-white">
          <CardHeader className="w-full">
            <CardTitle className="w-fll flex items-center justify-center gap-4 mt-8 text-3xl max-sm:text-xl  max-sm:flex-col  max-sm:gap-1 max-sm:items-start">
              복합 문화공간의 첨단 야구장!
              <p className="text-wiz-red">수원구장</p>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-5 w-full -p-4">
            <Card className="flex flex-col gap-3 rounded-3xl">
              <div className="m-4 flex flex-col gap-3">
                <CardTitle className="max-sm:text-lg">
                  최적의 경기 환경 조성
                </CardTitle>
                <CardDescription className="break-keep">
                  야구장의 온도와 습도, 조명을 자동 조절할 수 있는 유비쿼터스
                  센서 네트워크 시스템(USN)을 도입하여 선수단과 팬들에게 경기에
                  더욱 집중할 수 있는 최적의 경기 환경을 제공합니다.
                </CardDescription>
              </div>
            </Card>
            <Card className="flex flex-col gap-3 rounded-3xl">
              <div className="m-4 flex flex-col gap-3">
                <CardTitle className="max-sm:text-lg">
                  스마트한 구장 시설
                </CardTitle>
                <CardDescription className="break-keep">
                  구장 내 무선 인터넷(WIFI) 설치 등 ICT 인프라 확충을 통해
                  다양한 모바일 기기를 활용하여 입장 등록, 실시간 주차 정보,
                  지정석 찾기, 음식 주문 등 다른 경기장에서 경험하지 못했던
                  스마트한 콘텐츠를 이용하실 수 있습니다.
                </CardDescription>
              </div>
            </Card>
            <Card className="flex flex-col gap-3 rounded-3xl">
              <div className="m-4 flex flex-col gap-3 ">
                <CardTitle className="max-sm:text-lg">
                  {' '}
                  다양한 관람층을 위한 복합 문화공간
                </CardTitle>
                <CardDescription className="break-keep">
                  익사이팅석, 프랜들리서, 커플석, 패밀리석, 장애인석 등 다양한
                  관람층을 고려하여 완벽한 관람시설을 제공하고, 각종 센서와
                  모바일 기기가 설치된 체험존 등을 제공하여 경기 관람 뿐 아니라
                  오락, 레저, 교육의 복합 문화공간을 선보입니다.
                </CardDescription>
              </div>
            </Card>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

export default ParkIntroPage;
