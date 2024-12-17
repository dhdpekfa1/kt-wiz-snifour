import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const ListArticleSkeleton = () => {
  return (
    <article className="flex flex-col md:flex-row gap-6 py-6 animate-pulse">
      <div className="relative w-full md:w-[280px] aspect-[16/9]">
        <Skeleton
          className="absolute inset-0 w-full h-full rounded-md"
          baseColor="#d1d5db"
        />
      </div>

      {/* 컨텐츠 스켈레톤 */}
      <div className="flex-1 flex flex-col gap-3">
        {/* 제목 스켈레톤 */}
        <Skeleton className="h-8 w-3/4" />

        {/* 설명 또는 내용 스켈레톤 */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />

        {/* 추가 정보 스켈레톤 */}
        <div className="flex gap-4 mt-auto">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </article>
  );
};
