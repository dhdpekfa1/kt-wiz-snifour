import { useMemo } from 'react';
import { cn, formatDate, isDateWithinWeek } from '@/lib/utils';
import { GameSchedule } from '@/features/game/types/match-schedule';
import { endOfWeek, startOfWeek, parse } from 'date-fns';
import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router';

interface RecentMatchesProps {
  match: GameSchedule[];
  matchOfToday: GameSchedule;
  loading: boolean;
}

function RecentMatches({ match, matchOfToday, loading }: RecentMatchesProps) {
  const navigate = useNavigate();
  const matchesOfWeek = useMemo(() => {
    if (match.length === 0 || !matchOfToday?.displayDate) {
      return []; // 데이터가 없을 경우 빈 배열 반환
    }

    const dateOfToday = parse(matchOfToday.displayDate, 'yyyyMMdd', new Date()); // 날짜 문자열을 Date 객체로 변환
    const startOfTheWeek = startOfWeek(dateOfToday, { weekStartsOn: 1 });
    const endOfTheWeek = endOfWeek(dateOfToday, { weekStartsOn: 1 });

    return match
      .filter((matchData) => {
        const date = parse(matchData.displayDate, 'yyyyMMdd', new Date()); // 날짜 문자열을 Date 객체로 변환
        return (
          matchData.gmkey !== matchOfToday.gmkey &&
          isDateWithinWeek(date, {
            startDate: startOfTheWeek,
            endDate: endOfTheWeek,
          })
        );
      })
      .reverse(); // 최신순으로 정렬하기 위해 reverse
  }, [match, matchOfToday]);

  return (
    <div className="w-full h-full md:h-[75%]">
      <h3 className={cn('h-6 px-2 py-1 font-bold text-sm', 'lg:text-base')}>
        금주의 다른 경기
      </h3>
      <ul
        className={cn(
          'h-[calc(100%-24px)] flex flex-col items-center overflow-y-scroll'
        )}
      >
        {matchesOfWeek.map((match) => (
          <li key={match.gmkey} className="w-full p-2 border-b ">
            {loading ? (
              <Skeleton className="w-full h-16" baseColor="#d1d5db" />
            ) : (
              <div
                className="cursor-pointer"
                onClick={() =>
                  navigate(
                    `/game/regular/boxscore/${match.gameDate}/${match.gmkey}`
                  )
                }
                onKeyDown={() =>
                  navigate(
                    `/game/regular/boxscore/${match.gameDate}/${match.gmkey}`
                  )
                }
              >
                <p
                  className={cn(
                    'font-semibold mb-1 text-[0.6rem]',
                    'lg:text-xs'
                  )}
                >
                  {formatDate(match.displayDate)}
                </p>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12">
                    <img src={match.homeLogo} alt={match.homeKey} />
                  </div>
                  <div className="font-bold text-2xl">
                    {match.outcome === '취'
                      ? '취소'
                      : `${match.homeScore} : ${match.visitScore}`}
                  </div>
                  <div className="w-12 h-12">
                    <img src={match.visitLogo} alt={match.visitKey} />
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentMatches;
