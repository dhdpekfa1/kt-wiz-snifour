import { UseQueryOptions } from '@tanstack/react-query';

import { AxiosError } from 'axios';
import { AsyncFn, AsyncFnReturn, Parameter } from '@/lib';
import { WrapVariables } from './wrap-variables';

// Example : const useAnyQuery = ({ options, variables } : UseQueryParams<typeof anyApiFn>) => {...}
export type UseQueryParams<
  T extends AsyncFn,
  Error = AxiosError,
  Data = AsyncFnReturn<T>,
  TransformedData = Data,
> = {
  options?: Omit<
    UseQueryOptions<Data, Error, TransformedData>,
    'queryKey' | 'queryFn'
  >;
} & WrapVariables<Parameter<T>>;
