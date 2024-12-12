import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import { Pitcher } from '@/features/game/types/watch-point';

interface StartingPitcherProps {
  homeTeam: string;
  visitTeam: string;
  homePitcher?: Pitcher;
  visitPitcher?: Pitcher;
}

const StartingPitcher = ({
  homeTeam = '',
  visitTeam = '',
  homePitcher,
  visitPitcher,
}: StartingPitcherProps) => {
  const tableHeaderRow = [
    '팀',
    '이름',
    '평균자책점',
    '경기',
    '승',
    '패',
    '세',
    '홀',
    '승률',
    '이닝',
    '피안타',
    '피홈런',
    '볼넷',
    '사구',
    '삼진',
    '실점',
    '자책점',
  ];
  const homePitcherStats = [
    homeTeam || 'home team',
    homePitcher?.playerName || 'home player',
    homePitcher?.era || 0,
    homePitcher?.start || 0,
    homePitcher?.w || 0,
    homePitcher?.l || 0,
    homePitcher?.sv || 0,
    homePitcher?.hold || 0,
    homePitcher?.wra || 0,
    homePitcher?.innDisplay || 0,
    homePitcher?.hit || 0,
    homePitcher?.hr || 0,
    homePitcher?.bb || 0,
    homePitcher?.hp || 0,
    homePitcher?.kk || 0,
    homePitcher?.r || 0,
    homePitcher?.er || 0,
  ];
  const visitPitcherStats = [
    visitTeam || 'visit eam',
    visitPitcher?.playerName || 'visit player',
    visitPitcher?.era || 0,
    visitPitcher?.start || 0,
    visitPitcher?.w || 0,
    visitPitcher?.l || 0,
    visitPitcher?.sv || 0,
    visitPitcher?.hold || 0,
    visitPitcher?.wra || 0,
    visitPitcher?.innDisplay || 0,
    visitPitcher?.hit || 0,
    visitPitcher?.hr || 0,
    visitPitcher?.bb || 0,
    visitPitcher?.hp || 0,
    visitPitcher?.kk || 0,
    visitPitcher?.r || 0,
    visitPitcher?.er || 0,
  ];

  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow className="text-lg font-semibold bg-wiz-white bg-opacity-30 border-none w-fit">
          {tableHeaderRow.map((header) => (
            <TableHead key={header} className="text-center">
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="text-center">
        <TableRow
          className={`${
            homeTeam === 'KT' && 'bg-wiz-red bg-opacity-70 font-bold'
          } border-b-wiz-white border-opacity-10`}
        >
          {homePitcherStats.map((stat) => (
            <TableCell key={stat} className="text-xs md:text-sm px-2 md:px-4">
              {stat}
            </TableCell>
          ))}
        </TableRow>
        <TableRow
          className={`${
            visitTeam === 'KT' && 'bg-wiz-red bg-opacity-70 font-bold'
          } border-b-wiz-white border-opacity-10`}
        >
          {visitPitcherStats.map((stat) => (
            <TableCell key={stat} className="text-xs md:text-sm px-2 md:px-4">
              {stat}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export { StartingPitcher };
