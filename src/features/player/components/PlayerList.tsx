import { Coach, Player } from '@/features/player/types/player';

const PlayerList = ({ playerList }: { playerList: Coach[] | Player[] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {playerList.map((player) => (
        <div
          key={player.backnum}
          className="relative bg-white rounded-lg shadow-md overflow-hidden"
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

export default PlayerList;
