import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';

export const mockMatchData = [
  {
    match_date: '2024년 10월 11일',
    match_time: '18:30',
    place: '잠실',
    audience: '23,750',
    team1: 'KT',
    team1_result: '1',
    team1_logo:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F173D58365036F0AA03',
    team1_score: [
      { id: '1-1', score: '0' },
      { id: '1-2', score: '0' },
      { id: '1-3', score: '0' },
      { id: '1-4', score: '0' },
      { id: '1-5', score: '0' },
      { id: '1-6', score: '0' },
      { id: '1-7', score: '1' },
      { id: '1-8', score: '0' },
      { id: '1-9', score: '0' },
      { id: '1-10', score: '-' },
      { id: '1-11', score: '-' },
      { id: '1-12', score: '-' },
      { id: '1-13', score: '-' },
      { id: '1-14', score: '-' },
      { id: '1-15', score: '-' },
      { id: '1-16', score: '1' },
      { id: '1-17', score: '3' },
      { id: '1-18', score: '3' },
      { id: '1-19', score: '4' },
    ],
    team1_betel: '원정',

    team2: 'LG',
    team2_result: '4',
    team2_logo:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F1424D544502DD27604',
    team2_score: [
      { id: '2-1', score: '2' },
      { id: '2-2', score: '0' },
      { id: '2-4', score: '0' },
      { id: '2-3', score: '1' },
      { id: '2-5', score: '0' },
      { id: '2-6', score: '0' },
      { id: '2-7', score: '1' },
      { id: '2-8', score: '0' },
      { id: '2-9', score: '-' },
      { id: '2-10', score: '-' },
      { id: '2-11', score: '-' },
      { id: '2-12', score: '-' },
      { id: '2-13', score: '-' },
      { id: '2-14', score: '-' },
      { id: '2-15', score: '-' },
      { id: '2-16', score: '4' },
      { id: '2-17', score: '8' },
      { id: '2-18', score: '0' },
      { id: '2-19', score: '1' },
    ],
    team2_betel: '홈',
  },
];

const MatchScoreTable = () => {
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
        <TableRow>
          <TableCell className="font-medium border border-[#fefefe40] text-center bg-wiz-white">
            {mockMatchData[0].team1}
          </TableCell>
          {mockMatchData[0].team1_score.map((score) => (
            <TableCell
              key={score.id}
              className="font-medium border bg-wiz-black border-[#fefefe40] text-center text-wiz-white"
            >
              {score.score}
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-[#fefefe40] text-center bg-wiz-white">
            {mockMatchData[0].team2}
          </TableCell>
          {mockMatchData[0].team2_score.map((score) => (
            <TableCell
              key={score.id}
              className="font-medium border border-[#fefefe40] bg-wiz-black text-center text-wiz-white"
            >
              {score.score}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export { MatchScoreTable };
