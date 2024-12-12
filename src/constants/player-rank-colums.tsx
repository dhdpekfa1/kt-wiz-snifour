import { OverallPitcherRank } from '@/features/common/types/Pitchers';
import SortingTrigger from '@/features/game/components/ranking/pitcher/SortingTrigger';
import { ColumnDef } from '@tanstack/react-table';

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
