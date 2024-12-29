import { useState } from 'react';

import SubTitle from '@/features/common/SubTitle';
import { BatterHR, BatterHra } from '@/features/common/types/batters';
import { PitcherERA, PitcherWins } from '@/features/common/types/pitchers';
import { cn } from '@/lib/utils';

type PitcherPlayer = PitcherERA | PitcherWins;
type BatterPlayer = BatterHra | BatterHR;
type Player = PitcherPlayer | BatterPlayer;

interface RankingCardProps {
  title: string;
  ranking: PitcherPlayer[] | BatterPlayer[];
  position: 'pitcher' | 'batter';
  indicator: 'era' | 'w' | 'hra' | 'hr';
}

function RankingCard({
  title,
  ranking,
  position,
  indicator,
}: RankingCardProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<Player>(ranking[0]);

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
      <img
        src={selectedPlayer.playerPrvwImg}
        alt={selectedPlayer.playerName}
        className={cn('rounded-xl w-1/2', '')}
      />
      <div className="w-full h-full flex flex-col gap-2 mt-4">
        <SubTitle title={title} className={cn('')} />
        <ol className="text-black flex flex-col justify-center">
          {ranking.map((player, index) => (
            <li
              key={player.pcode}
              onClick={() => handleSelectPlayer(player)}
              onKeyDown={() => handleSelectPlayer(player)}
              className={cn(
                'bg-white mt-2 px-2 py-1 rounded shadow-sm flex items-center justify-between transition-transform duration-300 cursor-pointer hover:scale-105 text-sm',
                'md:px-4 md:py-2 md:text-base md:mt-4',
                player.pcode === selectedPlayer.pcode &&
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
          ))}
        </ol>
      </div>
    </div>
  );
}

export { RankingCard };
