import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router';
import { CoachListItem, PlayerListItem } from '../types/player';

interface PlayerListProps {
  playerList: (CoachListItem | PlayerListItem)[];
  endpoint: string;
  loading?: boolean;
}

const PlayerList = ({ playerList, endpoint, loading }: PlayerListProps) => {
  const navigate = useNavigate();

  const handlePlayerClick = (player: CoachListItem | PlayerListItem) => {
    navigate(`/player/${endpoint}/detail?pcode=${player.pcode}`);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent,
    player: PlayerListItem | CoachListItem
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handlePlayerClick(player);
    }
  };

  const skeletonItems = Array.from({ length: 16 });

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {loading || playerList.length <= 0
          ? // 로딩중일 때 스켈레톤
            skeletonItems.map(() => (
              <div
                key={Math.random()}
                className="relative bg-gray-200 animate-pulse rounded-lg shadow-md"
              >
                <Skeleton height={200} width="100%" />
              </div>
            ))
          : // 컴포넌트
            playerList.map((player) => (
              <div
                key={player.pcode}
                className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                onClick={() => handlePlayerClick(player)}
                onKeyDown={(event) => handleKeyDown(event, player)}
                tabIndex={0}
                role="button"
                aria-label={`Player ${player.playerName}, No.${player.backnum}`}
              >
                <div className="absolute top-2 right-2 text-right text-wiz-red font-bold text-xs md:text-base lg:text-lg">
                  <p>No.{player.backnum}</p>
                  <p className="text-wiz-black">{player.playerName}</p>
                </div>
                <img
                  src={player.playerPrvwImg}
                  alt={player.playerName}
                  className="w-full aspect-square object-cover"
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export { PlayerList };
