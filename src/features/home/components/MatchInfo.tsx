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
import { findBroadCast, formatDate, isDateWithinWeek } from '@/lib/utils';
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
    <div className="w-full h-[500px] flex items-start rounded-3xl overflow-hidden bg-white">
      <Card className="w-[75%] h-full px-8 pb-8 flex flex-col items-center border-none shadow-none">
        <CardHeader className="w-full flex flex-row items-center justify-between">
          <ChevronLeft
            className={`cursor-pointer ${matchIndex === 0 && 'invisible'}`}
            onClick={handlePrevDay}
          />
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-semibold text-lg">
              {formatDate(matchOfToday.displayDate)}
            </h3>
            <p className="text-gray-600 text-sm">
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

        <CardContent className="w-[75%] flex flex-col items-center py-12">
          {/* 경기 정보 */}
          <div className="w-full flex items-center justify-center">
            <div className="flex-1 flex items-center justify-between gap-16">
              <div className="w-40 h-40">
                <img src={matchOfToday.homeLogo} alt={matchOfToday.homeKey} />
              </div>
              <div className="flex flex-col items-center justify-end">
                <div className="text-6xl font-bold mt-8">
                  {matchOfToday.homeScore} : {matchOfToday.visitScore}
                </div>
                <button
                  type="button"
                  className="flex justify-center items-center gap-2 bg-wiz-red rounded px-4 py-1 mt-8 text-white"
                >
                  <Link
                    to={`/game/regular/boxscore/${matchOfToday.gameDate}/${matchOfToday.gmkey}`}
                    className="flex items-center justify-center"
                  >
                    경기정보 <ChevronRight />
                  </Link>
                </button>
              </div>
              <div className="w-40 h-40">
                <img src={matchOfToday.visitLogo} alt={matchOfToday.visitKey} />
              </div>
            </div>
          </div>

          {/* 배너 */}
          <div className="w-full flex items-center justify-center gap-4 mt-16">
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex-1 h-16 bg-wiz-red flex items-center justify-center text-white text-lg rounded cursor-pointer">
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
                        <p className="bg-wiz-black w-14 text-center text-white px-2 py-1 rounded text-xs">
                          {br.platform}
                        </p>
                        <p className="text-sm">{br.channels}</p>
                      </div>
                    ) : null
                  )}
                </div>
              </PopoverContent>
            </Popover>
            <Link
              to="/wizpark/parking"
              className="flex-1 h-16 flex items-center justify-center overflow-hidden text-lg rounded relative cursor-pointer bg-[url('/assets/parking.png')] bg-cover after:content-[''] after:w-full after:h-full after:bg-black after:bg-opacity-30 after:absolute after:top-0 after:left-0"
            >
              <p className="text-center text-white z-10">사전 주차 예약</p>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* 사이드 */}
      <div className="w-[25%] h-full border-l">
        <TeamRanking />
        <RecentMatches matches={matchesOfWeek} />
      </div>
    </div>
  );
}

export { MatchInfo };
