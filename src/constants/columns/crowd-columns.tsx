import { CrowdRank } from '@/features/game/types/ranking';
import { ColumnDef } from '@tanstack/react-table';

export const crowdRankColumns: ColumnDef<CrowdRank>[] = [
  { accessorKey: '', header: '순위', cell: (info) => info.row.index + 1 },
  { accessorKey: 'teamName', header: '팀명' },
  { accessorKey: 'game', header: '경기 수' },
  {
    accessorKey: 'crowd',
    header: '누적 관중',
    cell: (info) => (info.getValue() as number).toLocaleString(),
  },
  {
    accessorKey: '',
    header: '평균 관중',
    cell: (info) =>
      Math.floor(
        info.row.original.crowd / info.row.original.game
      ).toLocaleString(),
  },
];
