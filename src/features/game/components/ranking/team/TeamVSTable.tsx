import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import { useTeamVS } from '@/assets/hooks/ranking/useTeamVS';
import { teamName } from '@/constants/team-name-by-codes';
import { cn } from '@/lib/utils';

function TeamVSTable() {
  const { vs, loading, error } = useTeamVS();

  const vsOrder = ['KT', 'SS', 'OB', 'LG', 'WO', 'LT', 'SK', 'NC', 'HT', 'HH'];

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
          {vsOrder.map((teamCode) => (
            <TableHead
              key={`th-${teamCode}`}
              className={cn(
                'text-center bg-wiz-white bg-opacity-30',
                teamCode === 'KT' && 'bg-wiz-red bg-opacity-70'
              )}
            >
              {teamName[teamCode]}
              <br />
              (승-패-무)
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="text-center">
        {vsOrder.map((teamCode) => (
          <TableRow
            key={`tr-${teamCode}`}
            className={cn(
              'border-b-wiz-white border-opacity-10',
              teamCode === 'KT' && 'bg-wiz-red bg-opacity-70 font-bold'
            )}
          >
            <TableCell>{teamName[teamCode]}</TableCell>
            {vsOrder.map((vsTeamCode, index) => {
              return (
                <TableCell
                  key={`${teamCode}-${vsTeamCode}`}
                  className={`${
                    index === 0 // 각 row의 첫 번째 셀 (= 열이 KT인 경우)
                      ? teamCode === 'KT'
                        ? undefined
                        : 'bg-wiz-red bg-opacity-70 font-bold'
                      : undefined
                  }`}
                >
                  {teamCode === vsTeamCode
                    ? null
                    : `${vs[teamCode][vsTeamCode]?.win || 0}-${
                        vs[teamCode][vsTeamCode]?.lose || 0
                      }-${vs[teamCode][vsTeamCode]?.drawn || 0}`}
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
