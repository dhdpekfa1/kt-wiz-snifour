import { supabase } from '@/lib/supabase';
import { useUserStore } from '@/store/useUserStore';
import { useEffect, useMemo } from 'react';

const useUserSession = () => {
  const { email, nickname, sub, setEmail, setNickname, setSub } =
    useUserStore();

  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error('세션 가져오기 실패:', error.message);
        return;
      }

      if (data?.session?.user) {
        const user = data.session.user;
        setEmail(user.email || null);
        setNickname(user.user_metadata?.nickname || null);
        setSub(user.id || null);
      }
    };

    fetchSession();
  }, [setEmail, setNickname, setSub]);

  // 사용자 데이터 메모이제이션
  const userData = useMemo(
    () => ({
      email,
      nickname,
      sub,
    }),
    [email, nickname, sub]
  );

  return userData;
};
export default useUserSession;
