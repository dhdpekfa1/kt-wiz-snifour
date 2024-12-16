import { ColumnDef } from '@tanstack/react-table';

import { OverallBatterRank } from '@/features/common/types/batters';
import { OverallPitcherRank } from '@/features/common/types/pitchers';
import { SortingTrigger } from '@/features/game/components/ranking';

export const pitcherColumns: ColumnDef<OverallPitcherRank>[] = [
  {
    accessorKey: 'playerName',
    header: '이름',
  },
  {
    accessorKey: 'teamName',
    header: '팀',
  },
  {
    accessorKey: 'era',
    header: ({ column }) => (
      <SortingTrigger column={column}>평균자책점</SortingTrigger>
    ),
  },
  {
    accessorKey: 'gamenum',
    header: ({ column }) => (
      <SortingTrigger column={column}>경기</SortingTrigger>
    ),
  },
  {
    accessorKey: 'w',
    header: ({ column }) => <SortingTrigger column={column}>승</SortingTrigger>,
  },
  {
    accessorKey: 'l',
    header: ({ column }) => <SortingTrigger column={column}>패</SortingTrigger>,
  },
  {
    accessorKey: 'sv',
    header: ({ column }) => (
      <SortingTrigger column={column}>세이브</SortingTrigger>
    ),
  },
  {
    accessorKey: 'hold',
    header: ({ column }) => (
      <SortingTrigger column={column}>홀드</SortingTrigger>
    ),
  },
  {
    accessorKey: 'wra',
    header: ({ column }) => (
      <SortingTrigger column={column}>승률</SortingTrigger>
    ),
  },
  {
    accessorKey: 'inn',
    header: ({ column }) => (
      <SortingTrigger column={column}>이닝</SortingTrigger>
    ),
  },
  {
    accessorKey: 'hit',
    header: ({ column }) => (
      <SortingTrigger column={column}>피안타</SortingTrigger>
    ),
  },
  {
    accessorKey: 'hr',
    header: ({ column }) => (
      <SortingTrigger column={column}>피홈런</SortingTrigger>
    ),
  },
  {
    accessorKey: 'bb',
    header: ({ column }) => (
      <SortingTrigger column={column}>볼넷</SortingTrigger>
    ),
  },
  {
    accessorKey: 'hp',
    header: ({ column }) => (
      <SortingTrigger column={column}>사구</SortingTrigger>
    ),
  },
  {
    accessorKey: 'kk',
    header: ({ column }) => (
      <SortingTrigger column={column}>탈삼진</SortingTrigger>
    ),
  },
  {
    accessorKey: 'r',
    header: ({ column }) => (
      <SortingTrigger column={column}>실점</SortingTrigger>
    ),
  },
  {
    accessorKey: 'er',
    header: ({ column }) => (
      <SortingTrigger column={column}>자책점</SortingTrigger>
    ),
  },
];

export const batterColumns: ColumnDef<OverallBatterRank>[] = [
  {
    accessorKey: 'playerName',
    header: '이름',
  },
  {
    accessorKey: 'teamName',
    header: '팀',
  },
  {
    accessorKey: 'hra',
    header: ({ column }) => (
      <SortingTrigger column={column}>타율</SortingTrigger>
    ),
  },
  {
    accessorKey: 'gamenum',
    header: ({ column }) => (
      <SortingTrigger column={column}>경기</SortingTrigger>
    ),
  },
  {
    accessorKey: 'ab',
    header: ({ column }) => (
      <SortingTrigger column={column}>타수</SortingTrigger>
    ),
  },
  {
    accessorKey: 'run',
    header: ({ column }) => (
      <SortingTrigger column={column}>득점</SortingTrigger>
    ),
  },
  {
    accessorKey: 'hit',
    header: ({ column }) => (
      <SortingTrigger column={column}>안타</SortingTrigger>
    ),
  },
  {
    accessorKey: 'h2',
    header: ({ column }) => (
      <SortingTrigger column={column}>2루타</SortingTrigger>
    ),
  },
  {
    accessorKey: 'h3',
    header: ({ column }) => (
      <SortingTrigger column={column}>3루타</SortingTrigger>
    ),
  },
  {
    accessorKey: 'hr',
    header: ({ column }) => (
      <SortingTrigger column={column}>홈런</SortingTrigger>
    ),
  },
  {
    accessorKey: 'rbi',
    header: ({ column }) => (
      <SortingTrigger column={column}>타점</SortingTrigger>
    ),
  },
  {
    accessorKey: 'sb',
    header: ({ column }) => (
      <SortingTrigger column={column}>도루</SortingTrigger>
    ),
  },
  {
    accessorKey: 'bb',
    header: ({ column }) => (
      <SortingTrigger column={column}>볼넷</SortingTrigger>
    ),
  },
  {
    accessorKey: 'hp',
    header: ({ column }) => (
      <SortingTrigger column={column}>사구</SortingTrigger>
    ),
  },
  {
    accessorKey: 'kk',
    header: ({ column }) => (
      <SortingTrigger column={column}>삼진</SortingTrigger>
    ),
  },
  {
    accessorKey: 'slg',
    header: ({ column }) => (
      <SortingTrigger column={column}>장타율</SortingTrigger>
    ),
  },
  {
    accessorKey: 'bra',
    header: ({ column }) => (
      <SortingTrigger column={column}>출루율</SortingTrigger>
    ),
  },
];
