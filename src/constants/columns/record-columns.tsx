import { RecentRecord, YearRecord } from '@/features/player/types/detail';
import { ColumnDef } from '@tanstack/react-table';

export const recentPitcherRecordColumns: ColumnDef<RecentRecord>[] = [
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
      !info.row.original.er || !info.row.original.inn2
        ? null
        : ((9 * info.row.original.er) / info.row.original.inn2).toFixed(2),
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

export const yearPitcherRecordColumns: ColumnDef<YearRecord>[] = [
  {
    accessorKey: 'gyear',
    header: '시즌',
  },
  {
    accessorKey: 'era',
    header: '평균자책점',
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

export const recentBatterRecordColumns: ColumnDef<RecentRecord>[] = [
  {
    accessorKey: 'displayDate',
    header: '일자',
  },
  {
    accessorKey: 'matchTeamName',
    header: '상대',
  },
  {
    accessorKey: 'hra',
    header: '타율',
  },
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
    accessorKey: 'h2',
    header: '2루타',
  },
  {
    accessorKey: 'h3',
    header: '3루타',
  },
  {
    accessorKey: 'hr',
    header: '홈런',
  },
  {
    accessorKey: 'rbi',
    header: '타점',
  },
  {
    accessorKey: 'sb',
    header: '도루',
  },
  {
    accessorKey: 'cs',
    header: '도실',
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
    header: '삼진',
  },
  {
    accessorKey: 'gd',
    header: '병살',
  },
];

export const yearBatterRecordColumns: ColumnDef<YearRecord>[] = [
  {
    accessorKey: 'gyear',
    header: '시즌',
  },
  {
    accessorKey: 'hra',
    header: '타율',
  },
  {
    accessorKey: 'gamenum',
    header: '경기',
  },
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
    accessorKey: 'h2',
    header: '2루타',
  },
  {
    accessorKey: 'h3',
    header: '3루타',
  },
  {
    accessorKey: 'hr',
    header: '홈런',
  },
  {
    accessorKey: 'rbi',
    header: '타점',
  },
  {
    accessorKey: 'sb',
    header: '도루',
  },
  {
    accessorKey: 'cs',
    header: '도실',
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
    header: '삼진',
  },
  {
    accessorKey: 'gd',
    header: '병살',
  },
  {
    accessorKey: 'slg',
    header: '장타율',
  },
  {
    accessorKey: 'bra',
    header: '출루율',
  },
];
