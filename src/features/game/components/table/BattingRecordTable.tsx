import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import type { Batter } from '../../types/BoxScoreData';

interface BattingRecordTableProps {
  data: Batter[] | undefined;
}

const BattingRecordTable = ({ data }: BattingRecordTableProps) => {
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
        {data?.map((batter, index) => (
          <TableRow key={batter.pcode} className="hover:bg-[#fefefe40]">
            <TableCell className="text-center bg-wiz-red border border-[#fefefe40] text-wiz-white">
              {index + 1}
            </TableCell>
            <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
              {batter.position}
            </TableCell>
            <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
              {batter.name}
            </TableCell>
            <TableCell className="text-center">
              {[
                batter.inn1,
                batter.inn2,
                batter.inn3,
                batter.inn4,
                batter.inn5,
                batter.inn6,
                batter.inn7,
                batter.inn8,
                batter.inn9,
              ]
                .filter((inn) => inn !== '')
                .join(', ')}
            </TableCell>
            <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
              {batter.ab}
            </TableCell>
            <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
              {batter.run}
            </TableCell>
            <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
              {batter.hit}
            </TableCell>
            <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
              {batter.rbi}
            </TableCell>
            <TableCell className="text-center border border-[#fefefe40] text-wiz-white">
              {(batter.accmHit / batter.accmAb).toFixed(3)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export { BattingRecordTable };
