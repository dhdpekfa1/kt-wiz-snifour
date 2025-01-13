import { cn } from '@/lib/utils';
import { GameScore, Pitcher } from '../../types/watch-point';
import { getWatchPointChartData } from '../../services/calc-rate-watchpoint.service';

interface StartingPitcherChartProps {
  gameScore: GameScore;
  homePitcher: Pitcher;
  visitPitcher: Pitcher;
}

function StartingPitcherChart({
  gameScore,
  homePitcher,
  visitPitcher,
}: StartingPitcherChartProps) {
  if (!homePitcher || !visitPitcher) {
    return <div>두 팀의 데이터가 필요합니다.</div>;
  }

  const data = getWatchPointChartData(homePitcher, visitPitcher);

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
                  stat.win === 'h' ? 'bg-wiz-red' : 'bg-neutral-600'
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
                  stat.win === 'v' ? 'bg-wiz-red' : 'bg-neutral-600'
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
