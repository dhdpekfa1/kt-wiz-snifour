import { TooltipProps } from 'recharts';

interface Payload {
  playerName: string;
  era: string;
  wra: string;
  gamenum: number;
  teamName: string;
}

function CustomTooltip({ active, payload }: TooltipProps<string, string>) {
  if (active && payload && payload.length) {
    const { playerName, era, wra, gamenum, teamName } = payload[0]
      .payload as Payload;
    return (
      <div className="w-48 bg-white text-black p-2 border rounded shadow-md">
        <div className="flex items-center justify-between">
          <p className="font-bold ">
            {playerName}({teamName})
          </p>
          <p className="text-sm">{gamenum}번 출장</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm bg-wiz-black text-white rounded px-2">
            ERA
          </span>
          {era}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm bg-wiz-black text-white rounded px-2">
            승률
          </span>
          {wra}
        </div>
      </div>
    );
  }
  return null;
}

export default CustomTooltip;
