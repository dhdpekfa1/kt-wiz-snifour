import { Table, TableBody, TableCell, TableRow } from '@/components/ui';
import { EtcGame } from '../../types/BoxscoreData';

interface KeyRecordsTableProps {
  data: EtcGame[] | undefined;
}

const KeyRecordsTable = ({ data }: KeyRecordsTableProps) => {
  const getRecordByHow = (how: string) => {
    const record = data?.find((game) => game.how === how);
    return record ? record.result : '';
  };

  const tableRows = [
    { label: '결승타' },
    { label: '2루타' },
    { label: '실책' },
    { label: '도루' },
    { label: '도루자' },
    { label: '주루사' },
    { label: '병살타' },
    { label: '심판' },
  ];

  return (
    <Table className="whitespace-nowrap">
      <TableBody>
        {tableRows.map((row) => (
          <TableRow
            key={row.label}
            className="text-base font-semibold border-none"
          >
            <TableCell className="font-medium border border-[#fefefe40] text-center  text-wiz-white bg-wiz-white bg-opacity-30">
              {row.label}
            </TableCell>
            <TableCell className="font-medium border border-[#fefefe40] w-full text-wiz-white bg-wiz-black">
              {getRecordByHow(row.label)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export { KeyRecordsTable };
