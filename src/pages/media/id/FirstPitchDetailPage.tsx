import { Button } from '@/components/ui';
import { PageRoutes } from '@/constants/route';
import { MediaDetail } from '@/features/media';
import { ArrowLeftIcon, ListOrderedIcon } from 'lucide-react';
import { useNavigate } from 'react-router';

import Breadcrumb from '@/features/common/Breadcrumb';
import Layout from '@/features/common/Layout';
import useFirstPitchDetailQuery from '@/features/media/hooks/firstPitch/useFirstPitchDetailQuery';
import useScrollTo from '@/features/media/hooks/useScrollTo';
import { toUrl } from '@/lib';

/** 뉴스 상세 페이지 */
const FirstPitchDetailPage = () => {
  useScrollTo();

  const navigate = useNavigate();
  const { data, prefetchFirstPitch, isLoading, isError } =
    useFirstPitchDetailQuery();

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
          title={data.artcTitle}
          createdAt={data.regDttm}
          views={data.viewCnt}
        />
        <MediaDetail.Body title={data.artcTitle} content={data.artcContents} />
        <MediaDetail.Navigation
          config={{
            prevLink: toUrl(PageRoutes.NewsDetail, {
              id: data.artcPrevSeq.toString(),
            }),
            nextLink: toUrl(PageRoutes.NewsDetail, {
              id: data.artcNextSeq.toString(),
            }),
            onPrevClick: () => prefetchFirstPitch(data.artcPrevSeq),
            onNextClick: () => prefetchFirstPitch(data.artcNextSeq),
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

export default FirstPitchDetailPage;
