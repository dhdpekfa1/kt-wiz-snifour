import agreementDataJson from '@/assets/data/agreement.json';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Label,
  PasswordInput,
} from '@/components/ui';
import Banner from '@/features/common/Banner';
import Breadcrumb from '@/features/common/Breadcrumb';
import Layout from '@/features/common/Layout';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import AgreementItem from './AgreementItem';
import { signupSchema } from './schemas/signupSchema';
import {
  AgreementData,
  AgreementsType,
  agreements as initialAgreements,
} from './types/agreements';

const agreementData: AgreementData = agreementDataJson as AgreementData;

export type SignupFormValues = z.infer<typeof signupSchema>;

const SignupForm = () => {
  const [agreements, setAgreements] =
    useState<AgreementsType>(initialAgreements);
  const [allAgreed, setAllAgreed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  // 개별 체크박스 변경 핸들러
  const handleCheckboxChange = (key: keyof typeof agreements) => {
    setAgreements((prev) => {
      const updatedAgreements = { ...prev, [key]: !prev[key] };
      setAllAgreed(Object.values(updatedAgreements).every((value) => value));
      return updatedAgreements;
    });
  };

  // 전체 동의 체크박스 변경 핸들러
  const handleAllAgreedChange = () => {
    const newState = !allAgreed;
    setAllAgreed(newState);
    setAgreements((prev) => {
      const updatedAgreements = Object.keys(prev).reduce(
        (acc, key) => {
          acc[key as keyof typeof prev] = newState;
          return acc;
        },
        {} as typeof agreements
      );
      return updatedAgreements;
    });
  };

  const onSubmit = (data: SignupFormValues) => {
    if (
      !agreements.termsOfService ||
      !agreements.personalInfo ||
      !agreements.locationInfo
    ) {
      alert('필수 약관에 동의해야 회원가입이 가능합니다.');
      return;
    }
    console.log('회원가입 데이터:', { ...data, agreements });
    // 회원가입 API 호출 로직 추가
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
        <Card className="w-full md:w-2/3 border-wiz-white border-opacity-50 shadow-lg shadow-wiz-red">
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
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              {/* 이메일 입력 */}
              <div className="flex flex-col gap-2">
                <Label className="text-sm md:text-lg" htmlFor="email">
                  이메일
                </Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="off"
                  placeholder="이메일을 입력하세요."
                  {...register('email')}
                  className="text-xs md:text-sm bg-wiz-black text-wiz-white"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* 비밀번호 입력 */}
              <div className="flex flex-col gap-2">
                <Label className="text-sm md:text-lg" htmlFor="password">
                  비밀번호
                </Label>
                <PasswordInput
                  id="password"
                  placeholder="비밀번호를 입력하세요."
                  {...register('password')}
                  className="text-xs md:text-sm"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* 비밀번호 확인 */}
              <div className="flex flex-col gap-2">
                <Label className="text-sm md:text-lg" htmlFor="confirmPassword">
                  비밀번호 확인
                </Label>
                <PasswordInput
                  id="confirmPassword"
                  placeholder="비밀번호를 다시 입력하세요."
                  {...register('confirmPassword')}
                  className="text-xs md:text-sm"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* 닉네임 입력 */}
              <div className="flex flex-col gap-2">
                <Label className="text-sm md:text-lg" htmlFor="nickname">
                  닉네임
                </Label>
                <Input
                  id="nickname"
                  type="text"
                  placeholder="닉네임을 입력하세요."
                  {...register('nickname')}
                  className="text-xs md:text-sm bg-wiz-black text-wiz-white"
                />
                {errors.nickname && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.nickname.message}
                  </p>
                )}
              </div>

              {/* 약관 동의 */}
              <div className="flex flex-col gap-1">
                {agreementData.map((item) => (
                  <AgreementItem
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    required={item.required}
                    description={item.description}
                    checked={agreements[item.id as keyof AgreementsType]}
                    onChange={handleCheckboxChange}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 bg-wiz-white bg-opacity-20 p-3 rounded-md">
                <Checkbox
                  id="allAgreed"
                  checked={allAgreed}
                  onCheckedChange={handleAllAgreedChange}
                />
                <Label
                  htmlFor="allAgreed"
                  className="text-sm md:text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  모든 약관에 동의합니다.
                </Label>
              </div>
              {/* 제출 버튼 */}
              <CardFooter className="flex flex-col mt-6 gap-2">
                <Button
                  className="w-full text-white bg-wiz-red hover:bg-wiz-red hover:bg-opacity-70"
                  type="submit"
                >
                  회원가입
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default SignupForm;
