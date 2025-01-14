import { SubTitle } from '@/features/common';
import { OverallBatterRank, OverallPitcherRank } from '@/features/common';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

type PitcherPlayer = OverallPitcherRank;
type BatterPlayer = OverallBatterRank;
type Player = PitcherPlayer | BatterPlayer;

interface RankingCardProps {
  title: string;
  ranking: PitcherPlayer[] | BatterPlayer[];
  position: 'pitcher' | 'batter';
  indicator: 'era' | 'w' | 'hra' | 'hr';
  loading?: boolean;
}

function RankingCard({
  title,
  ranking,
  position,
  indicator,
  loading = false,
}: RankingCardProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(
    ranking.length ? ranking[0] : null
  );

  useEffect(() => {
    if (ranking.length > 0) {
      setSelectedPlayer(ranking[0]);
    }
  }, [ranking[0]]);

  if (!loading && !ranking.length) {
    return <div>데이터가 없습니다.</div>;
  }

  const handleSelectPlayer = (player: Player) => {
    setSelectedPlayer(player);
  };

  return (
    <div
      className={cn(
        'flex flex-col items-center',
        'md:p-4 md:flex-row md:gap-8',
        'lg:gap-4'
      )}
    >
      <div className="w-1/2">
        {loading ? (
          <Skeleton
            className="w-full aspect-square rounded-xl"
            baseColor="#d1d5db"
          />
        ) : (
          <img
            src={selectedPlayer?.playerPrvwImg}
            alt={selectedPlayer?.playerName}
            className={cn('rounded-xl w-full aspect-square object-cover', '')}
          />
        )}
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col gap-2 mt-4">
        <SubTitle title={title} className={cn('')} />
        <ol className="text-black flex flex-col justify-center">
          {loading ? (
            <Skeleton className="h-8 md:h-10 my-2" count={3} />
          ) : (
            ranking.map((player, index) => (
              <li
                key={player.pcode}
                onClick={() => handleSelectPlayer(player)}
                onKeyDown={() => handleSelectPlayer(player)}
                className={cn(
                  'bg-white mt-2 px-2 py-1 rounded shadow-sm flex items-center justify-between transition-transform duration-300 cursor-pointer hover:scale-105 text-sm',
                  'md:px-4 md:py-2 md:text-base md:mt-4',
                  player.pcode === selectedPlayer?.pcode &&
                    'bg-wiz-red text-white font-bold scale-105'
                )}
              >
                <div className="flex items-center gap-4">
                  <p className="flex items-center">{index + 1}위</p>
                  <p>{player.playerName}</p>
                </div>
                <p>
                  {position === 'pitcher' &&
                    (indicator === 'era' || indicator === 'w') &&
                    (player as PitcherPlayer)[indicator]}
                  {position === 'batter' &&
                    (indicator === 'hra' || indicator === 'hr') &&
                    (player as BatterPlayer)[indicator]}
                </p>
              </li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}

export { RankingCard };
