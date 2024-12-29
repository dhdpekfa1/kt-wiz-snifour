import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import { vsOrder } from '@/constants/team-vs-order';
import { useTeamVS } from '@/features/game/hooks/ranking/useTeamVS';
import { cn } from '@/lib/utils';

interface TeamVSResult {
  win: number | string;
  lose: number | string;
  drawn: number | string;
}

interface ArrangedTeamVS {
  teamName: string;
  teamCode: string;
  [vsTeamCode: string]: { win: number; lose: number; drawn: number } | string;
}

function TeamVSTable() {
  const { vs, loading, error } = useTeamVS();

  if (!Object.keys(vs) || loading) {
    return null;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow className="font-semibold border-none">
          <TableHead className="text-center bg-wiz-white bg-opacity-30">
            팀명
          </TableHead>
          {vsOrder.map(({ teamCode, teamName }) => (
            <TableHead
              key={`th-${teamCode}`}
              className={cn(
                'text-center bg-wiz-white bg-opacity-30',
                teamCode === 'KT' && 'bg-wiz-red bg-opacity-70'
              )}
            >
              {teamName}
              <br />
              (승-패-무)
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="text-center">
        {vsOrder.map(({ teamCode, teamName }, index) => (
          <TableRow
            key={`tr-${teamCode}`}
            className={cn(
              'border-b-wiz-white border-opacity-10',
              teamCode === 'KT' && 'bg-wiz-red bg-opacity-70 font-bold'
            )}
          >
            <TableCell>{teamName}</TableCell>
            {vsOrder.map((vsTeam, vIndex) => {
              const { win, lose, drawn }: TeamVSResult = ((
                vs as ArrangedTeamVS[]
              )[index][vsTeam.teamCode] as TeamVSResult) || {
                win: '',
                lose: '',
                drawn: '',
              };

              return (
                <TableCell
                  key={`${teamCode}-${vsTeam.teamCode}`}
                  className={cn(
                    index > 0 &&
                      vIndex === 0 &&
                      'bg-wiz-red bg-opacity-70 font-bold' // 중복 색칠 방지(배경색 투명도가 있기 때문)
                  )}
                >
                  {teamCode !== vsTeam.teamCode && (
                    <span>
                      {win}-{lose}-{drawn}
                    </span>
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export { TeamVSTable };
