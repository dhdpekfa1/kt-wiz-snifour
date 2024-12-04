import { Table, TableBody, TableCell, TableRow } from '@/components/ui';

const KeyRecordsTable = () => {
  return (
    <Table className="whitespace-nowrap">
      <TableBody>
        <TableRow>
          <TableCell className="font-medium border border-[#fefefe40] text-center bg-wiz-white">
            결승타
          </TableCell>
          <TableCell className="font-medium border border-[#fefefe40] w-full text-wiz-white bg-[#35383e]">
            오스틴(1회 1사 1루서 우중간 2루타)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-[#fefefe40] text-center bg-wiz-white">
            2루타
          </TableCell>
          <TableCell className="font-medium border border-[#fefefe40] w-full text-wiz-white bg-[#35383e]">
            오스틴(1회) 김현수(1회)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-[#fefefe40]  text-center bg-wiz-white">
            실책
          </TableCell>
          <TableCell className="font-medium border border-[#fefefe40] w-full text-wiz-white bg-[#35383e]">
            장성우2(3 7회) 오윤석(8회)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-[#fefefe40] text-center bg-wiz-white">
            도루
          </TableCell>
          <TableCell className="font-medium border border-[#fefefe40] w-full text-wiz-white bg-[#35383e]">
            신민재(3회) 박해민(7회) 김대원(7회)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-[#fefefe40] text-center bg-wiz-white">
            도루자
          </TableCell>
          <TableCell className="font-medium border border-[#fefefe40] w-full text-wiz-white bg-[#35383e]">
            최승민(8회)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-[#fefefe40] text-center bg-wiz-white">
            주루사
          </TableCell>
          <TableCell className="font-medium border border-[#fefefe40] w-full text-wiz-white bg-[#35383e]">
            강백호(2회)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-[#fefefe40] text-center bg-wiz-white">
            병살타
          </TableCell>
          <TableCell className="font-medium border border-[#fefefe40] w-full text-wiz-white bg-[#35383e]">
            황재균(9회)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-[#fefefe40] text-center bg-wiz-white">
            심판
          </TableCell>
          <TableCell className="font-medium border border-[#fefefe40] w-full text-wiz-white bg-[#35383e]">
            전일수 이기중 나광남 박종철 문동균 김정국
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export { KeyRecordsTable };
