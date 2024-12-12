import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import { TeamRank, TeamWinLose } from '../../types/watch-point';

const calculateWinRate = (win?: number, lose?: number): string => {
  const rate = (win ?? 0) / ((win ?? 0) + (lose ?? 0) || 1);
  return parseFloat(rate.toFixed(3)).toString();
};

const renderCells = (
  data: { id: string; value: string | number | undefined }[]
) => {
  return data.map((item) => (
    <TableCell key={item.id} className="text-center border border-[#ddd]">
      {item.value ?? '-'}
    </TableCell>
  ));
};

const MatchSummaryTable = ({
  homeTeamRank,
  visitTeamRank,
  homeTeamWinLose,
  visitTeamWinLose,
}: {
  homeTeamRank?: TeamRank;
  visitTeamRank?: TeamRank;
  homeTeamWinLose?: TeamWinLose;
  visitTeamWinLose?: TeamWinLose;
}) => {
  const headers = [
    { id: 'win', label: '승' },
    { id: 'loss', label: '패' },
    { id: 'draw', label: '무' },
    { id: 'winRate', label: '승률' },
    { id: 'vs', label: 'VS' },
    { id: 'opponentWin', label: '승' },
    { id: 'opponentLoss', label: '패' },
    { id: 'opponentDraw', label: '무' },
    { id: 'opponentWinRate', label: '승률' },
  ];

  const tableHeaderClass =
    'text-center text-wiz-white bg-wiz-red border border-[#ddd]';
  const tableRowClass = 'hover:bg-[#fefefe40] bg-wiz-black text-wiz-white';

  return (
    <Table className="w-full border-collapse whitespace-nowrap">
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead key={header.id} className={tableHeaderClass}>
              {header.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* 첫 번째 행: 시즌 성적 */}
        <TableRow className={tableRowClass}>
          {renderCells([
            { id: 'home-win', value: homeTeamRank?.win },
            { id: 'home-loss', value: homeTeamRank?.lose },
            { id: 'home-draw', value: homeTeamRank?.drawn },
            {
              id: 'home-wra',
              value: parseFloat(homeTeamRank?.wra || '0.000').toFixed(3),
            },
          ])}
          <TableCell className="text-center font-semibold border border-[#ddd]">
            시즌 성적
          </TableCell>
          {renderCells([
            { id: 'visit-win', value: visitTeamRank?.win },
            { id: 'visit-loss', value: visitTeamRank?.lose },
            { id: 'visit-draw', value: visitTeamRank?.drawn },
            {
              id: 'visit-wra',
              value: parseFloat(visitTeamRank?.wra || '0.000').toFixed(3),
            },
          ])}
        </TableRow>

        {/* 두 번째 행: 시즌 상대 전적 */}
        <TableRow className={tableRowClass}>
          {renderCells([
            { id: 'home-vs-win', value: homeTeamWinLose?.win },
            { id: 'home-vs-loss', value: homeTeamWinLose?.lose },
            { id: 'home-vs-draw', value: homeTeamWinLose?.drawn },
            {
              id: 'home-vs-wra',
              value: calculateWinRate(
                homeTeamWinLose?.win,
                homeTeamWinLose?.lose
              ),
            },
          ])}
          <TableCell className="text-center font-semibold border border-[#ddd]">
            시즌 상대 전적
          </TableCell>
          {renderCells([
            { id: 'visit-vs-win', value: visitTeamWinLose?.win },
            { id: 'visit-vs-loss', value: visitTeamWinLose?.lose },
            { id: 'visit-vs-draw', value: visitTeamWinLose?.drawn },
            {
              id: 'visit-vs-wra',
              value: calculateWinRate(
                visitTeamWinLose?.win,
                visitTeamWinLose?.lose
              ),
            },
          ])}
        </TableRow>

        {/* 세 번째 행: 시즌 순위 */}
        <TableRow className={tableRowClass}>
          <TableCell
            colSpan={4}
            className="text-center border border-[#ddd] font-bold"
          >
            {homeTeamRank?.rank ? `${homeTeamRank.rank} 위` : '-'}
          </TableCell>
          <TableCell className="text-center font-semibold border border-[#ddd]">
            시즌 순위
          </TableCell>
          <TableCell
            colSpan={4}
            className="text-center border border-[#ddd] font-bold"
          >
            {visitTeamRank?.rank ? `${visitTeamRank.rank} 위` : '-'}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export { MatchSummaryTable };
