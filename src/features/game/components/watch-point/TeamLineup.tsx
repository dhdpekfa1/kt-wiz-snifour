import { Lineup } from '@/features/game/types/watch-point';

const TeamLineup = ({ data, logoUrl }: { data: Lineup[]; logoUrl: string }) => {
  const positionData: Record<string, { style: string; label: string }> = {
    '1': { style: 'absolute bottom-36 left-40', label: 'P' },
    '2': { style: 'absolute bottom-20 left-40', label: '2' },
    '3': { style: 'absolute bottom-36 right-12', label: '3' },
    '4': { style: 'absolute top-44 right-24', label: '4' },
    '5': { style: 'absolute bottom-36 left-16', label: '5' },
    '6': { style: 'absolute top-44 left-24', label: '6' },
    '7': { style: 'absolute top-32 left-16', label: '7' },
    '8': { style: 'absolute top-28 left-40', label: '8' },
    '9': { style: 'absolute top-32 right-12', label: '9' },
    D: { style: 'absolute bottom-20 left-26', label: 'D' },
  };

  return (
    <div className="flex flex-col items-center gap-4 max-lg:flex-row">
      <img src={logoUrl} alt="team logo" className="w-32 h-32" />
      <div className="w-[380px] relative mt-2 p-10  bg-wiz-white bg-opacity-10 rounded-xl">
        <img src="/assets/ground.png" alt="diamond" className="w-full h-auto" />
        {data.map((player) =>
          positionData[player.pos] ? (
            <div
              key={player.pcode}
              className={`border border-l-2 border-l-wiz-red bg-wiz-white w-fit h-fit px-2 rounded ${
                positionData[player.pos].style
              }`}
            >
              <div className="flex text-wiz-black">
                <p>{positionData[player.pos].label}.</p>
                <p className="break-words max-w-[6ch]">{player.playerName}</p>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export { TeamLineup };
