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
    { id: 'team', value: homeTeam || 'Home Team' },
    { id: 'name', value: homePitcher?.playerName || 'Home Player' },
    { id: 'era', value: homePitcher?.era },
    { id: 'games', value: homePitcher?.start },
    { id: 'wins', value: homePitcher?.w },
    { id: 'losses', value: homePitcher?.l },
    { id: 'saves', value: homePitcher?.sv },
    { id: 'holds', value: homePitcher?.hold },
    { id: 'winRate', value: homePitcher?.wra },
    { id: 'innings', value: homePitcher?.innDisplay },
    { id: 'hits', value: homePitcher?.hit },
    { id: 'homeRuns', value: homePitcher?.hr },
    { id: 'walks', value: homePitcher?.bb },
    { id: 'hitByPitch', value: homePitcher?.hp },
    { id: 'strikeouts', value: homePitcher?.kk },
    { id: 'runs', value: homePitcher?.r },
    { id: 'earnedRuns', value: homePitcher?.er },
  ];

  const visitPitcherStats = [
    { id: 'team', value: homeTeam || 'Visit Team' },
    { id: 'name', value: visitPitcher?.playerName || 'Visit Player' },
    { id: 'era', value: visitPitcher?.era },
    { id: 'games', value: visitPitcher?.start },
    { id: 'wins', value: visitPitcher?.w },
    { id: 'losses', value: visitPitcher?.l },
    { id: 'saves', value: visitPitcher?.sv },
    { id: 'holds', value: visitPitcher?.hold },
    { id: 'winRate', value: visitPitcher?.wra },
    { id: 'innings', value: visitPitcher?.innDisplay },
    { id: 'hits', value: visitPitcher?.hit },
    { id: 'homeRuns', value: visitPitcher?.hr },
    { id: 'walks', value: visitPitcher?.bb },
    { id: 'hitByPitch', value: visitPitcher?.hp },
    { id: 'strikeouts', value: visitPitcher?.kk },
    { id: 'runs', value: visitPitcher?.r },
    { id: 'earnedRuns', value: visitPitcher?.er },
  ];

  return (
    <div className="overflow-x-auto w-full">
      <Table className="mt-4 w-full">
        <TableHeader>
          <TableRow className="text-sm md:text-lg font-semibold bg-wiz-white bg-opacity-30 border-none">
            {tableHeaderRow.map((header) => (
              <TableHead key={header} className="text-center md:px-4">
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
              <TableCell
                key={stat.id}
                className="text-xs md:text-sm px-2 md:px-4"
              >
                {stat.value}
              </TableCell>
            ))}
          </TableRow>
          <TableRow
            className={`${
              visitTeam === 'KT' && 'bg-wiz-red bg-opacity-70 font-bold'
            } border-b-wiz-white border-opacity-10`}
          >
            {visitPitcherStats.map((stat) => (
              <TableCell
                key={stat.id}
                className="text-xs md:text-sm px-2 md:px-4"
              >
                {stat.value}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export { StartingPitcher };
