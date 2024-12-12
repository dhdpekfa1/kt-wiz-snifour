import { isEmpty } from 'lodash-es';
import { Button } from '@/components/ui';
import { useNavigate } from 'react-router';
import { PageRoutes } from '@/constants/route';
import { ArrowLeftIcon, ListOrderedIcon } from 'lucide-react';
import { MediaDetail } from '@/features/media/common/MediaDetail';

import NotFoundPage from '@/pages/NotFoundPage';
import Layout from '@/features/common/Layout';
import useScrollTo from '@/features/media/hooks/useScrollTo';
import useNewsDetailQuery from '@/features/media/hooks/useNewsDetailQuery';
import { toUrl } from '@/lib';

/** 뉴스 상세 페이지 */
const NewsDetailPage = () => {
  useScrollTo();

  const navigate = useNavigate();
  const { seq, data, prefetchNews, isLoading } = useNewsDetailQuery();

  if (isLoading) {
    return (
      <Layout>
        <MediaDetail.Container>로딩중</MediaDetail.Container>
      </Layout>
    );
  }

  if (!seq || isEmpty(data)) {
    return (
      <NotFoundPage
        title="존재하지 않는 뉴스입니다"
        buttonText="뉴스 목록으로 돌아가기"
        redirectUrl={PageRoutes.News}
      />
    );
  }

  return (
    <Layout>
      <MediaDetail.Container>
        <div className="flex items-center justify-between mb-8">
          <Button onClick={() => navigate('/media/wiznews')} className="px-0">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            뒤로
          </Button>
        </div>

        <MediaDetail.Header
          title={data.title}
          createdAt={data.createdAt}
          views={data.viewCount}
        />
        <MediaDetail.Body
          title={data.title}
          imgFilePath={data.imgFilePath}
          content={data.content}
        />
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
