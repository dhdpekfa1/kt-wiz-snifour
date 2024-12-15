import { Table, TableBody, TableCell, TableRow } from '@/components/ui';
import type { MatchDataProps } from '../../types/MatchDataProps';

const KeyRecordsTable = ({ data }: MatchDataProps) => {
  const getRecordByHow = (how: string) => {
    const record = data?.etcgames.find((game) => game.how === how);
    return record ? record.result : '';
  };

  return (
    <Table className="whitespace-nowrap">
      <TableBody>
        <TableRow>
          <TableCell className="font-medium border border-[#fefefe40] text-center bg-wiz-white text-wiz-black">
            결승타
          </TableCell>
          <TableCell className="font-medium border border-[#fefefe40] w-full text-wiz-white bg-[#35383e]">
            {getRecordByHow('결승타')}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-[#fefefe40] text-center bg-wiz-white text-wiz-black">
            2루타
          </TableCell>
          <TableCell className="font-medium border border-[#fefefe40] w-full text-wiz-white bg-[#35383e]">
            {getRecordByHow('2루타')}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-[#fefefe40]  text-center bg-wiz-white">
            실책
          </TableCell>
          <TableCell className="font-medium border border-[#fefefe40] w-full text-wiz-white bg-[#35383e]">
            {getRecordByHow('실책')}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-[#fefefe40] text-center bg-wiz-white">
            도루
          </TableCell>
          <TableCell className="font-medium border border-[#fefefe40] w-full text-wiz-white bg-[#35383e]">
            {getRecordByHow('도루')}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-[#fefefe40] text-center bg-wiz-white">
            도루자
          </TableCell>
          <TableCell className="font-medium border border-[#fefefe40] w-full text-wiz-white bg-[#35383e]">
            {getRecordByHow('도루자')}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-[#fefefe40] text-center bg-wiz-white">
            주루사
          </TableCell>
          <TableCell className="font-medium border border-[#fefefe40] w-full text-wiz-white bg-[#35383e]">
            {getRecordByHow('주루사')}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-[#fefefe40] text-center bg-wiz-white">
            병살타
          </TableCell>
          <TableCell className="font-medium border border-[#fefefe40] w-full text-wiz-white bg-[#35383e]">
            {getRecordByHow('병살타')}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium border border-[#fefefe40] text-center bg-wiz-white">
            심판
          </TableCell>
          <TableCell className="font-medium border border-[#fefefe40] w-full text-wiz-white bg-[#35383e]">
            {getRecordByHow('심판')}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export { KeyRecordsTable };
