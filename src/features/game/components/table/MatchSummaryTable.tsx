import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';

type TeamRecord = {
  wins: number;
  losses: number;
  draws: number;
  winRate: number;
  seasonRank: number;
};

type MatchSummaryTableProps = {
  teamA: TeamRecord;
  teamB: TeamRecord;
};

const MatchSummaryTable = ({ teamA, teamB }: MatchSummaryTableProps) => {
  const headers = [
    { id: 'win', label: '승' },
    { id: 'loss', label: '패' },
    { id: 'draw', label: '무' },
    { id: 'winRate', label: '승률' },
    { id: 'vs', label: 'VS' },
    { id: 'opponentWin', label: '승' },
    { id: 'opponentLoss', label: '패' },
    { id: 'opponentDraw', label: '무' },
    { id: 'opponentWinRate', label: '승률' },
  ];

  return (
    <Table className="w-full border-collapse whitespace-nowrap">
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead
              key={header.id}
              className="text-center text-wiz-white bg-wiz-red border border-[#ddd]"
            >
              {header.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* 첫 번째 행: 시즌 성적 */}
        <TableRow className="hover:bg-[#fefefe40] bg-wiz-black text-wiz-white">
          <TableCell className="text-center border border-[#ddd]">
            {teamA.wins}
          </TableCell>
          <TableCell className="text-center border border-[#ddd]">
            {teamA.losses}
          </TableCell>
          <TableCell className="text-center border border-[#ddd]">
            {teamA.draws}
          </TableCell>
          <TableCell className="text-center border border-[#ddd]">
            {teamA.winRate.toFixed(3)}
          </TableCell>
          <TableCell className="text-center font-semibold border border-[#ddd] align-middle">
            시즌 성적
          </TableCell>
          <TableCell className="text-center border border-[#ddd]">
            {teamB.wins}
          </TableCell>
          <TableCell className="text-center border border-[#ddd]">
            {teamB.losses}
          </TableCell>
          <TableCell className="text-center border border-[#ddd]">
            {teamB.draws}
          </TableCell>
          <TableCell className="text-center border border-[#ddd]">
            {teamB.winRate.toFixed(3)}
          </TableCell>
        </TableRow>
        {/* 두 번째 행: 시즌 상대 전적 */}
        <TableRow className="hover:bg-[#fefefe40] bg-wiz-black text-wiz-white">
          <TableCell className="text-center border border-[#ddd]">7</TableCell>
          <TableCell className="text-center border border-[#ddd]">9</TableCell>
          <TableCell className="text-center border border-[#ddd]">0</TableCell>
          <TableCell className="text-center border border-[#ddd]">
            0.438
          </TableCell>
          <TableCell className="text-center font-semibold border border-[#ddd]">
            시즌 상대 전적
          </TableCell>
          <TableCell className="text-center border border-[#ddd]">9</TableCell>
          <TableCell className="text-center border border-[#ddd]">7</TableCell>
          <TableCell className="text-center border border-[#ddd]">0</TableCell>
          <TableCell className="text-center border border-[#ddd]">
            0.563
          </TableCell>
        </TableRow>
        {/* 세 번째 행: 시즌 순위 */}
        <TableRow className="hover:bg-[#fefefe40] bg-wiz-black text-wiz-white">
          <TableCell
            colSpan={4}
            className="text-center border border-[#ddd] font-bold"
          >
            {teamA.seasonRank} 위
          </TableCell>
          <TableCell className="text-center font-semibold border border-[#ddd]">
            시즌 순위
          </TableCell>
          <TableCell
            colSpan={4}
            className="text-center border border-[#ddd] font-bold"
          >
            {teamB.seasonRank} 위
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export { MatchSummaryTable };
