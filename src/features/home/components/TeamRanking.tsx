import { cn } from '@/lib/utils';
import { useGetWizRank } from '../apis/mainApi.query';

function TeamRanking() {
  const { data } = useGetWizRank();

  return (
    <div
      className={cn(
        'w-[40%] flex flex-col gap-2 items-end bg-wiz-red text-white px-2 py-2',
        'md:w-full md:h-[25%] md:justify-between md:flex-row md:gap-8 md:pr-4 md:py-4'
      )}
    >
      <div className="flex flex-col items-center justify-center relative">
        <img
          src="/assets/main/img-score@2x.png"
          alt=""
          className={cn(
            'w-20',
            'md:w-12 md:translate-x-2 md:-translate-y-2',
            'lg:w-24 lg:translate-x-3 lg:-translate-y-3'
          )}
        />
        <div
          className={cn(
            'absolute bottom-0 right-0 px-1 bg-white text-wiz-red rounded-full font-extrabold text-[0.6rem]',
            'md:-right-2',
            'lg:text-base lg:px-2'
          )}
        >
          {data?.rankName}
        </div>
      </div>
      <div className={cn('flex flex-col items-end gap-1', 'lg:gap-4')}>
        <p
          className={cn('font-extrabold text-xs', 'md:text-xs', 'lg:text-2xl')}
        >
          {data?.wldName}
        </p>
        <div
          className={cn(
            'flex items-center gap-2 font-bold text-[0.4rem]',
            'lg:text-xs'
          )}
        >
          <p>총 {data?.game}경기</p>
          <p>승률 {data?.wra}</p>
        </div>
      </div>
    </div>
  );
}

export { TeamRanking };
