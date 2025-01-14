import { pitchingRecordColumns } from '@/constants/columns/pitching-record-columns';
import { DataTable } from '@/features/common';
import type { Pitcher } from '@/features/game';

interface PitchingRecordTableProps {
  data: Pitcher[] | undefined;
}

const PitchingRecordTable = ({ data = [] }: PitchingRecordTableProps) => {
  return <DataTable data={data} columns={pitchingRecordColumns} domain="kt" />;
};

export { PitchingRecordTable };
