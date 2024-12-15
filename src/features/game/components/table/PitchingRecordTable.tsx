import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import type { Pitcher } from '../../types/BoxScoreData';

/*const mockPitchingData = [
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
];*/

interface PitchingRecordTableProps {
  data: Pitcher[] | undefined;
}
const generateResult = (wls: string) => {
  if (wls === 'L') return '패';
  if (wls === 'W') return '승';
  if (wls === 'H') return '홀드';
  return wls; //공백일 때
};

const calculateERA = (er: number, accmInn2: number) => {
  const innings = accmInn2 / 3;
  return innings > 0 ? ((er * 9) / innings).toFixed(2) : '0.00';
};
const PitchingRecordTable = ({ data }: PitchingRecordTableProps) => {
  return (
    <div className="mb-6">
      <Table className="w-full border-collapse border border-[#ddd] whitespace-nowrap">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center bg-slate-100 border border-[#ddd]">
              선수명
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-[#ddd]">
              등판
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-[#ddd]">
              결과
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-[#ddd]">
              승
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-[#ddd]">
              패
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-[#ddd]">
              세
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-[#ddd]">
              이닝
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-[#ddd]">
              타자
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-[#ddd]">
              투구수
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-[#ddd]">
              피안타
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-[#ddd]">
              피홈런
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-[#ddd]">
              사구
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-[#ddd]">
              삼진
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-[#ddd]">
              실점
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-[#ddd]">
              자책
            </TableHead>
            <TableHead className="text-center bg-slate-100 border border-[#ddd]">
              평균 자책점
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((pitcher) => (
            <TableRow key={pitcher.pcode} className="hover:bg-[#fefefe40]">
              <TableCell className="text-center bg-wiz-red border border-[#fefefe40] text-wiz-white">
                {pitcher.name}
              </TableCell>
              <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
                {pitcher.changeinn}
              </TableCell>
              <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
                {generateResult(pitcher.wls)}
              </TableCell>
              <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
                {pitcher.w}
              </TableCell>
              <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
                {pitcher.l}
              </TableCell>
              <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
                {pitcher.s}
              </TableCell>
              <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
                {pitcher.inn}
              </TableCell>
              <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
                {pitcher.bf}
              </TableCell>
              <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
                {pitcher.pa}
              </TableCell>
              <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
                {pitcher.hit}
              </TableCell>
              <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
                {pitcher.hr}
              </TableCell>
              <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
                {pitcher.bbhp}
              </TableCell>
              <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
                {pitcher.kk}
              </TableCell>
              <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
                {pitcher.r}
              </TableCell>
              <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
                {pitcher.er}
              </TableCell>
              <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
                {calculateERA(pitcher.er, pitcher.accmInn2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export { PitchingRecordTable };
