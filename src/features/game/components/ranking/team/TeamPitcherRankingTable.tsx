import axios from 'axios';
import { useEffect, useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import { TeamPitcherRank } from '@/features/common/types/Pitchers';

function TeamPitcherRankingTable() {
  const [teamPitcherRanking, setTeamPitcherRanking] = useState<
    TeamPitcherRank[]
  >([]);
  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

  useEffect(() => {
    const getTeamPitcherRanking = async () => {
      try {
        const { data, status } = await axios.get(
          `${API_URL}/game/rank/pitching`
        );

        if (status === 200 && data) {
          const pitcherRanking = data.data.list || [];

          setTeamPitcherRanking(
            pitcherRanking.sort(
              (a: TeamPitcherRank, b: TeamPitcherRank) =>
                Number(a.era) - Number(b.era)
            )
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    getTeamPitcherRanking();
  }, []);

  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow className="text-lg font-semibold bg-wiz-white bg-opacity-30 border-none">
          <TableHead className="text-center">팀명</TableHead>
          <TableHead className="text-center">ERA</TableHead>
          <TableHead className="text-center">희타</TableHead>
          <TableHead className="text-center">희비</TableHead>
          <TableHead className="text-center">볼넷</TableHead>
          <TableHead className="text-center">고의4구</TableHead>
          <TableHead className="text-center">탈삼진</TableHead>
          <TableHead className="text-center">폭투</TableHead>
          <TableHead className="text-center">보크</TableHead>
          <TableHead className="text-center">실점</TableHead>
          <TableHead className="text-center">자책점</TableHead>
          <TableHead className="text-center">블론세이브</TableHead>
          <TableHead className="text-center">WHIP</TableHead>
          <TableHead className="text-center">피안타율</TableHead>
          <TableHead className="text-center">QS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-center">
        {teamPitcherRanking.map((team) => (
          <TableRow
            key={team.teamCode}
            className={`${
              team.teamCode === 'KT' && 'bg-wiz-red bg-opacity-70 font-bold'
            } border-b-wiz-white border-opacity-10`}
          >
            <TableCell>{team.teamName}</TableCell>
            <TableCell>{team.era}</TableCell>
            <TableCell>{team.sh}</TableCell>
            <TableCell>{team.sf}</TableCell>
            <TableCell>{team.bb}</TableCell>
            <TableCell>{team.ib}</TableCell>
            <TableCell>{team.kk}</TableCell>
            <TableCell>{team.wp}</TableCell>
            <TableCell>{team.bk}</TableCell>
            <TableCell>{team.r}</TableCell>
            <TableCell>{team.er}</TableCell>
            <TableCell>{team.bs}</TableCell>
            <TableCell>{team.whip}</TableCell>
            <TableCell>{team.oavg}</TableCell>
            <TableCell>{team.qs}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export { TeamPitcherRankingTable };
