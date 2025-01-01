import Breadcrumb from '@/features/common/Breadcrumb';
import { useGetStoryDetail } from '@/features/media/apis/story/StoryApi.query';
import { format } from 'date-fns';
import { EyeIcon } from 'lucide-react';
import { useParams } from 'react-router';

function StoryDetailPage() {
  const { id } = useParams();

  if (!id) {
    return <div>Highlight ID가 없습니다. 올바른 URL로 접근해 주세요.</div>;
  }

  const { data, isLoading, isError } = useGetStoryDetail({
    variables: { artcSeq: id },
  });

  if (isLoading) {
    return <div>데이터 로딩 중입니다...</div>;
  }

  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <div className="text-white">
      <Breadcrumb />

      <div className="h-full flex items-center justify-center py-8">
        {data && (
          <div className="relative max-w-5xl w-full mx-8">
            <div className="mb-8">
              <h3 className="text-xl font-bold">{data.artcTitle}</h3>
              <div className="text-sm text-neutral-400 flex items-center gap-2">
                <p>{format(new Date(data.regDttm || ''), 'yyyy-MM-dd')}</p>
                <div className="flex items-center gap-1">
                  <EyeIcon className="w-4 h-4" />
                  <span>{data.viewCnt}</span>
                </div>
              </div>
            </div>
            <iframe
              title={data.artcTitle}
              src={data.videoLink}
              className="w-full aspect-video"
            />
            <p className="text-center my-4 text-neutral-400">
              {data.artcContents}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default StoryDetailPage;
