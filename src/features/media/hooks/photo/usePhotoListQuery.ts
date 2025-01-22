import { useGetPhotoList } from '@/features/media/apis/photo/PhotoApi.query';
import { PhotoListDto } from '@/features/media/types/photo';
import { QueryParser } from '@/lib';
import { useParams, useSearchParams } from 'react-router';

const usePhotoListQuery = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const type = id === '1' ? 'GAME' : id === '2' ? 'TRAINING' : 'EVENT';

  const searchWord = QueryParser.toString(searchParams.get('searchWord')) ?? '';
  const startDate = QueryParser.toString(searchParams.get('startDate')) ?? '';
  const endDate = QueryParser.toString(searchParams.get('endDate')) ?? '';

  const variables: PhotoListDto = { type, itemCount: 6, pageNum: 1 };
  if (searchWord) {
    variables.searchWord = searchWord;
  }
  if (startDate && endDate) {
    variables.startDate = startDate;
    variables.endDate = endDate;
  }

  const {
    data: photoList,
    isError,
    isLoading,
    isSuccess,
    hasNextPage,
    fetchNextPage,
  } = useGetPhotoList({ variables });

  return {
    photoList,
    isError,
    isLoading,
    isSuccess,
    hasNextPage,
    fetchNextPage,
  };
};

export default usePhotoListQuery;
