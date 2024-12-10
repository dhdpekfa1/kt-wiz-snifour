import { UseQueryOptions } from '@tanstack/react-query';

import { AxiosError } from 'axios';
import { AsyncFn, AsyncFnReturn, Parameter } from '@/lib';
import { WrapVariables } from './wrap-variables';

// Example : const useAnyQuery = ({ options, variables } : UseQueryParams<typeof anyApiFn>) => {...}
export type UseQueryParams<
  T extends AsyncFn,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  Error = AxiosError<any>,
  Data = AsyncFnReturn<T>,
  Variables = Parameter<T>,
> = {
  options?: Omit<UseQueryOptions<Data, Error>, 'queryKey' | 'queryFn'>;
} & WrapVariables<Variables>;
