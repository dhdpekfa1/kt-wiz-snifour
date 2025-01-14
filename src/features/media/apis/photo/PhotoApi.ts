import { ApiRoutes } from '@/constants/route';
import { PhotoListDto, PhotoResponse } from '@/features/media/types/photo';
import instance from '@/lib/axios/instance';

const PhotoRoutes = {
  GAME: ApiRoutes.GamePhoto,
  TRAINING: ApiRoutes.TrainingPhoto,
  EVENT: ApiRoutes.EventPhoto,
};

export const photoApi = {
  getPhotoList: async (params: PhotoListDto): Promise<PhotoResponse> => {
    const { type, ...restParams } = params;
    const response = await instance.get(PhotoRoutes[type], {
      params: restParams,
    });
    return response.data;
  },
};
