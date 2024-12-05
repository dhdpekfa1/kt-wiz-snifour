export interface TeamData {
  teamName: string;
  logoUrl: string;
  result?: number | 'lose' | 'win';
  spectators?: number;
  stadium?: '홈' | '원정'; // BoxScoreTab에서만 사용
  player?: string; // MatchScheduleTab에서만 사용
  tabType: 'BoxScoreTab' | 'MatchScheduleTab'; // 비슷한 양식 사용 시 사용 컴포넌트 이름 추가
}

const TeamInfo = ({
  teamName,
  logoUrl,
  result,
  stadium,
  player,
  tabType,
}: TeamData) => {
  const isBoxScoreTab = tabType === 'BoxScoreTab';

  return (
    <div
      className={`flex flex-col items-center ${isBoxScoreTab ? '' : 'gap-4'} `}
    >
      <img
        src={logoUrl}
        alt="team logo"
        className={`${isBoxScoreTab ? 'w-28 h-28' : 'w-20 h-20'}`}
      />
      {isBoxScoreTab ? (
        <div>
          <p className="text-center text-2xl text-white font-semibold">
            {result && result}
          </p>
          <p
            className={`${
              isBoxScoreTab
                ? 'text-[#717781] text-center'
                : 'text-sm font-medium leading-none text-white'
            }`}
          >
            {teamName} ({isBoxScoreTab && stadium ? stadium : `관중: ${2000}명`}
            )
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
            {isBoxScoreTab && stadium ? stadium : ''}
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
