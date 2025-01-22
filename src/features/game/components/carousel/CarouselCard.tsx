import { Card, CardContent, CarouselItem } from '@/components/ui';
import { TeamInfo } from '@/features/common';
import type { GameSchedule } from '@/features/game/types/match-schedule';
import { format, isValid, parse } from 'date-fns';
import { useCallback } from 'react';

const CarouselCard = ({ data }: { data: GameSchedule | null }) => {
  const formatDate = useCallback((date: string): string => {
    const parsedDate = parse(date, 'yyyyMMdd', new Date());
    return isValid(parsedDate)
      ? format(parsedDate, 'yyyy.MM.dd')
      : '날짜 정보 없음';
  }, []);

  const handleGameInfoClick = () => {
    if (data) {
      window.location.href = `/game/regular/boxscore/${data.gameDate.toString()}/${
        data.gmkey
      }`; //상위 컴포넌트 강제 리렌더링
    }
  };

  return (
    <CarouselItem
      className={
        'pl-1 md:basis-1/2 lg:basis-1/3 transition-transform duration-300 w-fit'
      }
    >
      <div className="p-1">
        <Card className="min-w-80 w-full rounded border-wiz-white border-opacity-10 shadow-wiz-white">
          <CardContent className="flex flex-col gap-2 items-center justify-between p-5 bg-wiz-white bg-opacity-10">
            {data ? (
              <div className="flex flex-col h-44 md:h-48 items-center justify-between p-2">
                {/* 날짜 라벨 */}
                <h4
                  className={`text-white px-6 py-1 rounded-full text-sm md:text-base ${
                    data.outcome === '패' ? 'bg-wiz-red' : 'bg-wiz-black'
                  }`}
                >
                  {data.displayDate
                    ? formatDate(data.displayDate)
                    : '예정된 경기가 없습니다.'}
                </h4>

                <div className="flex gap-3 items-center justify-center px-4 md:px-3">
                  {/* team1 */}
                  <TeamInfo
                    tabType="MatchScheduleTab"
                    teamName={data.home}
                    logoUrl={data.homeLogo || ''}
                    result={data.homeScore > data.visitScore ? 'win' : 'lose'}
                  />

                  {/* 스코어, 승패, 경기 정보 버튼 */}
                  <div className="flex flex-col items-center justify-center">
                    <h4 className="mb-4 font-normal text-2xl md:text-3xl leading-none text-wiz-white">
                      {data.homeScore} : {data.visitScore}
                    </h4>
                    <p className="mb-4 text-base md:text-lg leading-none text-wiz-red font-semibold">
                      {data.outcome}
                    </p>
                    <button
                      type="button"
                      className="bg-wiz-white bg-opacity-20 text-white rounded-full hover:bg-opacity-30 py-1 px-2 md:px-3 w-20 md:w-24 text-sm md:text-base"
                      onClick={handleGameInfoClick}
                    >
                      경기 정보
                    </button>
                  </div>
                  {/* team2 */}
                  <TeamInfo
                    tabType="MatchScheduleTab"
                    teamName={data.visit}
                    logoUrl={data.visitLogo || ''}
                    result={data.homeScore > data.visitScore ? 'lose' : 'win'}
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-5 h-44 md:h-48 items-center p-2">
                <div className="top-0 w-full h-7 bg-wiz-black text-white p-1 rounded-2xl" />
                <p className="mb-4 text-wiz-white text-xs md:text-sm lg:text-base">
                  예정된 경기가 없습니다.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};

export { CarouselCard };
