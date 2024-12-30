import axios from 'axios';
import { endOfWeek, parse, startOfWeek } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router';

import {
  Card,
  CardContent,
  CardHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui';
import { MatchInfoType } from '@/features/home/types';
import { cn, findBroadCast, formatDate, isDateWithinWeek } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RecentMatches from './RecentMatches';
import { TeamRanking } from './TeamRanking';

function MatchInfo() {
  const [matchOfMonth, setMatchOfMonth] = useState<MatchInfoType[]>([]);
  const [matchOfToday, setMatchOfToday] = useState<MatchInfoType>(
    {} as MatchInfoType
  );
  const [matchIndex, setMatchIndex] = useState<number>(0);
  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

  useEffect(() => {
    const getMatchOfMonth = async () => {
      try {
        const { data, status } = await axios.get(
          `${API_URL}/game/monthschedule?yearMonth=202410`
        );

        if (status === 200 && data) {
          const matches = data.data.list || [];
          setMatchOfMonth(matches);
          setMatchOfToday(matches[matches.length - 1]);
          setMatchIndex(matches.length - 1);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getMatchOfMonth();
  }, []);

  const broadcast = useMemo(() => {
    return findBroadCast(matchOfToday.broadcast);
  }, [matchOfToday]);

  const matchesOfWeek = useMemo(() => {
    if (matchOfMonth.length === 0 || !matchOfToday.displayDate) {
      return []; // 데이터가 없을 경우 빈 배열 반환
    }

    const dateOfToday = parse(matchOfToday.displayDate, 'yyyyMMdd', new Date()); // 날짜 문자열을 Date 객체로 변환
    const startOfTheWeek = startOfWeek(dateOfToday, { weekStartsOn: 1 });
    const endOfTheWeek = endOfWeek(dateOfToday, { weekStartsOn: 1 });

    return matchOfMonth
      .filter((match) => {
        const date = parse(match.displayDate, 'yyyyMMdd', new Date()); // 날짜 문자열을 Date 객체로 변환
        return (
          match.gmkey !== matchOfToday.gmkey &&
          isDateWithinWeek(date, {
            startDate: startOfTheWeek,
            endDate: endOfTheWeek,
          })
        );
      })
      .reverse(); // 최신순으로 정렬하기 위해 reverse
  }, [matchOfToday, matchOfMonth]);

  const handlePrevDay = () => {
    if (matchIndex === 0) return;

    setMatchOfToday(matchOfMonth[matchIndex - 1]);
    setMatchIndex((prev) => prev - 1);
  };

  const handleNextDay = () => {
    if (matchIndex === matchOfMonth.length - 1) return;

    setMatchOfToday(matchOfMonth[matchIndex + 1]);
    setMatchIndex((prev) => prev + 1);
  };

  return (
    <div
      className={cn(
        'w-full h-fit flex flex-col items-start rounded-3xl overflow-hidden bg-white',
        'md:h-96 md:flex-row',
        'lg:h-[500px]'
      )}
    >
      <Card
        className={cn(
          'w-full h-full px-2 pb-2 flex flex-col items-center border-none shadow-none',
          'md:w-[75%] md:px-4 md:pb-4',
          'lg:px-8 lg:pb-8'
        )}
      >
        {/* 경기 날짜 및 시간 */}
        <CardHeader className="w-full flex flex-row items-center justify-between">
          <ChevronLeft
            className={`cursor-pointer ${matchIndex === 0 && 'invisible'}`}
            onClick={handlePrevDay}
          />
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-semibold text-sm lg:text-lg">
              {formatDate(matchOfToday.displayDate)}
            </h3>
            <p className="text-gray-600 text-xs lg:text-sm">
              {matchOfToday.stadium} {matchOfToday.gtime}
            </p>
          </div>
          <ChevronRight
            className={`cursor-pointer ${
              matchIndex === matchOfMonth.length - 1 && 'invisible'
            }`}
            onClick={handleNextDay}
          />
        </CardHeader>

        {/* 경기 결과 */}
        <CardContent className="w-[75%] flex flex-col items-center py-4 lg:py-12">
          <div className="w-full flex items-center justify-center">
            <div className="flex-1 flex items-center justify-between lg:gap-16">
              <div className="w-20 h-20 lg:w-40 lg:h-40">
                <img src={matchOfToday.homeLogo} alt={matchOfToday.homeKey} />
              </div>
              <div className="w-32 flex flex-col items-center justify-end">
                <div className="font-bold text-3xl md:text-5xl mt-4 lg:text-6xl lg:mt-8">
                  {matchOfToday.homeScore} : {matchOfToday.visitScore}
                </div>
                <button
                  type="button"
                  className={cn(
                    'flex justify-center items-center gap-2 bg-wiz-red rounded px-2 mt-4 text-white',
                    'md:px-3 md:py-1',
                    'lg:px-4 lg:mt-8'
                  )}
                >
                  <Link
                    to={`/game/regular/boxscore/${matchOfToday.gameDate}/${matchOfToday.gmkey}`}
                    className="flex items-center justify-center text-[0.6rem] md:text-xs lg:text-base"
                  >
                    경기정보{' '}
                    <ChevronRight className={cn('w-4', 'md:w-4', 'lg:w-6')} />
                  </Link>
                </button>
              </div>
              <div className="w-20 h-20 lg:w-40 lg:h-40">
                <img src={matchOfToday.visitLogo} alt={matchOfToday.visitKey} />
              </div>
            </div>
          </div>

          {/* 배너 */}
          <div className="w-full flex items-center justify-center gap-4 mt-6 md:mt-16 lg:mt-16">
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex-1 h-8 bg-wiz-red flex items-center justify-center text-white rounded cursor-pointer text-xs lg:h-16 lg:text-lg ">
                  중계 안내
                </div>
              </PopoverTrigger>
              <PopoverContent className="bg-white w-fit">
                {/* 그 날의 중계정보*/}
                <div className="flex flex-col items-start gap-2">
                  {broadcast.map((br) =>
                    br.channels.length > 0 ? (
                      <div
                        key={br.platform}
                        className="flex items-center gap-2"
                      >
                        <p className="bg-wiz-black w-14 text-center text-white px-2 py-1 rounded text-[0.6rem] lg:text-xs">
                          {br.platform}
                        </p>
                        <p className="text-[0.6rem] lg:text-sm">
                          {br.channels}
                        </p>
                      </div>
                    ) : null
                  )}
                </div>
              </PopoverContent>
            </Popover>
            <Link
              to="/wizpark/parking"
              className={cn(
                "flex-1 h-8 flex items-center justify-center overflow-hidden text-xs rounded relative cursor-pointer bg-[url('/assets/parking.png')] bg-cover",
                "after:content-[''] after:w-full after:h-full after:bg-black after:bg-opacity-30 after:absolute after:top-0 after:left-0",
                'lg:h-16 lg:text-lg'
              )}
            >
              <p className="text-center text-white z-[1]">사전 주차 예약</p>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* 사이드 */}
      <div
        className={cn(
          'w-full h-40 flex',
          'md:w-[25%] md:border-l md:flex-col md:h-full'
        )}
      >
        <TeamRanking />
        <RecentMatches matches={matchesOfWeek} />
      </div>
    </div>
  );
}

export { MatchInfo };
