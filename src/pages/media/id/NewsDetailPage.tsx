import { Button } from '@/components/ui';
import { PageRoutes } from '@/constants/route';
import { MediaDetail } from '@/features/media/common/MediaDetail';
import { ArrowLeftIcon, ListOrderedIcon } from 'lucide-react';
import { useNavigate } from 'react-router';

import Layout from '@/features/common/Layout';
import useNewsDetailQuery from '@/features/media/hooks/useNewsDetailQuery';
import useScrollTo from '@/features/media/hooks/useScrollTo';
import { toUrl } from '@/lib';
import Breadcrumb from '@/features/common/Breadcrumb';

/** 뉴스 상세 페이지 */
const NewsDetailPage = () => {
  useScrollTo();

  const navigate = useNavigate();
  const { data, prefetchNews, isLoading, isError } = useNewsDetailQuery();

  // MEMO:
  // 로딩 중일때 스켈레톤이 오히려 사용자 경험에 방해가 되는 것 같아 빈테이너를 반환합니다.
  // 추후 전역 에러에서 모달 표시만 보여주면 될 것 같아요.
  if (isLoading || isError || !data) {
    return (
      <Layout>
        <MediaDetail.Container />
      </Layout>
    );
  }

  return (
    <Layout>
      <Breadcrumb />
      <MediaDetail.Container>
        <div className="flex items-center justify-between mb-8">
          <Button onClick={() => navigate(PageRoutes.News)} className="px-0">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            뒤로
          </Button>
        </div>

        <MediaDetail.Header
          title={data.title}
          createdAt={data.createdAt}
          views={data.viewCount}
        />
        <MediaDetail.Body title={data.title} content={data.content} />
        <MediaDetail.Navigation
          config={{
            prevLink: toUrl(PageRoutes.NewsDetail, {
              id: data.prevSeq.toString(),
            }),
            nextLink: toUrl(PageRoutes.NewsDetail, {
              id: data.nextSeq.toString(),
            }),
            onPrevClick: () => prefetchNews(data.prevSeq),
            onNextClick: () => prefetchNews(data.nextSeq),
            listButton: {
              onClick: () => navigate('/media/wiznews'),
              text: (
                <>
                  <ListOrderedIcon className="w-4 h-4 mr-2" />
                  <span>목록으로</span>
                </>
              ),
            },
          }}
        />
      </MediaDetail.Container>
    </Layout>
  );
};

export default NewsDetailPage;
