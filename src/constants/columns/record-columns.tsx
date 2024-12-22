import { RecentRecord, YearRecord } from '@/features/player/types/record';
import { ColumnDef } from '@tanstack/react-table';

export const recentRecordColumns: ColumnDef<RecentRecord>[] = [
  {
    accessorKey: 'displayDate',
    header: '일자',
  },
  {
    accessorKey: 'matchTeamName',
    header: '상대',
  },
  {
    accessorKey: 'wls',
    header: '결과',
    cell: (info) => {
      const wls = info.getValue();
      if (wls === 'L') {
        return '패';
      }
      if (wls === ' ') {
        return ' ';
      }
      return '승';
    },
  },
  {
    accessorKey: 'era',
    header: '평균자책점',
    cell: (info) =>
      ((9 * info.row.original.er) / info.row.original.inn2).toFixed(2),
  },
  {
    accessorKey: 'pa',
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

export const yearMatchColumns: ColumnDef<YearRecord>[] = [
  {
    accessorKey: 'gyear',
    header: '시즌',
  },
  {
    accessorKey: 'teamName',
    header: '팀',
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: 'gamenum',
    header: '경기',
  },
  {
    accessorKey: 'wCg',
    header: '완투',
  },
  {
    accessorKey: 'sho',
    header: '완봉',
  },
  {
    accessorKey: 'w',
    header: '승',
  },
  {
    accessorKey: 'l',
    header: '패',
  },
  {
    accessorKey: 'sv',
    header: '세이브',
  },
  {
    accessorKey: 'hold',
    header: '홀드',
  },
];

export const yearRecordColumns: ColumnDef<YearRecord>[] = [
  {
    accessorKey: 'gyear',
    header: '시즌',
  },
  {
    accessorKey: 'teamName',
    header: '팀',
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: 'era',
    header: '평균자책점',
  },

  {
    accessorKey: 'wra',
    header: '승률',
  },
  // ? 지표없음
  // {
  //   accessorKey: 'pa',
  //   header: '타자',
  // },
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
