import { useEffect, useState } from 'react';
import axios from 'axios';

import { CrowdRank } from '@/features/game/types/crowd-ranking';
import { API_URL } from '@/constants/api-url';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';

function CrowdRankingTable() {
  const [ranking, setRanking] = useState<CrowdRank[]>([]);

  useEffect(() => {
    const getCrowdRanking = async () => {
      try {
        const { data, status } = await axios.get(
          `${API_URL}/game/rank/crowd?gyear=2024`
        );

        if (status === 200 && data) {
          setRanking(data.data.list || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getCrowdRanking();
  }, []);

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
        {ranking.map((team, index) => (
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
