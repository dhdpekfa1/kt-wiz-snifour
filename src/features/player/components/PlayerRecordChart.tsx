import SubTitle from '@/features/common/SubTitle';
import { RecentRecord, YearRecord } from '../types/record';

interface PlayerRecordChartProps {
  title: string;
  data: RecentRecord[] | YearRecord[];
}

function PlayerRecordChart({ title, data }: PlayerRecordChartProps) {
  return (
    <div className="w-full h-1/2 min-h-64 bg-wiz-white bg-opacity-10 rounded-xl p-2">
      <SubTitle title={title} className="text-lg" />
      {/* 차트 */}
    </div>
  );
}

export { PlayerRecordChart };
