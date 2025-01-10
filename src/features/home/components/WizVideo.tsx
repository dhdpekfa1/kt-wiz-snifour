import { Link, useNavigate } from 'react-router';

import { cn } from '@/lib/utils';
import { WizVideoAnimation } from './WizVideoAnimation';
import { useGetMainWizVideo } from '../apis/mainApi.query';
import Skeleton from 'react-loading-skeleton';

function WizVideo() {
  const navigate = useNavigate();
  const {
    data: videos,
    isLoading,
    isError,
    error,
  } = useGetMainWizVideo({
    variables: { count: 5 },
  });

  if (isError) {
    return <div>Error: {error?.toString()}</div>;
  }

  if (!videos || !videos.length) {
    return <div>데이터가 존재하지 않습니다.</div>;
  }

  return (
    <div>
      <h3
        className={cn(
          'text-white font-bold text-base my-2',
          'md:text-xl md:my-3',
          'lg:text-2xl lg:my-4'
        )}
      >
        wiz Video
      </h3>
      <div>
        <div className="w-full h-fit bg-gray-200 rounded-3xl overflow-hidden">
          {isLoading ? (
            <Skeleton className="w-full aspect-video" baseColor="#d1d5db" />
          ) : (
            <iframe
              title={videos[0].artcTitle}
              src={`https://www.ktwiz.co.kr/${videos[0].videoLink}`}
              className="w-full aspect-video"
            />
          )}
        </div>
        <div
          className={cn('w-full grid grid-cols-2 gap-4 py-4', 'lg:grid-cols-4')}
        >
          {isLoading
            ? Array.from({ length: 4 }).map(() => (
                <Skeleton
                  className="h-52 md:h-64 lg:h-72 rounded-xl"
                  baseColor="#d1d5db"
                />
              ))
            : videos
                .slice(1)
                .map((vid, index) => (
                  <WizVideoAnimation
                    key={vid.artcSeq}
                    vid={vid}
                    index={index}
                    navigate={navigate}
                  />
                ))}
        </div>
      </div>
      <div className="flex items-center justify-center my-4">
        <Link
          to="/media/highlight"
          className={cn(
            'rounded bg-white bg-opacity-10 text-white text-xs px-2 py-1 hover:bg-opacity-100 hover:text-black transition-colors duration-300',
            'lg:text-base lg:px-4 lg:py-2'
          )}
        >
          더 많은 영상보기
        </Link>
      </div>
    </div>
  );
}

export { WizVideo };
