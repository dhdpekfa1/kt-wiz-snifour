import { SeasonSummaryBase } from '@/features/player/types/detail';
import { ColumnDef } from '@tanstack/react-table';

export const seasonOneColumns: ColumnDef<SeasonSummaryBase>[] = [
  { accessorKey: 'era', header: '평균자책점' },
  { accessorKey: 'gamenum', header: '경기 수' },
  { accessorKey: 'wCg', header: '완투' },
  { accessorKey: 'sho', header: '완봉' },
  { accessorKey: 'w', header: '승' },
  { accessorKey: 'l', header: '패' },
  { accessorKey: 'sv', header: '세이브' },
  { accessorKey: 'hold', header: '홀드' },
  { accessorKey: 'wra', header: '승률' },
  { accessorKey: 'tugucount', header: '타자' }, // ? 중복?
  { accessorKey: 'tugucount', header: '투구 수' },
  { accessorKey: 'innDisplay', header: '이닝' },
  { accessorKey: 'hit', header: '피안타' },
  { accessorKey: 'hr', header: '피홈런' },
  { accessorKey: 'era', header: 'IP/G' }, // ? 무슨지표?
];
export const seasonTwoColumns: ColumnDef<SeasonSummaryBase>[] = [
  { accessorKey: 'sf', header: '희비' },
  { accessorKey: 'sh', header: '희타' },
  { accessorKey: 'bb', header: '볼넷' },
  { accessorKey: 'ib', header: '고의4구' },
  { accessorKey: 'hp', header: '사구' },
  { accessorKey: 'kk', header: '탈삼진' },
  { accessorKey: 'wp', header: '폭투' },
  { accessorKey: 'bk', header: '보크' },
  { accessorKey: 'r', header: '실점' },
  { accessorKey: 'er', header: '자책점' },
  { accessorKey: 'bs', header: '블론세이브' },
  { accessorKey: 'whip', header: 'WHIP' },
  { accessorKey: 'oavg', header: '피안타율' },
  { accessorKey: 'qs', header: 'QS' },
  { accessorKey: 'kbb', header: 'K/BB' },
];
