import { cn, formatDate } from '@/lib/utils';
import { MatchInfoType } from '../types';

interface RecentMatchesProps {
  matches: MatchInfoType[];
}

function RecentMatches({ matches }: RecentMatchesProps) {
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
        {matches.map((match) => (
          <li key={match.gmkey} className="w-full p-2 border-b ">
            <p className={cn('font-semibold mb-1 text-[0.6rem]', 'lg:text-xs')}>
              {formatDate(match.displayDate)}
            </p>
            <div className="flex items-center justify-between">
              <div className="w-12 h-12">
                <img src={match.homeLogo} alt={match.homeKey} />
              </div>
              <div className="font-bold text-2xl">
                {match.homeScore} : {match.visitScore}
              </div>
              <div className="w-12 h-12">
                <img src={match.visitLogo} alt={match.visitKey} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentMatches;
