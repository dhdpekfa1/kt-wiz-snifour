import { Card, CardContent } from '@/components/ui';
import usePlayerImage from '../../hooks/boxscore/usePlayerImage';
import { BoxscoreData, EtcGame } from '../../types/BoxscoreData';

interface KeyRecordsTableProps {
  data: BoxscoreData;
}

export const tableRows = [
  { label: '결승타' },
  { label: '2루타' },
  { label: '실책' },
  { label: '도루' },
  { label: '도루자' },
  { label: '주루사' },
  { label: '병살타' },
  { label: '심판' },
];

const getRecordByHow = (how: string, data: EtcGame[] | undefined) => {
  const record = data?.find((game) => game.how === how);
  return record ? record.result : '';
};

function KeyRecordsCard({ data }: KeyRecordsTableProps) {
  const seperateRecords = (str: string): string[] => {
    const pattern = /[^\s]+\([^\)]+\)/g;
    return str.match(pattern) || [str];
  };

  const handlerPlayerImage = (name: string) => {
    let team: string | undefined;

    // 홈 팀 타자, 투수 확인
    if (
      data.hbatters.find((batter) => batter.name === name) ||
      data.vbatters.find((batter) => batter.name === name)
    ) {
      team = data.schedule.current.home;
    }

    // 원정 팀 타자, 투수 확인
    if (
      data.vbatters.find((batter) => batter.name === name) ||
      data.vpitchers.find((pitcher) => pitcher.name === name)
    ) {
      team = data.schedule.current.visit;
    }

    const { playerImage } = usePlayerImage(team, name);
    return (
      <img src={playerImage} alt={name} className="w-7 h-9 rounded-full" />
    );
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {tableRows.map((row, index) => (
        <Card
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          className="hover:scale-105 transition-transform ease-in-out duration-500 rounded-lg"
        >
          <CardContent className="flex flex-col justify-start">
            <h1 className="text-xl font-semibold mb-3">{row.label}</h1>
            {seperateRecords(getRecordByHow(row.label, data.etcgames)).map(
              (record) => (
                <div className="flex gap-2 items-center">
                  {row.label !== '심판' && record.length > 0
                    ? handlerPlayerImage(
                        record.substring(0, record.indexOf('('))
                      )
                    : ''}
                  {row.label === '결승타' ? (
                    <div className="text-base flex flex-col">
                      <span>{record.substring(0, record.indexOf('('))}</span>
                      <span>{record.substring(record.indexOf('('))}</span>
                    </div>
                  ) : (
                    <span>{record}</span>
                  )}
                </div>
              )
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default KeyRecordsCard;
