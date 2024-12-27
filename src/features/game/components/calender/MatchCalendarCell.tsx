import { GameSchedule } from '@/features/game/types/match-schedule';
import { format } from 'date-fns';

interface MatchCalendarCellProps {
  date: Date;
  ktMatchData: GameSchedule | undefined;
  allMatchData: GameSchedule[] | [];
  currentTab: 'ktWiz' | 'allLeague' | string;
}

const MatchCalendarCell = ({
  date,
  ktMatchData,
  allMatchData,
  currentTab,
}: MatchCalendarCellProps) => {
  const day = date.getDay();

  const getResultColor = (result: string) => {
    switch (result) {
      case '승':
        return 'bg-red-500';
      case '패':
        return 'bg-gray-700';
      case '무':
        return 'bg-gray-500';
      case '취':
        return 'border border-wiz-white border-rounded border-opacity-30';

      default:
        return '';
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-start gap-2">
      {/* 날짜 */}
      <div
        className={`absolute top-2 right-2 text-[10px] md:text-sm lg:text-base font-bold ${
          day === 0
            ? 'text-red-500'
            : day === 6
              ? 'text-blue-500'
              : 'text-wiz-white'
        }`}
      >
        {format(date, 'd')}
      </div>

      {ktMatchData && currentTab === 'ktWiz' && (
        <div
          key={ktMatchData.gmkey}
          className={`relative w-full h-full p-2 flex flex-col items-center justify-start gap-2 ${
            ktMatchData.stadium === '수원' ? 'bg-wiz-red bg-opacity-20' : ''
          }`}
        >
          {/* 경기 결과 */}
          <div
            className={`absolute left-1 md:top-2 md:left-2 text-[10px] md:text-xs text-wiz-white px-1 md:py-1 md:px-2 rounded ${getResultColor(
              ktMatchData.outcome
            )}`}
          >
            {ktMatchData.outcome}
          </div>

          {/* 팀 로고 */}
          <img
            src={
              ktMatchData.home === 'KT'
                ? ktMatchData.visitLogo
                : ktMatchData.homeLogo
            }
            alt="team logo"
            className="w-12 h-auto mt-6 md:w-20 md:my-6"
          />

          {/* 경기 정보 */}
          <span className="text-[10px] md:text-sm text-wiz-white">
            {ktMatchData.gtime} {ktMatchData.stadium}
          </span>
          <div className="text-wiz-white text-opacity-40 text-[8px] md:text-sm hidden md:inline">
            {ktMatchData.broadcast}
          </div>
        </div>
      )}

      {/* 전체 리그 */}
      {allMatchData && currentTab === 'allLeague' && (
        <div className="flex flex-col gap-2 items-center mt-6">
          {allMatchData.map((data) => {
            const isKTGame = data.home === 'KT' || data.visit === 'KT';
            return (
              <p
                key={data.gmkey}
                className={`${
                  isKTGame ? 'text-wiz-red' : 'text-wiz-white'
                } text-[8px] md:text-[10px] lg:text-base`}
              >
                {data.home} {data.homeScore || '-'} : {data.visit}
                {data.visitScore || '-'}{' '}
                <span className="hidden md:inline">[{data.stadium}]</span>
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export { MatchCalendarCell };
