import { Card, CardContent } from '@/components/ui';
import TeamInfo from '@/features/common/TeamInfo';
import { getMonthSchedule } from '@/features/game/apis/matchSchedule';
import { GameSchedule } from '@/features/game/components/calender/MatchCalendar';
import { useMatchStore } from '@/store/useMatchStore';
import { format, parse } from 'date-fns';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';

const MatchInfoCarousel = () => {
  const [matchData, setMatchData] = useState<GameSchedule[]>([]);
  const { currentMonth } = useMatchStore();

  const formatDate = (date: string): string => {
    return format(parse(date, 'yyyyMMdd', new Date()), 'yyyy.MM.dd');
  };

  useEffect(() => {
    const fetchMatchSchedule = async () => {
      let yearMonth = format(currentMonth, 'yyyyMM');
      let retries = 12; // 최대 12번 호출 (1년)
      let allMatches: GameSchedule[] = [];

      while (retries > 0) {
        const data: GameSchedule[] = await getMonthSchedule(yearMonth);

        if (data.length) {
          allMatches = [...allMatches, ...data];
          break; // 데이터가 있으면 반복 중지
        }

        // 이전 달로 이동
        const currentDate = new Date(
          parseInt(yearMonth.slice(0, 4)), // 연도
          parseInt(yearMonth.slice(4, 6)) - 1, // 월
          1 // 첫 번째 날
        );
        currentDate.setMonth(currentDate.getMonth() - 1);
        yearMonth = format(currentDate, 'yyyyMM');
        retries -= 1;
      }

      setMatchData(allMatches);
    };

    fetchMatchSchedule();
  }, [currentMonth]);

  // 최근 경기 이후 로직
  const today = new Date();
  const hasUpcomingGames = matchData.some(
    (game) => parse(game.gameDate.toString(), 'yyyyMMdd', new Date()) >= today
  );

  return (
    <div className="w-full max-w-2xl min-w-full overflow:hidden">
      <Carousel className="relative max-w-full">
        <CarouselContent className="-ml-2">
          {matchData.map((data, index) => (
            <CarouselItem
              key={data.gameDate || index}
              className={
                'pl-1 md:basis-1/2 lg:basis-1/3 transition-transform duration-300 w-fit'
              }
            >
              <div className="p-1">
                <Card className="min-w-80 w-full rounded border-[#35383e] shadow-[#5b5f65]">
                  <CardContent className="flex flex-col gap-2 items-center justify-between p-5 bg-[#35383e]">
                    <div className="flex flex-col h-48 items-center justify-between p-2">
                      {/* 날짜 라벨 */}
                      <h4
                        className={`text-white px-6 py-1 rounded-full ${
                          data.outcome === '패' ? 'bg-wiz-red' : 'bg-wiz-black'
                        }`}
                      >
                        {formatDate(data.displayDate)}
                      </h4>

                      <div className="flex gap-6 items-center justify-center px-6">
                        {/* team1 */}
                        <TeamInfo
                          tabType="MatchScheduleTab"
                          teamName={data.home}
                          logoUrl={data.homeLogo || ''}
                          player={data.homeKey}
                          result={
                            data.homeScore > data.visitScore ? 'win' : 'lose'
                          }
                        />

                        {/* 스코어, 승패, 경기 정보 버튼 */}
                        <div className="flex flex-col items-center justify-center">
                          <h4 className="mb-4 font-normal text-xl leading-none text-wiz-white">
                            {data.homeScore} : {data.visitScore}
                          </h4>
                          <div className="flex gap-2">
                            <p className="mb-4 font-bold leading-none text-wiz-red">
                              {data.outcome}
                            </p>
                          </div>
                          <button
                            type="button"
                            className="bg-gray-400 text-white rounded-full hover:bg-gray-500 py-1 px-3 w-24"
                          >
                            경기 정보
                          </button>
                        </div>
                        {/* team2 */}
                        <TeamInfo
                          tabType="MatchScheduleTab"
                          teamName={data.visit}
                          logoUrl={data.visitLogo || ''}
                          player={data.visitKey}
                          result={
                            data.homeScore > data.visitScore ? 'lose' : 'win'
                          }
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}

          {!hasUpcomingGames && (
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 transition-transform duration-300 w-fit">
              <div className="p-1">
                <Card className="min-w-80 w-full rounded border-[#35383e] shadow-[#5b5f65]">
                  <CardContent className="flex flex-col gap-2 items-center justify-between p-5 bg-[#35383e]">
                    <div className="flex flex-col gap-5 h-48 items-center p-2">
                      <div className="top-0 w-full h-7 bg-wiz-black text-white p-1 rounded-2xl" />
                      <p className="mb-4 text-wiz-white">
                        예정된 경기가 없습니다.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-28px] top-1/2 -translate-y-1/2 z-30 bg-gray-600 text-white hover:bg-[#222] hover:text-wiz-white p-2 rounded-full" />
        <CarouselNext className="absolute right-[-24px] top-1/2 -translate-y-1/2 z-20 bg-gray-600 text-white hover:bg-[#222] hover:text-wiz-white p-2 rounded-full" />
      </Carousel>
    </div>
  );
};

export default MatchInfoCarousel;
