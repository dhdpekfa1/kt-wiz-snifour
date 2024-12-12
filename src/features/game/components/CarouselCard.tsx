import { Card, CardContent, CarouselItem } from '@/components/ui';
import TeamInfo from '@/features/common/TeamInfo';
import { format, isValid, parse } from 'date-fns';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import type { GameSchedule } from '../types';

const CarouselCard = ({ data }: { data: GameSchedule | null }) => {
  const navigate = useNavigate();

  const formatDate = useCallback((date: string): string => {
    const parsedDate = parse(date, 'yyyyMMdd', new Date());
    return isValid(parsedDate)
      ? format(parsedDate, 'yyyy.MM.dd')
      : '날짜 정보 없음';
  }, []);

  const handleGameInfoClick = () => {
    if (data) {
      const gameDate = data.gameDate.toString();
      if (gameDate.includes('202410')) {
        const updateGameDate = gameDate.replace('2024', '3333');
        const gmKey = `${updateGameDate}${data.homeKey}${data.visitKey}0`;
        navigate(`/game/regular/boxscore/${gameDate}/${gmKey}`);
      } else {
        const gameKey = `${gameDate}${data.homeKey}${data.visitKey}0`; //gmKey 생성로직
        navigate(`/game/regular/boxscore/${gameDate}/${gameKey}`);
      }
    }
  };

  return (
    <CarouselItem
      className={
        'pl-1 md:basis-1/2 lg:basis-1/3 transition-transform duration-300 w-fit'
      }
    >
      <div className="p-1">
        <Card className="min-w-80 w-full rounded border-[#35383e] shadow-[#5b5f65]">
          <CardContent className="flex flex-col gap-2 items-center justify-between p-5 bg-[#35383e]">
            {data ? (
              <div className="flex flex-col h-48 items-center justify-between p-2">
                {/* 날짜 라벨 */}
                <h4
                  className={`text-white px-6 py-1 rounded-full ${
                    data.outcome === '패' ? 'bg-wiz-red' : 'bg-wiz-black'
                  }`}
                >
                  {data.displayDate
                    ? formatDate(data.displayDate)
                    : '예정된 경기가 없습니다.'}
                </h4>

                <div className="flex gap-6 items-center justify-center px-6">
                  {/* team1 */}
                  <TeamInfo
                    tabType="MatchScheduleTab"
                    teamName={data.home}
                    logoUrl={data.homeLogo || ''}
                    player={data.homeKey}
                    result={data.homeScore > data.visitScore ? 'win' : 'lose'}
                  />

                  {/* 스코어, 승패, 경기 정보 버튼 */}
                  <div className="flex flex-col items-center justify-center">
                    <h4 className="mb-4 font-normal text-3xl leading-none text-wiz-white">
                      {data.homeScore} : {data.visitScore}
                    </h4>
                    <p className="mb-4 text-lg leading-none text-wiz-red">
                      {data.outcome}
                    </p>
                    <button
                      type="button"
                      className="bg-gray-400 text-white rounded-full hover:bg-gray-500 py-1 px-3 w-24"
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
                    player={data.visitKey}
                    result={data.homeScore > data.visitScore ? 'lose' : 'win'}
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-5 h-48 items-center p-2">
                <div className="top-0 w-full h-7 bg-wiz-black text-white p-1 rounded-2xl" />
                <p className="mb-4 text-wiz-white">예정된 경기가 없습니다.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};

export { CarouselCard };
