import { Button } from '@/components/ui';
import { PageRoutes } from '@/constants/route';
import Breadcrumb from '@/features/common/Breadcrumb';
import Layout from '@/features/common/Layout';
import { MediaDetail } from '@/features/media/common/MediaDetail';
import useHighLightDetailQuery from '@/features/media/hooks/useHighLightDetailQuery';
import { toUrl } from '@/lib';
import { ArrowLeftIcon, ListOrderedIcon } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';

function HighlightDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    return <div>Highlight ID가 없습니다. 올바른 URL로 접근해 주세요.</div>;
  }

  const { data, isLoading, isError, prefetchHighlight } =
    useHighLightDetailQuery();

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
          <Button
            onClick={() => navigate(PageRoutes.Highlight)}
            className="px-0"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            뒤로
          </Button>
        </div>

        <MediaDetail.Header
          title={data.artcTitle}
          createdAt={data.regDttm}
          views={data.viewCnt}
        />
        <MediaDetail.Body
          title={data.artcTitle}
          videoLink={data.videoLink}
          content={data.artcContents}
        />
        <MediaDetail.Navigation
          config={{
            prevLink: toUrl(PageRoutes.HighlightDetail, {
              id: data.artcPrevSeq.toString(),
            }),
            nextLink: toUrl(PageRoutes.HighlightDetail, {
              id: data.artcNextSeq.toString(),
            }),
            onPrevClick: () => prefetchHighlight(data.artcPrevSeq),
            onNextClick: () => prefetchHighlight(data.artcNextSeq),
            listButton: {
              onClick: () => navigate('/media/highlight'),
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
}

export default HighlightDetailPage;
