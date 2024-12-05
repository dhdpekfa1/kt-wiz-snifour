import React from 'react';

type TeamInfoProps = {
  teamName: string;
  logoUrl: string;
  result: number | 'lose' | 'win';
  stadium?: '홈' | '원정'; // BoxScoreTab에서만 사용
  player?: string; // MatchScheduleTab에서만 사용
  tabType: 'BoxScoreTab' | 'MatchScheduleTab'; // 비슷한 양식 사용 시 사용 컴포넌트 이름 추가
};

const TeamInfo: React.FC<TeamInfoProps> = ({
  teamName,
  logoUrl,
  result,
  stadium,
  player,
  tabType,
}) => {
  const isBoxScoreTab = tabType === 'BoxScoreTab';

  return (
    <div
      className={`flex flex-col ${
        isBoxScoreTab ? 'gap-2' : 'gap-4'
      } items-center`}
    >
      <img
        src={logoUrl}
        alt="team logo"
        className={`${isBoxScoreTab ? 'w-20 h-20' : 'w-14 h-14'}`}
      />
      {isBoxScoreTab ? (
        <div>
          <p className="text-center text-2xl text-white font-semibold">
            {result}
          </p>
          <p
            className={`${
              isBoxScoreTab
                ? 'text-[#717781] text-center'
                : 'text-sm font-medium leading-none text-white'
            }`}
          >
            {teamName}
            {isBoxScoreTab && stadium ? `(${stadium})` : ''}
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <p
            className={`${
              isBoxScoreTab
                ? 'text-[#717781] text-center'
                : 'text-sm font-medium leading-none text-white'
            }`}
          >
            {teamName}
            {isBoxScoreTab && stadium ? `(${stadium})` : ''}
          </p>
          <p className="mb-4 text-sm text-[#717781] leading-none">
            {result === 'lose' ? 'L' : 'W'}: {player}
          </p>
        </div>
      )}
    </div>
  );
};

export default TeamInfo;
