import { useMemo } from 'react';

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import useHandleError from '@/hooks/useHandleError';
import { MetaProps } from '@/lib/react-query/declaration';

type CustomQueryClientProviderProps = {
  children: JSX.Element;
};

/**
 * @rara-record
 * React Query 4이전까지는 useQuery 내부에서 onError라는 Props를 제공했지만,
 * v5 이후로는 useQuery 내부에서 onError라는 Props를 제공하지 않습니다.
 * 권장하는 qeuryCache를 이용하는 방법으로 새로운 에러처리를 적용합니다.
 * 다음은 queryCache 인자 활용하여 에러처리 및 default Error를 추가하는 방법입니다.
 * 커스텀 에러를 처리할 때는 messge를 넘겨주세요.
 *
 * lib/react-query/declaration.d.ts 파일을 참고해주세요.
 *
 * @example
 * const { data: userData } = useUserRetrieveQuery({
    options: {
      meta: {
        type: 'none',
      },
    },
  });

    Query1({
    options: {
      meta: {
        type: 'callback',
        callback: (err) => {
          console.log('콘솔을 찍거나 다른 액션도 가능합니다.', err?.response.message)
        }
      },
    },
  });

    Query2({
    options: {
      meta: {
        type: 'modal',
        message: '뉴스 페이지 서버 에러', (선택값)
      },
    },
  });

  Query3({
    options: {
      // meta 가 없으면 기본값으로 modal을 띄웁니다.
    },
  });
 */

const CustomQueryClientProvider = ({
  children,
}: CustomQueryClientProviderProps) => {
  const { handleApiError } = useHandleError();

  const queryCache = useMemo(
    () =>
      new QueryCache({
        onError: (error: unknown, query) => {
          const meta = query.meta as MetaProps;
          // 기본값은 모달입니다.
          if (!meta || meta.type === 'modal') {
            handleApiError(error, { message: meta?.message });
          } else if (meta.type === 'callback' && meta.callback) {
            meta?.callback(error);
          }
          // MEMO: none 타입은 작동안함
        },
      }),
    [handleApiError]
  );

  const mutationCache = useMemo(
    () =>
      new MutationCache({
        onError: (error: unknown, _variable, _context, mutation) => {
          const isOnError = !!mutation.options.onError;
          if (!isOnError) {
            handleApiError(error);
          }
        },
      }),
    [handleApiError]
  );

  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            /** 개발자 판단하에 설정해주세요 기본값은 0 입니다. */
            staleTime: 5 * 60 * 1000, // 5분
            gcTime: 10 * 60 * 1000, // 10분
            /** 개발자 판단하에 설정해주세요 기본값은 3 입니다. */
            retry: 1,
            refetchOnMount: false, // 컴포넌트 마운트 시 쿼리 재요청 여부
            refetchOnWindowFocus: false, // 창 포커스 시 쿼리 재요청 여부
          },
        },
        queryCache,
        mutationCache,
      }),
    [mutationCache, queryCache]
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};

export default CustomQueryClientProvider;
