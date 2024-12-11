import { useState } from 'react';

import SubTitle from '@/features/common/SubTitle';
import { PitcherERA, PitcherWins } from '@/features/common/types/Pitchers';
import { cn } from '@/lib/utils';

type Player = PitcherERA | PitcherWins;

interface RankingCardProps {
  title: string;
  ranking: Player[];
}

function RankingCard({ title, ranking }: RankingCardProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<Player>(ranking[0]);

  const handleSelectPlayer = (player: Player) => {
    setSelectedPlayer(player);
  };

  return (
    <div className="p-4 flex items-center gap-4">
      <img
        src={selectedPlayer.playerPrvwImg}
        alt={selectedPlayer.playerName}
        className="rounded-xl"
      />
      <div className="w-full h-full flex flex-col justify-between py-8">
        <SubTitle title={title} className="text-black mb-2" />
        <ol className="text-black">
          {ranking.map((player, index) => (
            <li
              key={player.pcode}
              onClick={() => handleSelectPlayer(player)}
              onKeyDown={() => handleSelectPlayer(player)}
              className={cn(
                'bg-white mt-4 px-4 py-2 rounded shadow-sm flex items-center justify-between transition-transform duration-300',
                player.pcode === selectedPlayer.pcode &&
                  'bg-wiz-red text-white font-bold scale-105'
              )}
            >
              <div className="flex items-center gap-4">
                <p className="flex items-center">{index + 1}위</p>
                <p>{player.playerName}</p>
              </div>
              <p>{player.era}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export { RankingCard };
