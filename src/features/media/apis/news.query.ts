import { ApiRoutes } from '@/constants/route';
import { useFetch } from './hooks';
import { useEffect, useState } from 'react';
import { API_ERROR_MESSAGES } from '@/constants/error';

type NewsItem = {
  artcContents: string; // 기사 내용 (HTML 형식)
  artcNextSeq: number; // 다음 기사 순번 (현재는 0으로 설정)
  artcPrevSeq: number; // 이전 기사 순번 (현재는 0으로 설정)
  artcSeq: number; // 기사 고유 번호
  artcTitle: string; // 기사 제목
  boardCatSeq: number; // 게시판 카테고리 순번 (현재는 0으로 설정)
  boardCode: string; // 게시판 코드
  delYn: string; // 삭제 여부 (N: 삭제 안됨, Y: 삭제됨)
  imgFilePath: string; // 이미지 파일 경로
  maxArticlePerPage: number; // 페이지당 최대 기사 수
  regDttm: number; // 등록 일시 (UNIX 타임스탬프)
  regr: string; // 등록자 ID
  totalPage: number; // 전체 페이지 수
  updDttm: number; // 수정 일시 (UNIX 타임스탬프)
  updr: string; // 수정자 ID
  useYn: string; // 사용 여부 (Y: 사용, N: 사용 안됨)
  viewCnt: number; // 조회 수
};

type NewsResponse = {
  list: NewsItem[];
  searchCount: number;
};

// [GET] /api/article/newslist?searchWord=
export const useGetNews = (searchWord?: string) => {
  const [newsData, setNewsData] = useState<NewsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await useFetch<NewsResponse>(ApiRoutes.News, {
          searchWord,
        });
        setNewsData(response.data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error(API_ERROR_MESSAGES.NEWS.NOT_FOUND)
        );
        setNewsData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [searchWord]);

  return {
    data: newsData?.list,
    totalCount: newsData?.searchCount,
    isLoading,
    error,
  };
};
