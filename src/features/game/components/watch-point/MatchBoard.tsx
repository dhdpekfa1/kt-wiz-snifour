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
  crowd?: number;
  onDateChange: (direction: 'prev' | 'next') => void;
}

const MatchBoard = ({
  team1Data,
  team2Data,
  matchDate,
  matchTime,
  stadium,
  gameTable,
  crowd,
  onDateChange,
}: MatchBoardProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-between px-8 py-6 gap-4 bg-wiz-white bg-opacity-10 rounded overflow-hidden">
      {/* 날짜 헤더 */}
      <div className="flex justify-center items-center gap-6 md:gap-10 text-white px-4 py-4">
        <button
          type="button"
          onClick={() => onDateChange('prev')}
          className="flex items-center justify-center text-lg font-semibold text-white bg-wiz-white bg-opacity-30 w-8 h-8 md:w-10 md:h-10 rounded hover:bg-wiz-white hover:bg-opacity-20"
        >
          <IconLeft className="w-2/5 h-auto" />
        </button>
        <div className="relative flex flex-col items-center md:gap-1">
          <span className="text-lg md:text-xl lg:text-2xl font-semibold">
            {matchDate || '정보 없음'}
          </span>
          <span className="text-center text-wiz-white text-opacity-50 text-sm md:text-md lg:text-lg">
            {matchTime} | {stadium}
            {crowd && ` | 관중: ${crowd?.toLocaleString()}명`}
          </span>
        </div>
        <button
          type="button"
          onClick={() => onDateChange('next')}
          className="flex items-center justify-center text-lg font-semibold text-white bg-wiz-white bg-opacity-30 w-8 h-8 md:w-10 md:h-10 rounded hover:bg-wiz-white hover:bg-opacity-20"
        >
          <IconRight className="w-2/5 h-auto" />
        </button>
      </div>

      {/* MatchBoard 메인 콘텐츠 */}
      <div className="w-full">
        {/* 작은 화면 레이아웃 */}
        <div className="flex flex-col items-center justify-center gap-4 sm:hidden">
          <div className="flex flex-row items-center justify-between gap-6">
            {/* team1 */}
            <TeamInfo {...team1Data} />
            {/* team2 */}
            <TeamInfo {...team2Data} />
          </div>
          {/* 경기 테이블 */}
          <div className="w-full">{gameTable}</div>
        </div>

        {/* 큰 화면 레이아웃 */}
        <div className="hidden sm:flex items-center justify-between px-8 py-6 gap-4 rounded overflow-x-scroll">
          {/* team1 */}
          <TeamInfo {...team1Data} />
          {/* 경기 테이블 */}
          <div>{gameTable}</div>
          {/* team2 */}
          <TeamInfo {...team2Data} />
        </div>
      </div>
    </div>
  );
};

export { MatchBoard };
