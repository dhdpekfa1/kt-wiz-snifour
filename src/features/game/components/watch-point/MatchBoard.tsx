import TeamInfo, { type TeamData } from '@/features/common/TeamInfo';
import type { ReactNode } from 'react';
import { IconLeft, IconRight } from 'react-day-picker';

interface MatchBoardProps {
  team1Data: TeamData;
  team2Data: TeamData;
  matchDate: string | undefined;
  matchTime: string | undefined;
  stadium: string | undefined;
  gameTable: ReactNode;
  // leftEvent: MouseEventHandler<HTMLButtonElement>; // 왼쪽 버튼 클릭 핸들러
  // rightEvent: MouseEventHandler<HTMLButtonElement>; // 오른쪽 버튼 클릭 핸들러
}

const MatchBoard = ({
  team1Data,
  team2Data,
  matchDate,
  matchTime,
  stadium,
  gameTable,
}: MatchBoardProps) => {
  console.log(matchDate);
  return (
    <div className="w-full flex items-center justify-between px-8 py-6 gap-4 bg-wiz-white bg-opacity-10 rounded overflow-x-scroll">
      {/* team1 */}
      <TeamInfo {...team1Data} />

      {/* 날짜 헤더 */}
      <div>
        <div>
          <div className="flex justify-center items-center gap-10 text-white px-4 py-4">
            <button
              //onClick={() => onRouteChange}
              type="button"
              className="flex items-center justify-center text-lg font-semibold text-white  bg-wiz-white bg-opacity-30 w-8 h-8 md:w-10 md:h-10 rounded hover:bg-wiz-white hover:bg-opacity-20"
            >
              <IconLeft className="w-2/5 h-auto" />
            </button>
            <div className="relative flex flex-col items-center gap-1">
              <span className="text-lg md:text-xl lg:text-2xl font-semibold">
                {matchDate ? matchDate : '정보 없음'}
              </span>
              <span className="text-center text-wiz-white text-opacity-50 text-sm md:text-md lg:text-lg">
                {matchTime} | {stadium}
              </span>
            </div>
            <button
              type="button"
              //onClick={() => onRouteChange}
              className="flex items-center justify-center text-lg font-semibold text-white  bg-wiz-white bg-opacity-30 w-8 h-8 md:w-10 md:h-10 rounded hover:bg-wiz-white hover:bg-opacity-20"
            >
              <IconRight className="w-2/5 h-auto" />
            </button>
          </div>
        </div>

        {/* 경기 테이블 */}
        {gameTable}
      </div>
      {/* team2 */}
      <TeamInfo {...team2Data} />
    </div>
  );
};

export { MatchBoard };
