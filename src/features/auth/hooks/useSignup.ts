import { supabase } from '@/lib/supabase';
import { useState } from 'react';
import { useNavigate } from 'react-router';

interface SignupData {
  email: string;
  password: string;
  nickname: string;
}

const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const signup = async (data: SignupData) => {
    const { email, password, nickname } = data;
    setIsLoading(true);
    setError(null);

    try {
      // Supabase 회원가입 호출
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            nickname,
          },
        },
      });

      if (error) {
        setError(error.message);
        return false;
      }

      alert('kt 가족이 되신 걸 환영합니다!\n이메일 인증 후 이용하세요.');
      navigate('/login'); // 로그인 페이지로 이동
      return true;
    } catch (err) {
      console.error('회원가입 중 문제가 발생했습니다:', err);
      setError('회원가입 중 문제가 발생했습니다. 다시 시도해주세요.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};

export default useSignup;
