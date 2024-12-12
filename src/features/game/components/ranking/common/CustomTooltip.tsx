import { TooltipProps } from 'recharts';

interface Payload {
  playerName: string;
  era: number;
  wra: number;
  gamenum: number;
  teamName: string;
  hra: number;
  ops: number;
}

function CustomTooltip({ active, payload }: TooltipProps<string, string>) {
  if (active && payload && payload.length) {
    const { playerName, era, wra, gamenum, teamName, hra, ops } = payload[0]
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
          {era && (
            <>
              <span className="w-10 text-sm bg-wiz-black text-white rounded text-center">
                ERA
              </span>
              <span>{era}</span>
            </>
          )}
          {hra && (
            <>
              <span className="w-10 text-sm bg-wiz-black text-white rounded text-center">
                타율
              </span>
              <span>{hra}</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-2">
          {wra && (
            <>
              <span className="w-10 text-sm bg-wiz-black text-white rounded text-center">
                승률
              </span>
              <span>{wra}</span>
            </>
          )}
          {ops && (
            <>
              <span className="w-10 text-sm bg-wiz-black text-white rounded text-center">
                OPS
              </span>
              <span>{ops}</span>
            </>
          )}
        </div>
      </div>
    );
  }
  return null;
}

export default CustomTooltip;
