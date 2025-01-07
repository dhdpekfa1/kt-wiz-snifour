import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from '@/lib/supabase';

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
