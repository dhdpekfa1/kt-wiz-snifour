import { TeamBatterRank } from '@/features/common/types/batters';
import { TeamPitcherRank } from '@/features/common/types/pitchers';
import { TeamStats } from '@/features/game/types/team-ranking';
import { ColumnDef } from '@tanstack/react-table';

// 팀 순위 - 팀 기록
export const teamRankColums: ColumnDef<TeamStats>[] = [
  {
    accessorKey: 'rank',
    header: '순위',
  },
  {
    accessorKey: 'teamName',
    header: '팀명',
  },
  {
    accessorKey: 'game',
    header: '경기',
  },
  {
    accessorKey: 'win',
    header: '승',
  },
  {
    accessorKey: 'lose',
    header: '패',
  },
  {
    accessorKey: 'drawn',
    header: '무',
  },
  {
    accessorKey: 'wra',
    header: '승률',
  },
  {
    accessorKey: 'gb',
    header: '게임차',
  },
  {
    accessorKey: 'continue1',
    header: '연속',
  },
  {
    accessorKey: 'run',
    header: '득점',
  },
  {
    accessorKey: 'r',
    header: '실점',
  },
];

// 팀 순위 - 투수 기록
export const teamPitcherRankColumns: ColumnDef<TeamPitcherRank>[] = [
  {
    accessorKey: 'teamName',
    header: '팀명',
  },
  {
    accessorKey: 'era',
    header: 'ERA',
  },
  {
    accessorKey: 'sh',
    header: '희타',
  },
  {
    accessorKey: 'sf',
    header: '희비',
  },
  {
    accessorKey: 'bb',
    header: '볼넷',
  },
  {
    accessorKey: 'ib',
    header: '고의4구',
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
    accessorKey: 'wp',
    header: '폭투',
  },
  {
    accessorKey: 'bk',
    header: '보크',
  },
  {
    accessorKey: 'r',
    header: '실점',
  },
  {
    accessorKey: 'er',
    header: '자책점',
  },
  {
    accessorKey: 'bs',
    header: '블론세이브',
  },
  {
    accessorKey: 'whip',
    header: 'WHIP',
  },
  {
    accessorKey: 'oavg',
    header: '피안타율',
  },
  {
    accessorKey: 'qs',
    header: 'QS',
  },
];

// 팀 순위 - 타자 기록
export const teamBatterRankColumns: ColumnDef<TeamBatterRank>[] = [
  {
    accessorKey: 'teamName',
    header: '팀명',
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
    accessorKey: 'bb',
    header: '볼넷',
  },
  {
    accessorKey: 'ib',
    header: '고의4구',
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
  {
    accessorKey: 'err',
    header: '실책',
  },
  {
    accessorKey: 'ops',
    header: 'OPS',
  },
  {
    accessorKey: 'hra',
    header: '타율',
  },
];
