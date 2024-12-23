import { ColumnDef } from '@tanstack/react-table';

interface StartingPitcherData {
  team: string;
  playerName: string;
  era?: string;
  start?: number;
  w?: number;
  l?: number;
  sv?: number;
  hold?: number;
  wra?: string;
  innDisplay?: string;
  hit?: number;
  hr?: number;
  bb?: number;
  hp?: number;
  kk?: number;
  r?: number;
  er?: number;
}

export const startingPitcherColumns: ColumnDef<StartingPitcherData>[] = [
  { accessorKey: 'team', header: '팀' },
  { accessorKey: 'playerName', header: '이름' },
  { accessorKey: 'era', header: '평균자책점' },
  { accessorKey: 'start', header: '경기' },
  { accessorKey: 'w', header: '승' },
  { accessorKey: 'l', header: '패' },
  { accessorKey: 'sv', header: '세' },
  { accessorKey: 'hold', header: '홀' },
  { accessorKey: 'wra', header: '승률' },
  { accessorKey: 'innDisplay', header: '이닝' },
  { accessorKey: 'hit', header: '피안타' },
  { accessorKey: 'hr', header: '피홈런' },
  { accessorKey: 'bb', header: '볼넷' },
  { accessorKey: 'hp', header: '사구' },
  { accessorKey: 'kk', header: '삼진' },
  { accessorKey: 'r', header: '실점' },
  { accessorKey: 'er', header: '자책점' },
];
