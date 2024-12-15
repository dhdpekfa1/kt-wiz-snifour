import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import { ScoreboardEntry } from '../../types/BoxScoreData';

interface MatchScoreTableProps {
  data: ScoreboardEntry[] | undefined;
}

const MatchScoreTable = ({ data }: MatchScoreTableProps) => {
  const thead = [
    '팀',
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    'R',
    'H',
    'E',
    'B',
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {thead.map((item) => (
            <TableHead
              key={item}
              className="bg-wiz-red text-white border border-[#fefefe40] text-center"
            >
              {item}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((team) => (
          <TableRow key={team.bhomeName}>
            <TableCell className="font-medium border border-[#fefefe40] text-center bg-wiz-white text-wiz-black">
              {team.bhomeName}
            </TableCell>
            {Array.from({ length: 15 }, (_, i) => (
              <TableCell
                key={`score-${team.bhomeName}-${i + 1}`}
                className="font-medium border bg-wiz-black border-[#fefefe40] text-center text-wiz-white"
              >
                {team[`score${i + 1}`]}
              </TableCell>
            ))}
            <TableCell>{team.run}</TableCell>
            <TableCell>{team.hit}</TableCell>
            <TableCell>{team.error}</TableCell>
            <TableCell>{team.ballfour}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export { MatchScoreTable };
