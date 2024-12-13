import { Coach, Player } from '@/features/player/types/player';
import { useNavigate } from 'react-router';

interface PlayerListProps {
  playerList: (Coach | Player)[];
  endpoint: string;
}

const PlayerList = ({ playerList, endpoint }: PlayerListProps) => {
  const navigate = useNavigate();

  const handlePlayerClick = (player: Player | Coach) => {
    navigate(`/player/${endpoint}/detail?pcode=${player.pcode}`);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent,
    player: Player | Coach
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handlePlayerClick(player);
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {playerList.map((player) => (
        <div
          key={player.pcode}
          className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
          onClick={() => handlePlayerClick(player)}
          onKeyDown={(event) => handleKeyDown(event, player)}
          tabIndex={0}
          role="button"
          aria-label={`Player ${player.playerName}, No.${player.backnum}`}
        >
          <div className="absolute top-2 right-2 text-right text-wiz-red font-bold">
            <p>No.{player.backnum}</p>
            <p className="text-wiz-black">{player.playerName}</p>
          </div>
          <img
            src={player.playerPrvwImg}
            alt={player.playerName}
            width={150}
            height={200}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export { PlayerList };
