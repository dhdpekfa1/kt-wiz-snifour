import type { Pitcher } from '@/features/game/types/BoxscoreData';
import { ColumnDef } from '@tanstack/react-table';

const generateResult = (wls: string) => {
  if (wls === 'L') return '패';
  if (wls === 'W') return '승';
  if (wls === 'H') return '홀드';
  return wls;
};

const calculateERA = (er: number, accmInn2: number) => {
  const innings = accmInn2 / 3;
  return innings > 0 ? ((er * 9) / innings).toFixed(2) : '0.00';
};

export const pitchingRecordColumns: ColumnDef<Pitcher>[] = [
  { accessorKey: 'name', header: '선수명' },
  { accessorKey: 'changeinn', header: '등판' },
  {
    accessorFn: (row) => generateResult(row.wls),
    id: 'result',
    header: '결과',
    cell: (info) => info.getValue(),
  },
  { accessorKey: 'w', header: '승' },
  { accessorKey: 'l', header: '패' },
  { accessorKey: 's', header: '세' },
  { accessorKey: 'inn', header: '이닝' },
  { accessorKey: 'bf', header: '타자' },
  { accessorKey: 'pa', header: '투구수' },
  { accessorKey: 'hit', header: '피안타' },
  { accessorKey: 'hr', header: '피홈런' },
  { accessorKey: 'bbhp', header: '사구' },
  { accessorKey: 'kk', header: '삼진' },
  { accessorKey: 'r', header: '실점' },
  { accessorKey: 'er', header: '자책' },
  {
    accessorFn: (row) => calculateERA(row.er, row.accmInn2),
    id: 'era',
    header: '평균 자책점',
    cell: (info) => info.getValue(),
  },
];
