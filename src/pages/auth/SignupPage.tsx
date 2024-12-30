import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import Banner from '@/features/common/Banner';
import Breadcrumb from '@/features/common/Breadcrumb';
import Layout from '@/features/common/Layout';

const SignupPage = () => {
  // 일반 가입
  const handleBasic = () => {
    console.log('TODO');
  };
  //14세 미만
  const handleUnder = () => {
    console.log('TODO');
  };

  return (
    <Layout
      header={
        <Banner>
          <Banner.Image
            src="https://placehold.co/1200x200/141414/642521?text=KT+New+Family"
            alt="Signup"
          />
          <Banner.Overlay>
            <Banner.Heading title="회원가입" subtitle="kt wiz의 새 가족" />
            <Banner.Description description="회원가입 후 kt wiz 사이트를 더욱 다양하게 이용해 보세요." />
          </Banner.Overlay>
        </Banner>
      }
    >
      <Breadcrumb />
      <div className="flex items-center flex-col my-10 md:my-20">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl text-center">
              회원가입
            </CardTitle>
            <CardDescription className="flex flex-col items-center justify-center text-xs md:text-base lg:text-xl">
              <img
                src="/assets/emblems/ktwiz.svg"
                className="w-20 md:w-28 lg:w-30 h-auto m-6"
                alt="kt logo"
              />
              <span>
                kt wiz에 가입하여 티켓예매, 경기상세기록 등 다양한 서비스를
              </span>
              <span> 편리하게 이용해보세요.</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2 md:gap-6">
            <Button
              className="w-full text-white bg-wiz-red hover:bg-wiz-red hover:bg-opacity-70 h-[100px] md:h-[150px] lg:h-[220px] md:text-lg lg:text-2xl"
              onClick={handleBasic}
            >
              일반 회원가입
            </Button>
            <Button
              className="w-full m text-white bg-wiz-white bg-opacity-50 hover:bg-wiz-white hover:bg-opacity-30 h-[100px] md:h-[150px] lg:h-[220px] md:text-lg lg:text-2xl"
              onClick={handleUnder}
            >
              14세 미만 회원가입
            </Button>
          </CardContent>
          <div className="flex flex-col mt-6 gap-2 bg-wiz-white bg-opacity-10 m-5 p-4 rounded-md">
            <div className="flex flex-col break-keep text-sm md:text-base lg:text-lg">
              <span className="font-bold">[ kt wiz 회원안내 ]</span>
              회원 가입 후, 실명인증을 완료한 고객은 무료 회원으로 분류되어
              티켓예매 등과 같은 예매가 필요한 서비스 또한 이용 가능합니다.
            </div>
            <div className="flex flex-col break-keep text-sm md:text-base lg:text-lg">
              <span className="font-bold">[ 만 14세 미만 회원가입 안내 ]</span>
              만 14세 미만은 법률에 의거하여 보호자(법적대리인)의 동의가
              필요합니다.
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default SignupPage;
