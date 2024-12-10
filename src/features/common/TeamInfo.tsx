export interface TeamData {
  teamName: string;
  logoUrl: string;
  result?: number | 'lose' | 'win';
  spectators?: number;
  stadium?: '홈' | '원정'; // BoxScoreTab에서만 사용
  player?: string; // MatchScheduleTab에서만 사용
  tabType: 'MatchBoard' | 'MatchScheduleTab';
}

const TeamInfo = ({
  teamName,
  logoUrl,
  result,
  stadium,
  player,
  tabType,
}: TeamData) => {
  const isMatchBoard = tabType === 'MatchBoard';

  return (
    <div
      className={`flex flex-col items-center ${isMatchBoard ? '' : 'gap-4'} `}
    >
      <img
        src={logoUrl}
        alt="team logo"
        className={`${isMatchBoard ? 'w-28 h-28' : 'w-26 h-26'}`}
      />
      {isMatchBoard ? (
        <div>
          <p className="text-center text-2xl text-white font-semibold">
            {result && result}
          </p>
          <p
            className={`${
              isMatchBoard
                ? 'text-[#717781] text-center'
                : 'text-sm font-medium leading-none text-white'
            }`}
          >
            {teamName} ({isMatchBoard && stadium ? stadium : `관중: ${2000}명`})
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <p
            className={`${
              isMatchBoard
                ? 'text-[#717781] text-center'
                : 'text-sm font-medium leading-none text-white'
            }`}
          >
            {teamName}
            {isMatchBoard && stadium ? stadium : ''}
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
