import { supabase } from '@/lib/supabase';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const useGoogleLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const signinWithGoogle = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      if (error) {
        console.error('구글 로그인 오류:', error);
        setError('구글 로그인 중 문제가 발생했습니다. 다시 시도해주세요.');
        return false;
      }

      navigate('/');
      return true;
    } catch (err) {
      console.error('구글 로그인 중 문제가 발생했습니다:', err);
      setError('구글 로그인 중 문제가 발생했습니다. 다시 시도해주세요.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { signinWithGoogle, isLoading, error };
};

export default useGoogleLogin;
