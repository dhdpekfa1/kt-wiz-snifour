import { supabase } from '@/lib/supabase';

const useKakaoLogin = () => {
  const signinWithKakao = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: '/',
      },
    });

    if (error) {
      alert(
        `카카오 로그인 중 문제가 발생했습니다: <${error.code}> ${error.message}`
      );
    }
  };

  return { signinWithKakao };
};

export default useKakaoLogin;
