import { isNotNullish, Parameter, UseQueryParams } from '@/lib';
import { photoApi } from './PhotoApi';
import { AxiosError } from 'axios';
import { PhotoResponse } from '../../types/photo';
import { GridDataType } from '../../types';
import { useQuery } from '@tanstack/react-query';
import { createGridViewItem } from '../../services/grid-mapper.service';

export const PHOTO_API_QUERY_KEY = {
  /** 포토 목록 조회 쿼리 키 생성 */
  GET_LIST: (params: Parameter<typeof photoApi.getPhotoList>) =>
    ['photo-list', params].filter(isNotNullish),
};

/**
 * [GET] /api/article/highlightlist?count=
 * @param params 포토 목록 조회에 필요한 파라미터
 * @returns 그리드 타입으로 변환된 포토 목록 데이터와 총 데이터 개수
 */
export function useGetPhotoList(
  params: UseQueryParams<
    typeof photoApi.getPhotoList,
    AxiosError,
    PhotoResponse, // 실제 응답
    GridDataType // 변환된 응답
  >
) {
  return useQuery({
    queryKey: PHOTO_API_QUERY_KEY.GET_LIST(params.variables),
    queryFn: async () => {
      const response = await photoApi.getPhotoList(params.variables);
      return response;
    },
    select: (res: PhotoResponse): GridDataType => ({
      list: res.data.list
        .filter((item) => item.useYn === 'Y')
        .map(createGridViewItem),
    }),
    ...params?.options,
  });
}
