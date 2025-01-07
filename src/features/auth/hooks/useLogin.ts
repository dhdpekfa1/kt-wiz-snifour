import { supabase } from '@/lib/supabase';
import { useUserStore } from '@/store/useUserStore';
import { useState } from 'react';
import { useNavigate } from 'react-router';

interface LoginData {
  email: string;
  password: string;
  saveId: boolean;
}

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const setEmail = useUserStore((state) => state.setEmail);
  const setNickname = useUserStore((state) => state.setNickname);
  const setSub = useUserStore((state) => state.setSub);

  const login = async (data: LoginData) => {
    const { email, password, saveId } = data;
    setIsLoading(true);
    setError(null);

    try {
      const { data: sessionData, error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (error) {
        if (error.code === 'email_not_confirmed') {
          setError(
            '이메일 확인을 완료해주세요. 인증 이메일을 다시 보냈습니다.'
          );

          // 인증 이메일 재발송
          await supabase.auth.resend({
            type: 'signup',
            email,
          });
        } else {
          setError(error.message);
        }
        return false;
      }

      // 로그인 성공 시 사용자 정보 가져오기
      const user = sessionData?.user;
      if (user) {
        // Zustand store에 사용자 정보 저장
        setEmail(user.email || null);
        setNickname(user.user_metadata.nickname || null);
        setSub(user.user_metadata.sub || null);
      }

      // 이메일 저장 처리
      if (saveId) {
        localStorage.setItem('savedEmail', email);
      } else {
        localStorage.removeItem('savedEmail');
      }
      console.log();
      navigate('/'); // 메인 페이지로 이동
      return true;
    } catch (err) {
      console.error('로그인 중 문제가 발생했습니다:', err);
      setError('로그인 중 문제가 발생했습니다. 다시 시도해주세요.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};

export default useLogin;
