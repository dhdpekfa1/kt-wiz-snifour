import type { Batter } from '@/features/game/types/boxscore';
import { ColumnDef } from '@tanstack/react-table';

export const battingRecordColumns: ColumnDef<Batter>[] = [
  {
    accessorFn: (_, index) => index + 1,
    id: 'order',
    header: '타순',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'position',
    header: '포지션',
  },
  {
    accessorKey: 'name',
    header: '이름',
  },
  ...Array.from({ length: 9 }, (_, i) => ({
    accessorKey: `inn${i + 1}`,
    header: `${i + 1}`,
  })),
  {
    accessorKey: 'ab',
    header: '타수',
  },
  {
    accessorKey: 'run',
    header: '득점',
  },
  {
    accessorKey: 'hit',
    header: '안타',
  },
  {
    accessorKey: 'rbi',
    header: '타점',
  },
  {
    accessorFn: (row) => (row.accmHit / row.accmAb).toFixed(3),
    id: 'avg',
    header: '타율',
    cell: (info) => info.getValue(),
  },
];
