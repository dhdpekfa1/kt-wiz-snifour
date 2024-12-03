import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';

const mockPitchingData = [
  {
    id: 'pitcher1',
    name: '최원태',
    appearances: 0,
    result: '',
    wins: 0,
    losses: 0,
    saves: 0,
    innings: '2⅔',
    battersFaced: 14,
    pitchesThrown: 65,
    hitsAllowed: 12,
    runsAllowed: 5,
    homeRuns: 0,
    walks: 1,
    strikeouts: 4,
    earnedRuns: 3,
    unearnedRuns: 2,
    era: 6.75,
  },
  {
    id: 'pitcher2',
    name: '손주영',
    appearances: 3.6,
    result: '승',
    wins: 1,
    losses: 0,
    saves: 0,
    innings: '5⅓',
    battersFaced: 17,
    pitchesThrown: 64,
    hitsAllowed: 2,
    runsAllowed: 0,
    homeRuns: 0,
    walks: 0,
    strikeouts: 7,
    earnedRuns: 0,
    unearnedRuns: 0,
    era: 0.0,
  },
  {
    id: 'pitcher3',
    name: '유영찬',
    appearances: 9.5,
    result: '',
    wins: 0,
    losses: 0,
    saves: 0,
    innings: '⅓',
    battersFaced: 3,
    pitchesThrown: 12,
    hitsAllowed: 2,
    runsAllowed: 2,
    homeRuns: 1,
    walks: 0,
    strikeouts: 0,
    earnedRuns: 2,
    unearnedRuns: 2,
    era: 13.5,
  },
  {
    id: 'pitcher4',
    name: '에르난데스',
    appearances: 9.8,
    result: 'S',
    wins: 0,
    losses: 0,
    saves: 1,
    innings: '⅔',
    battersFaced: 2,
    pitchesThrown: 4,
    hitsAllowed: 0,
    runsAllowed: 0,
    homeRuns: 0,
    walks: 0,
    strikeouts: 0,
    earnedRuns: 0,
    unearnedRuns: 0,
    era: 0.0,
  },
];

const PitchingRecordTable = () => {
  return (
    <div className="mb-6">
      <Table className="w-full border-collapse border border-slate-200 whitespace-nowrap">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center bg-slate-100 border border-slate-200">
              선수명
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-slate-200">
              등판
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-slate-200">
              결과
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-slate-200">
              승
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-slate-200">
              패
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-slate-200">
              세
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-slate-200">
              이닝
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-slate-200">
              타자
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-slate-200">
              투구수
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-slate-200">
              피안타
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-slate-200">
              피홈런
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-slate-200">
              사구
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-slate-200">
              삼진
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-slate-200">
              실점
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-slate-200">
              자책
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-slate-200">
              평균 자책점
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockPitchingData.map((pitcher) => (
            <TableRow key={pitcher.id} className="hover:bg-gray-50">
              <TableCell className="text-center border border-slate-200 text-gray-500">
                {pitcher.name}
              </TableCell>
              <TableCell className="text-center border border-slate-200 text-gray-500">
                {pitcher.appearances}
              </TableCell>
              <TableCell className="text-center border border-slate-200 text-gray-500">
                {pitcher.result}
              </TableCell>
              <TableCell className="text-center border border-slate-200 text-gray-500">
                {pitcher.wins}
              </TableCell>
              <TableCell className="text-center border border-slate-200 text-gray-500">
                {pitcher.losses}
              </TableCell>
              <TableCell className="text-center border border-slate-200 text-gray-500">
                {pitcher.saves}
              </TableCell>
              <TableCell className="text-center border border-slate-200 text-gray-500">
                {pitcher.innings}
              </TableCell>
              <TableCell className="text-center border border-slate-200 text-gray-500">
                {pitcher.battersFaced}
              </TableCell>
              <TableCell className="text-center border border-slate-200 text-gray-500">
                {pitcher.pitchesThrown}
              </TableCell>
              <TableCell className="text-center border border-slate-200 text-gray-500">
                {pitcher.hitsAllowed}
              </TableCell>
              <TableCell className="text-center border border-slate-200 text-gray-500">
                {pitcher.runsAllowed}
              </TableCell>
              <TableCell className="text-center border border-slate-200 text-gray-500">
                {pitcher.homeRuns}
              </TableCell>
              <TableCell className="text-center border border-slate-200 text-gray-500">
                {pitcher.walks}
              </TableCell>
              <TableCell className="text-center border border-slate-200 text-gray-500">
                {pitcher.strikeouts}
              </TableCell>
              <TableCell className="text-center border border-slate-200 text-gray-500">
                {pitcher.earnedRuns}
              </TableCell>
              <TableCell className="text-center border border-slate-200 text-gray-500">
                {pitcher.era.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export { PitchingRecordTable };
