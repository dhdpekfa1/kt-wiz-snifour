import { Table, TableBody, TableCell, TableRow } from '@/components/ui';

const KeyRecordsTable = () => {
  return (
    <Table className="whitespace-nowrap">
      <TableBody>
        <TableRow>
          <TableCell className="font-medium border border-slate-200 text-center bg-slate-100">
            결승타
          </TableCell>
          <TableCell className="font-medium border border-slate-200 w-full text-gray-500">
            오스틴(1회 1사 1루서 우중간 2루타)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-slate-200  text-center bg-slate-100">
            2루타
          </TableCell>
          <TableCell className="font-medium border border-slate-200 w-full text-gray-500">
            오스틴(1회) 김현수(1회)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-slate-200  text-center bg-slate-100">
            실책
          </TableCell>
          <TableCell className="font-medium border border-slate-200 w-full text-gray-500">
            장성우2(3 7회) 오윤석(8회)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-slate-200 text-center bg-slate-100">
            도루
          </TableCell>
          <TableCell className="font-medium border border-slate-200 w-full text-gray-500">
            신민재(3회) 박해민(7회) 김대원(7회)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-slate-200 text-center bg-slate-100">
            도루자
          </TableCell>
          <TableCell className="font-medium border border-slate-200 w-full text-gray-500">
            최승민(8회)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-slate-200 text-center bg-slate-100">
            주루사
          </TableCell>
          <TableCell className="font-medium border border-slate-200 w-full text-gray-500">
            강백호(2회)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-slate-200  text-center bg-slate-100">
            병살타
          </TableCell>
          <TableCell className="font-medium border border-slate-200 w-full text-gray-500">
            황재균(9회)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-slate-200  text-center bg-slate-100">
            심판
          </TableCell>
          <TableCell className="font-medium border border-slate-200 w-full text-gray-500">
            전일수 이기중 나광남 박종철 문동균 김정국
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default KeyRecordsTable;
