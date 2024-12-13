import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import { TeamBatterRank } from '@/features/common/types/batters';
import { useTeamRank } from '@/assets/hooks/ranking/useTeamRank';

function TeamBatterRankingTable() {
  const { ranking, loading, error } = useTeamRank('batter');

  if (!ranking.length || loading) {
    return null;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow className="text-lg font-semibold bg-wiz-white bg-opacity-30 border-none">
          <TableHead className="text-center">팀명</TableHead>
          <TableHead className="text-center">타율</TableHead>
          <TableHead className="text-center">안타</TableHead>
          <TableHead className="text-center">2루타</TableHead>
          <TableHead className="text-center">3루타</TableHead>
          <TableHead className="text-center">홈런</TableHead>
          <TableHead className="text-center">타점</TableHead>
          <TableHead className="text-center">도루</TableHead>
          <TableHead className="text-center">볼넷</TableHead>
          <TableHead className="text-center">고의4구</TableHead>
          <TableHead className="text-center">사구</TableHead>
          <TableHead className="text-center">삼진</TableHead>
          <TableHead className="text-center">병살</TableHead>
          <TableHead className="text-center">장타율</TableHead>
          <TableHead className="text-center">출루율</TableHead>
          <TableHead className="text-center">실책</TableHead>
          <TableHead className="text-center">OPS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-center">
        {(ranking as TeamBatterRank[]).map((team) => (
          <TableRow
            key={team.teamCode}
            className={`${
              team.teamCode === 'KT' && 'bg-wiz-red bg-opacity-70 font-bold'
            } border-b-wiz-white border-opacity-10`}
          >
            <TableCell>{team.teamName}</TableCell>
            <TableCell>{team.hra}</TableCell>
            <TableCell>{team.hit}</TableCell>
            <TableCell>{team.h2}</TableCell>
            <TableCell>{team.h3}</TableCell>
            <TableCell>{team.hr}</TableCell>
            <TableCell>{team.rbi}</TableCell>
            <TableCell>{team.sb}</TableCell>
            <TableCell>{team.bb}</TableCell>
            <TableCell>{team.ib}</TableCell>
            <TableCell>{team.hp}</TableCell>
            <TableCell>{team.kk}</TableCell>
            <TableCell>{team.gd}</TableCell>
            <TableCell>{team.slg}</TableCell>
            <TableCell>{team.bra}</TableCell>
            <TableCell>{team.err}</TableCell>
            <TableCell>{team.ops}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export { TeamBatterRankingTable };
