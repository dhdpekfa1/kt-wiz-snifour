import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const GridArticleSkeleton = () => {
  return (
    <article className="group">
      {/* 썸네일 스켈레톤 */}
      <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
        <Skeleton className="absolute inset-0 w-full h-full" />
      </div>

      {/* 제목과 날짜 스켈레톤 */}
      <div className="flex flex-col gap-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/4" />
      </div>
    </article>
  );
};
