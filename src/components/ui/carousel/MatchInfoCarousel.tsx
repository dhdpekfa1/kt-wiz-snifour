import { Card, CardContent } from '@/components/ui';
import TeamInfo from '@/features/common/TeamInfo';
import { getMonthSchedule } from '@/features/game/apis/matchSchedule';
import { GameSchedule } from '@/features/game/components/calender/MatchCalendar';
import { useMatchStore } from '@/store/useMatchStore';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';

const matchMockData = [
  {
    date: '2024.10.09',
    team1: 'LG 트윈스',
    team1_logo: '/assets/emblems/lgtwins.svg',
    team1_player: '백승현',
    team2: 'KT 위즈',
    team2_logo: '/assets/emblems/ktwiz.svg',
    team2_player: '박영현',
    score: '5:6',
    matchResult: '승',
  },
  {
    date: '2024.10.11',
    team1: 'KT 위즈',
    team1_logo: '/assets/emblems/ktwiz.svg',
    team1_player: '엄상백',
    team2: '키움',
    team2_logo: '/assets/emblems/kiwoom.svg',
    team2_player: '임찬구',
    score: '1:4',
    matchResult: '패',
  },
  {
    date: '',
    team1: '',
    team2: '',
    team1_player: '',
    team2_player: '',
    score: '',
    matchResult: '',
  },
];

const MatchInfoCarousel = () => {
  const [matchData, setMatchData] = useState<GameSchedule[]>();
  const { currentMonth } = useMatchStore();

  useEffect(() => {
    const fetchMatchSchedule = async () => {
      const yearMonth = format(currentMonth, 'yyyyMM');

      const data: GameSchedule[] = await getMonthSchedule(yearMonth);
      setMatchData(data);
    };
    fetchMatchSchedule();
  }, [currentMonth]);

  console.log('matchData ==> ', matchData);
  return (
    <div className="w-full max-w-2xl min-w-full overflow:hidden">
      <Carousel className="relative max-w-full">
        <CarouselContent className="-ml-2">
          {matchMockData.map((data) => (
            <CarouselItem
              key={data.date}
              className={
                'pl-1 md:basis-1/2 lg:basis-1/3 transition-transform duration-300 w-fit'
              }
            >
              <div className="p-1">
                <Card className="min-w-80 w-full rounded border-[#35383e] shadow-[#5b5f65]">
                  <CardContent className="flex flex-col gap-2 items-center justify-between p-5 bg-[#35383e]">
                    {data.date ? (
                      <div className="flex flex-col h-48 items-center justify-between p-2">
                        {/* 날짜 라벨 */}
                        <h4 className="bg-wiz-red text-white px-6 py-1 rounded-full">
                          {data.date}
                        </h4>

                        <div className="flex gap-6 items-center justify-center px-6">
                          {/* team1 */}
                          <TeamInfo
                            tabType="MatchScheduleTab"
                            teamName={data.team1}
                            logoUrl={data.team1_logo || ''}
                            player={data.team1_player}
                            result={'lose'}
                          />

                          {/* 스코어, 승패, 경기 정보 버튼 */}
                          <div className="flex flex-col items-center justify-center">
                            <h4 className="mb-4 font-normal text-xl leading-none text-wiz-white">
                              {data.score}
                            </h4>
                            <div className="flex gap-2">
                              <p className="mb-4 font-bold leading-none text-wiz-red">
                                {data.matchResult}
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
                            teamName={data.team2}
                            logoUrl={data.team2_logo || ''}
                            player={data.team2_player}
                            result={'win'}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-5 h-48 items-center p-2">
                        <div className="top-0 w-full h-7 bg-wiz-black text-white p-1 rounded-2xl" />
                        <p className="mb-4 text-wiz-white">
                          예정된 경기가 없습니다.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-28px] top-1/2 -translate-y-1/2 z-30 bg-gray-600 text-white  hover:bg-[#222] hover:text-wiz-white p-2 rounded-full" />
        <CarouselNext className="absolute right-[-24px] top-1/2 -translate-y-1/2 z-20 bg-gray-600 text-white  hover:bg-[#222] hover:text-wiz-white p-2 rounded-full" />
      </Carousel>
    </div>
  );
};

export default MatchInfoCarousel;
