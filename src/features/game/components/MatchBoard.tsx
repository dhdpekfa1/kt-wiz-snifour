import TeamInfo, { type TeamData } from '@/features/common/TeamInfo';
import type { ReactNode } from 'react';
import { IconLeft, IconRight } from 'react-day-picker';

interface MatchBoardProps {
  team1Data: TeamData;
  team2Data: TeamData;
  matchDate: number;
  matchTime: string;
  stadium: string;
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
  //
}: MatchBoardProps) => {
  return (
    <div className="w-full flex items-center justify-between px-8 py-6 gap-4 bg-[#35383e] rounded">
      {/* team1 */}
      <TeamInfo {...team1Data} />

      {/* 날짜 헤더 */}
      <div>
        <div>
          <div className="flex justify-center items-center gap-10 text-white px-4 py-4">
            <button
              //onClick={() => onRouteChange}
              type="button"
              className="flex items-center justify-center text-lg font-semibold text-white bg-slate-500 w-10 h-10 rounded hover:bg-slate-400"
            >
              <IconLeft />
            </button>
            <div className="relative flex flex-col items-center gap-1">
              <span className="text-2xl font-semibold">{matchDate}</span>
              <span className="text-center text-[#717781]">
                {matchTime} | {stadium}
                {/* TODO: boxscore ? 관중 수 : '' */}
              </span>
            </div>
            <button
              type="button"
              //onClick={() => onRouteChange}
              className="flex items-center justify-center text-lg font-bold text-white bg-slate-500 w-10 h-10 rounded hover:bg-slate-400"
            >
              <IconRight />
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

export default MatchBoard;
