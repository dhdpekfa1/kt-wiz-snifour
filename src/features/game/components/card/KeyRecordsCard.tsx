import { Card, CardContent, CardHeader } from '@/components/ui';
import usePlayerImage from '../../hooks/boxscore/usePlayerImage';
import { EtcGame } from '../../types/BoxscoreData';

interface KeyRecordsTableProps {
  data: EtcGame[] | undefined;
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
  const { playerImage, loading, error } = usePlayerImage('LG', '오스틴');

  if (!playerImage || loading) {
    return null;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const seperatePlayers = (str: string): string[] => {
    const pattern = /[^\s]+\([^\)]+\)/g;
    return str.match(pattern) || [str];
  };

  /*const setBorderImg = (name: string):string => {
    const data = fetchPlayerData();
    if(data.includes(name)) return borderimg
  }*/

  return (
    <div className="grid grid-cols-4 gap-4">
      {tableRows.map((row, index) => (
        <Card
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          className="hover:scale-105 transition-transform ease-in-out duration-500 rounded-lg"
        >
          <CardHeader className="text-xl font-semibold">{row.label}</CardHeader>
          <CardContent className="flex flex-col items-center justify-start">
            {seperatePlayers(getRecordByHow(row.label, data)).map((player) => (
              <div className="flex gap-2">
                {row.label !== '심판' && player.length > 0 ? (
                  <img
                    src={`${playerImage}`}
                    className="w-8 rounded-full"
                    alt={`${player}`}
                  />
                ) : (
                  ''
                )}
                <span className="text-base">{player}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default KeyRecordsCard;
