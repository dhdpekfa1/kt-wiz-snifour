import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/lib/react-query/query-client';

type ProvidersProps = {
  children: React.ReactNode;
};

const AppProviders = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} /> {/* 개발 환경에서만 사용 */}
    </QueryClientProvider>
  );
};

export default AppProviders;
