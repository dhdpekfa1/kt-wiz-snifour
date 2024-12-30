import { cn } from '@/lib/utils';
import Skeleton from 'react-loading-skeleton';

function PlayerProfileSkeleton() {
  return (
    <div
      className={cn(
        'w-full h-full flex flex-row gap-4',
        'lg:w-1/4 lg:flex-col'
      )}
    >
      {/* 선수 이미지 */}
      <div
        className={cn(
          'w-1/3 h-fit aspect-square bg-wiz-white rounded-xl overflow-hidden',
          'lg:w-full'
        )}
      >
        <Skeleton className="w-full h-full" />
      </div>
      <div className={cn('w-2/3 h-full flex items-center', 'lg:w-full')}>
        {/* 선수 프로필 */}
        <div className={cn('w-full h-full flex flex-col gap-1 lg:gap-2')}>
          {/* 이름, 포지션 */}
          <div className="flex items-center justify-between">
            <Skeleton className="w-20 h-6 md:h-7 lg:h-8" />
            <Skeleton className="w-20 h-6 md:h-7 lg:h-8" />
          </div>
          <div className="flex items-center justify-between">
            <Skeleton className="w-24 h-4 md:h-5 lg:h-6" />
            <Skeleton className="w-28 h-4 md:h-5 lg:h-6" />
          </div>
          {/* 정규 리그 성적 */}
          <div className="flex flex-col gap-1">
            <Skeleton className="w-full h-4 md:h-5 lg:h-6" />
            <Skeleton className="w-full h-4 md:h-5 lg:h-6" />
            <Skeleton className="w-full h-4 md:h-5 lg:h-6" />
            <Skeleton className="w-full h-4 md:h-5 lg:h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
export { PlayerProfileSkeleton };
