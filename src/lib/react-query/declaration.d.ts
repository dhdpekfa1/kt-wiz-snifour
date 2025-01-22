import '@tanstack/react-query';

type MetaTypeType = 'modal' | 'callback' | 'none';

/**
 * meta.type: 'modal': 모달로 처리
 * meta.type: 'callback': 커스텀 콜백으로 처리
 * meta.type: 'none': 에러 처리 안함
 */

interface MetaProps {
  type: MetaTypeType;
  message?: string;
  callback?: (...args: AxiosError) => void;
}

declare module '@tanstack/react-query' {
  interface Register {
    queryMeta:
      | {
          type: MetaTypeType;
          message?: string;
          callback?: (...args: AxiosError) => void;
        }
      | undefined;
    mutationMeta: Record<string, unknown>;
  }
}
