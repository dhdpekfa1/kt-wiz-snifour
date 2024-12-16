import { formatDate } from '@/lib/utils';
import { MatchInfoType } from '../types';

interface RecentMatchesProps {
  matches: MatchInfoType[];
}

function RecentMatches({ matches }: RecentMatchesProps) {
  return (
    <div className="h-full">
      <h3 className="px-2 py-1 font-bold">금주의 다른 경기</h3>
      <ul className="h-[69%] flex flex-col items-center overflow-y-scroll">
        {matches.map((match) => (
          <li key={match.gmkey} className="w-full p-2 border-b ">
            <p className="font-semibold text-xs mb-1">
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
