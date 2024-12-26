import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui';
import Banner from '@/features/common/Banner';
import Breadcrumb from '@/features/common/Breadcrumb';
import Layout from '@/features/common/Layout';

const TeamIntroduce = () => {
  return (
    <Layout
      header={
        <Banner>
          <Banner.Image
            src="https://placehold.co/1200x200/141414/642521?text=COACHING+STEP"
            alt="KT WIZ Coach"
          />
          <Banner.Overlay>
            <Banner.Heading title="KT WIZ는?" subtitle="KT WIZ 소개" />
            <Banner.Description description="한국 프로야구의 '10번째 심장' kt wiz를 소개합니다." />
          </Banner.Overlay>
        </Banner>
      }
    >
      <Breadcrumb />
      {/* biome-ignore lint/a11y/useAltText: <explanation> */}
      <img
        src="/assets/Ktwiz/TeamLogo.jpg"
        className="w-full h-auto mt-3 mb-8"
      />

      <div className="w-full flex flex-col justify-start border-none shadow-none text-wiz-white">
        <CardContent className="flex flex-col gap-6 md:gap-8">
          <Card className="flex flex-col gap-3 rounded-3xl">
            <div className="m-4 flex flex-col gap-3">
              <CardTitle className="text-lg md:text-2xl lg:text-3xl flex justify-center">
                신비롭고 강력한 힘, 상상의 야구 실현
              </CardTitle>
              <CardDescription className="text-sm md:text-md lg:text-lg break-keep flex justify-center p-3">
                kt wiz는 2013년, 제10구단에 대한 국민들의 강한 열망, 경기도 및
                수원시 그리고 KT 그룹의 뜨거운 유치 열정으로 비상한 솜씨와
                비범한 재능을 가진 마법사, wiz라는 이름으로 신비롭고 강력한
                힘으로 상상의 야구를 실현하겠다는 의지를 가지고 새롭게
                출범하였습니다.
              </CardDescription>
            </div>
          </Card>

          <Card className="flex  flex-col md:flex-row rounded-3xl overflow-hidden">
            <div className="w-full md:w-[70%] p-6 flex flex-col justify-start ">
              <CardTitle className="text-lg md:text-2xl lg:text-3xl mb-3 flex justify-center">
                명문구단을 위한 철저한 플랜!
              </CardTitle>
              <CardDescription className="text-sm md:text-md lg:text-lg break-keep leading-relaxed p-3">
                명문구단이 되기 위한 철저한 중장기 플랜을 통해 kt wiz의 감독 및
                코칭 스태프, 선수들을 구성하고 있습니다. 기존 수원야구장을
                대규모로 증축하고 리모델링하여 최적의 야구관람 시설을
                갖추었습니다. 굵은 땀방울과 함께 전지 훈련을 수행하고 2014년
                퓨처스리그에 출전하여 기량을 쌓은 후, 2015년 1군 리그에
                성공적으로 데뷔하여 야구 팬들에게 KT wiz 이름 그대로 마법과 같은
                야구를 펼쳐보이기 위해 노력을 다하고 있습니다.
              </CardDescription>
            </div>

            <div className="w-full md:w-[40%] h-auto">
              <img
                src="/assets/Ktwiz/Players.jpg"
                className="w-full h-full object-cover"
                alt="KT Wiz Players"
              />
            </div>
          </Card>

          <Card className="flex flex-col md:flex-row rounded-3xl overflow-hidden">
            <div className="w-full md:w-[70%] p-6 flex flex-col justify-start">
              <CardTitle className="text-lg md:text-2xl lg:text-3xl mb-3 flex justify-center">
                복합 문화공간의 첨단 야구장!
              </CardTitle>
              <CardDescription className="text-sm md:text-md lg:text-lg break-keep leading-relaxed p-3">
                kt 그룹의 우수한 ICT 기술을 활용한 '빅 테인먼트(Big Tainment)'
                기술을 적극 활용하여 야구를 사랑하는 팬 여러분께 차별화된 야구
                <span className="whitespace-nowrap">콘텐츠를</span> 제공하고
                남녀노소 누구나 즐겁고 편하게 야구를 즐길 수{' '}
                <span className="whitespace-nowrap">있는</span> 복합 문화공간의
                첨단 야구장을 만들{' '}
                <span className="whitespace-nowrap">예정입니다.</span>
              </CardDescription>
            </div>
            <div className="w-full md:w-[40%] h-auto">
              <img
                src="/assets/Ktwiz/Stadium.jpg"
                className="w-full h-full object-cover"
                alt="KT Wiz Stadium"
              />
            </div>
          </Card>

          <Card className="flex flex-col gap-3 rounded-3xl">
            <div className="m-4 flex flex-col gap-3">
              <CardTitle className="text-lg md:text-2xl lg:text-3xl flex justify-center">
                재미와 즐거움을 추구하는 근성 있는 구단!
              </CardTitle>
              <CardDescription className="text-sm md:text-md lg:text-lg break-keep flex flex-col justify-center p-3">
                창단 과정에서 경기마다 수원시민들이 보내주신 성원과 기대에
                보답하기 위해 앞으로도 야구를 통한 즐거운 여가 문화를 제공할
                것이며 팬들과 함께 할 수 있는 새롭고 다양한 마케팅을 전개해 나가
                “재미와 즐거움을 추구하는 근성있는 구단”이라는 kt sports의
                확고한 비전을 실행하고 다년간 쌓인 스포츠 구단 운영 노하우로
                그라운드 안팎에서 그 동안 없던 새로운 야구를 kt wiz가 이루어
                가겠습니다.
              </CardDescription>
            </div>
          </Card>
        </CardContent>
      </div>
    </Layout>
  );
};

export default TeamIntroduce;
