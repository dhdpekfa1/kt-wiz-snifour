import Breadcrumb from '@/features/common/Breadcrumb';
import { useGetHighlightList } from '@/features/media/apis/highlight/HighlightApi.query';
import { useParams } from 'react-router';

function HighlightDetailPage() {
  const { data, isLoading, isError } = useGetHighlightList({
    variables: { count: '10' },
  });
  const { id } = useParams();

  if (isLoading) {
    return <div>데이터 로딩 중입니다...</div>;
  }

  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  const currentHighlight = data?.list.filter(
    (hightlight) => hightlight.artcSeq === Number(id)
  )[0];

  return (
    <div className="text-white">
      <Breadcrumb />

      <div className="h-full flex items-center justify-center py-8">
        {currentHighlight && (
          <div className="relative max-w-5xl w-full mx-8">
            <div className="mb-8">
              <h3 className="text-xl font-bold">{currentHighlight.title}</h3>
              <p className="text-sm text-neutral-400">
                {currentHighlight.contentsDate}
              </p>
            </div>
            <iframe
              title={currentHighlight.title}
              src={`https://www.ktwiz.co.kr/${currentHighlight.videoLink}`}
              className="w-full aspect-video"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default HighlightDetailPage;
