import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import type { Pitcher } from '../../types/BoxScoreData';

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
