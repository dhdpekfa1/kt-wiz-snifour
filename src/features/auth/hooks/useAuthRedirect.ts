import { supabase } from '@/lib/supabase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const useAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = async () => {
      const { data } = await supabase.auth.getSession();

      if (data.session) {
        navigate('/');
      }
    };

    checkAuthStatus();
  }, [navigate]);
};

export default useAuthRedirect;
