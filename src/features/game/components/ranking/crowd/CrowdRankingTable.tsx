import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import { CrowdRank } from '@/features/game/types/crowd-ranking';

interface CrowdRankingTableProps {
  data: CrowdRank[];
}

function CrowdRankingTable({ data }: CrowdRankingTableProps) {
  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow className="text-lg font-semibold bg-wiz-white bg-opacity-30 border-none">
          <TableHead className="text-center">순위</TableHead>
          <TableHead className="text-center">팀명</TableHead>
          <TableHead className="text-center">경기 수</TableHead>
          <TableHead className="text-center">누적 관중</TableHead>
          <TableHead className="text-center">평균 관중</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-center">
        {data.map((team, index) => (
          <TableRow
            key={team.teamCode}
            className={`${
              team.teamCode === 'KT' && 'bg-wiz-red bg-opacity-70 font-bold'
            } border-b-wiz-white border-opacity-10`}
          >
            <TableCell>{index + 1}</TableCell>
            <TableCell>{team.teamName}</TableCell>
            <TableCell>{team.game}</TableCell>
            <TableCell>{team.crowd.toLocaleString()}</TableCell>
            <TableCell>
              {Math.floor(team.crowd / team.game).toLocaleString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export { CrowdRankingTable };
