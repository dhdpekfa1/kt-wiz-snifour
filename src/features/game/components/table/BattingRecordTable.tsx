import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';

const mockData = [
  {
    id: 'player1',
    order: 1,
    position: '우',
    name: '홍창기',
    results: ['삼진', '우안', '중비', '1땅'],
    atBats: 4,
    runs: 0,
    hits: 1,
    rbis: 0,
    avg: 0.273,
  },
  {
    id: 'player2',
    order: 2,
    position: '二',
    name: '신민재',
    results: ['좌안', '3땅', '삼진', '1땅'],
    atBats: 4,
    runs: 2,
    hits: 1,
    rbis: 0,
    avg: 0.35,
  },
  {
    id: 'player3',
    order: 3,
    position: '一',
    name: '오스틴',
    results: ['우중2', '좌희비', '유땅', '좌비'],
    atBats: 3,
    runs: 1,
    hits: 1,
    rbis: 2,
    avg: 0.3,
  },
  {
    id: 'player4',
    order: 4,
    position: '유',
    name: '오지환',
    results: ['삼진', '2땅', '우안'],
    atBats: 4,
    runs: 0,
    hits: 1,
    rbis: 0,
    avg: 0.3,
  },
  {
    id: 'player5',
    order: 5,
    position: '좌',
    name: '김현수',
    results: ['우2', '중비', '2땅', '2땅'],
    atBats: 4,
    runs: 0,
    hits: 1,
    rbis: 1,
    avg: 0.263,
  },
  {
    id: 'player6',
    order: 5,
    position: '주좌',
    name: '최승민',
    results: [],
    atBats: 0,
    runs: 0,
    hits: 0,
    rbis: 0,
    avg: 0.0,
  },
  {
    id: 'player7',
    order: 6,
    position: '三',
    name: '문보경',
    results: ['3파', '중안', '1땅', '좌비'],
    atBats: 4,
    runs: 0,
    hits: 1,
    rbis: 0,
    avg: 0.053,
  },
  {
    id: 'player8',
    order: 7,
    position: '포',
    name: '박동원',
    results: ['유땅', '4구', '유땅'],
    atBats: 2,
    runs: 0,
    hits: 0,
    rbis: 0,
    avg: 0.2,
  },
  {
    id: 'player9',
    order: 8,
    position: '중',
    name: '박해민',
    results: ['중비', '2땅', '우안'],
    atBats: 3,
    runs: 1,
    hits: 1,
    rbis: 0,
    avg: 0.235,
  },
  {
    id: 'player10',
    order: 9,
    position: '지',
    name: '문성주',
    results: ['좌비', '2땅', '좌안'],
    atBats: 3,
    runs: 0,
    hits: 1,
    rbis: 1,
    avg: 0.375,
  },
  {
    id: 'player11',
    order: 9,
    position: '주',
    name: '김대원',
    results: [],
    atBats: 0,
    runs: 0,
    hits: 0,
    rbis: 0,
    avg: 0.0,
  },
];

const BattingRecordTable = () => {
  return (
    <Table className="w-full border-collapse whitespace-nowrap">
      <TableHeader>
        <TableRow>
          <TableHead className="text-center bg-slate-100 border border-[#ddd]">
            타순
          </TableHead>
          <TableHead className="text-center bg-slate-100 border border-[#ddd]">
            포지션
          </TableHead>
          <TableHead className="text-center bg-slate-100 border border-[#ddd]">
            이름
          </TableHead>
          {[...Array(15)].map((_, index) => (
            <TableHead
              key={`inning-${index + 1}`}
              className="text-center bg-slate-100 border border-[#ddd]"
            >
              {index + 1}
            </TableHead>
          ))}
          <TableHead className="text-center bg-slate-100 border border-[#ddd]">
            타수
          </TableHead>
          <TableHead className="text-center bg-slate-100 border border-[#ddd]">
            득점
          </TableHead>
          <TableHead className="text-center bg-slate-100 border border-[#ddd]">
            안타
          </TableHead>
          <TableHead className="text-center bg-slate-100 border border-[#ddd]">
            타점
          </TableHead>
          <TableHead className="text-center bg-slate-100 border border-[#ddd]">
            타율
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockData.map((player) => (
          <TableRow key={player.id} className="hover:bg-[#fefefe40]">
            <TableCell className="text-center bg-wiz-red border border-[#fefefe40] text-wiz-white">
              {player.order}
            </TableCell>
            <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
              {player.position}
            </TableCell>
            <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
              {player.name}
            </TableCell>
            {[...Array(15)].map((_, inningIndex) => (
              <TableCell
                key={`${player.id}-${inningIndex}`}
                className="text-center border border-[#fefefe40] text-wiz-white"
              >
                {player.results[inningIndex] || ''}
              </TableCell>
            ))}
            <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
              {player.atBats}
            </TableCell>
            <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
              {player.runs}
            </TableCell>
            <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
              {player.hits}
            </TableCell>
            <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
              {player.rbis}
            </TableCell>
            <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
              {player.avg.toFixed(3)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export { BattingRecordTable };
