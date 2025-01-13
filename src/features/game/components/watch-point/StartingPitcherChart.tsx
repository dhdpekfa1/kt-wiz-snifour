import { cn } from '@/lib/utils';
import { GameScore, Pitcher } from '../../types/watch-point';

interface StartingPitcherChartProps {
  gameScore: GameScore;
  homePitcher: Pitcher;
  visitPitcher: Pitcher;
}

const calcRate = (home: string | number, visit: string | number) => {
  const homeStat = Number(home);
  const visitStat = Number(visit);

  const max =
    homeStat > 1 && visitStat > 1
      ? Math.ceil(Math.max(homeStat, visitStat) / 10) * 10
      : Math.max(homeStat, visitStat);

  return {
    home: `${(homeStat / max) * 100}%`,
    visit: `${(visitStat / max) * 100}%`,
  };
};

function StartingPitcherChart({
  gameScore,
  homePitcher,
  visitPitcher,
}: StartingPitcherChartProps) {
  const data = [
    {
      label: '평균자책점',
      ...calcRate(homePitcher.era, visitPitcher.era),
    },
    { label: '승률', ...calcRate(homePitcher.wra, visitPitcher.wra) },
    {
      label: '피안타',
      ...calcRate(homePitcher.hit, visitPitcher.hit),
    },
    {
      label: '피홈런',
      ...calcRate(homePitcher.hr, visitPitcher.hr),
    },
    {
      label: '볼넷',
      ...calcRate(homePitcher.bb, visitPitcher.bb),
    },
    {
      label: '사구',
      ...calcRate(homePitcher.hp, visitPitcher.hp),
    },
    {
      label: '삼진',
      ...calcRate(homePitcher.kk, visitPitcher.kk),
    },
    {
      label: '실점',
      ...calcRate(homePitcher.r, visitPitcher.r),
    },
    {
      label: '자책점',
      ...calcRate(homePitcher.er, visitPitcher.er),
    },
  ];

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-center justify-center">
        <img src={gameScore.homeLogo} alt={gameScore.home} />
        <span>{homePitcher.playerName}</span>
      </div>
      <div className="flex flex-col items-center gap-2 py-6">
        {data.map((stat) => (
          <div
            className="w-[36rem] flex items-center justify-center gap-2"
            key={stat.label}
          >
            <div className="w-[15rem] flex items-center justify-end">
              <div
                className={cn(
                  'h-4 rounded-l-full',
                  gameScore.homeKey === 'KT' ? 'bg-wiz-red' : 'bg-gray-400'
                )}
                style={{
                  width: stat.home,
                }}
              />
            </div>
            <p className="w-24 text-center font-semibold">{stat.label}</p>
            <div className="w-[15rem] flex items-center">
              <div
                className={cn(
                  'h-4 rounded-r-full',
                  gameScore.visitKey === 'KT' ? 'bg-wiz-red' : 'bg-gray-400'
                )}
                style={{
                  width: stat.visit,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src={gameScore.visitLogo} alt={gameScore.visit} />
        <span>{visitPitcher.playerName}</span>
      </div>
    </div>
  );
}

export { StartingPitcherChart };
