import { YearRecord } from '@/features/player/types/record';
import { ColumnDef } from '@tanstack/react-table';

export const yearRecordColumns: ColumnDef<YearRecord>[] = [
  {
    accessorKey: 'gyear',
    header: '시즌',
  },
  {
    accessorKey: 'teamName',
    header: '팀',
    cell: (info) => (info.getValue() as string).toUpperCase(),
  },
  {
    accessorKey: 'era',
    header: '평균자책점',
  },

  {
    accessorKey: 'wra',
    header: '승률',
  },
  {
    accessorKey: 'hit',
    header: '타자',
  },
  {
    accessorKey: 'innDisplay',
    header: '이닝',
  },
  {
    accessorKey: 'hit',
    header: '피안타',
  },
  {
    accessorKey: 'hr',
    header: '피홈런',
  },
  {
    accessorKey: 'bb',
    header: '볼넷',
  },
  {
    accessorKey: 'hp',
    header: '사구',
  },
  {
    accessorKey: 'kk',
    header: '탈삼진',
  },
  {
    accessorKey: 'r',
    header: '실점',
  },
  {
    accessorKey: 'er',
    header: '자책점',
  },
];
