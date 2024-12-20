import { battingRecordColumns } from '@/constants/columns/batting-record-columns';
import DataTable from '@/features/common/DataTable';
import type { Batter } from '../../types/BoxScoreData';

interface BattingRecordTableProps {
  data: Batter[] | undefined;
}

const BattingRecordTable = ({ data = [] }: BattingRecordTableProps) => {
  return <DataTable data={data} columns={battingRecordColumns} domain="all" />;
};

export { BattingRecordTable };
