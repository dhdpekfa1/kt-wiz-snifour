import { pitchingRecordColumns } from '@/constants/columns/pitching-record-columns';
import DataTable from '@/features/common/DataTable';
import type { Pitcher } from '../../types/BoxscoreData';

interface PitchingRecordTableProps {
  data: Pitcher[] | undefined;
}

const PitchingRecordTable = ({ data = [] }: PitchingRecordTableProps) => {
  return <DataTable data={data} columns={pitchingRecordColumns} domain="kt" />;
};

export { PitchingRecordTable };
