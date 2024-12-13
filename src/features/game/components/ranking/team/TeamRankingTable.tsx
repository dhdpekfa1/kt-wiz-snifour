import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import { TeamStats } from '@/features/game/types/team-ranking';
import { useTeamRank } from '@/assets/hooks/ranking/useTeamRank';

function TeamRankingTable() {
  const { ranking, loading, error } = useTeamRank('team');

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
          <TableHead className="text-center">순위</TableHead>
          <TableHead className="text-center">팀명</TableHead>
          <TableHead className="text-center">경기</TableHead>
          <TableHead className="text-center">승</TableHead>
          <TableHead className="text-center">패</TableHead>
          <TableHead className="text-center">무</TableHead>
          <TableHead className="text-center">승률</TableHead>
          <TableHead className="text-center">게임차</TableHead>
          <TableHead className="text-center">연속</TableHead>
          <TableHead className="text-center">득점</TableHead>
          <TableHead className="text-center">실점</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-center">
        {(ranking as TeamStats[]).map((team) => (
          <TableRow
            key={team.teamCode}
            className={`${
              team.teamCode === 'KT' && 'bg-wiz-red bg-opacity-70 font-bold'
            } border-b-wiz-white border-opacity-10`}
          >
            <TableCell>{team.rank}</TableCell>
            <TableCell>{team.teamName}</TableCell>
            <TableCell>{team.game}</TableCell>
            <TableCell>{team.win}</TableCell>
            <TableCell>{team.lose}</TableCell>
            <TableCell>{team.drawn}</TableCell>
            <TableCell>{team.wra}</TableCell>
            <TableCell>{team.gb}</TableCell>
            <TableCell>{team.continue1}</TableCell>
            <TableCell>{team.run}</TableCell>
            <TableCell>{team.r}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export { TeamRankingTable };
