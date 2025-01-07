import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  Checkbox,
  Input,
  Label,
  PasswordInput,
} from '@/components/ui';
import useAuthRedirect from '@/features/auth/hooks/useAuthRedirect';
import useLogin from '@/features/auth/hooks/useLogin';
import { loginSchema } from '@/features/auth/schemas/loginSchema';
import Banner from '@/features/common/Banner';
import Breadcrumb from '@/features/common/Breadcrumb';
import Layout from '@/features/common/Layout';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { z } from 'zod';

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const [saveId, setSaveId] = useState<boolean>(false);
  const { login, error } = useLogin();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });
  useAuthRedirect();

  // 로컬 스토리지에서 이메일 불러오기
  useEffect(() => {
    const savedEmail = localStorage.getItem('savedEmail');
    if (savedEmail) {
      setValue('email', savedEmail);
      setSaveId(true); // 체크박스 활성화
    }
  }, [setValue]);

  const onSubmit = async (data: LoginFormValues) => {
    const success = await login({ ...data, saveId });

    if (!success) {
      console.error(error);
    }
  };

  return (
    <Layout
      header={
        <Banner>
          <Banner.Image
            src="https://placehold.co/1200x200/141414/642521?text=KT+Family"
            alt="login"
          />
          <Banner.Overlay>
            <Banner.Heading title="Login" subtitle="kt wiz의 가족" />
            <Banner.Description description="로그인 후 kt wiz 사이트를 더욱 다양하게 이용해 보세요." />
          </Banner.Overlay>
        </Banner>
      }
    >
      <Breadcrumb />
      <div className="flex items-center flex-col my-10 md:my-20">
        <Card className="w-full md:w-1/2 lg:1/3 border-wiz-white border-opacity-50 shadow-lg shadow-wiz-red">
          <CardHeader>
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
              <Label className="text-sm md:text-lg" htmlFor="password">
                비밀번호
              </Label>
              <PasswordInput
                id="password"
                placeholder="비밀번호를 입력하세요."
                {...register('password')}
                className="text-xs md:text-sm"
                autoComplete="current-password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
              <div className="flex items-center gap-2">
                <Checkbox
                  id="saveId"
                  checked={saveId}
                  onCheckedChange={(checked) => setSaveId(!!checked)}
                />
                <Label
                  htmlFor="saveId"
                  className="text-xs md:text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  이메일 저장
                </Label>
              </div>
              {/* {errorMessage && (
                <p className="text-red-500 text-xs mt-2">{errorMessage}</p>
              )} */}
              <CardFooter className="flex flex-col mt-6 gap-2">
                <Button
                  className="w-full m text-white bg-wiz-red hover:bg-wiz-red hover:bg-opacity-70"
                  type="submit"
                >
                  로그인
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
        <div className="flex items-center gap-4 text-[10px] md:text-xs lg:text-sm text-wiz-white mt-8">
          <Link to={'/findid'}>이메일 찾기</Link>
          <div className="text-wiz-white text-opacity-40">|</div>
          <Link to={'findpw'}>비밀번호 찾기</Link>
          <div className="text-wiz-white text-opacity-40">|</div>
          <Link to="/join">회원가입</Link>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
