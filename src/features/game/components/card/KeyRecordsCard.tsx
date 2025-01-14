import { Card, CardContent } from '@/components/ui';
import { usePlayerImage } from '../../hooks/boxscore/usePlayerImage';
import { BoxscoreData, EtcGame } from '../../types/boxscore';

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

  const handlePlayerImage = (playerName: string) => {
    let team = '';
    const name = playerName.replace(/\d+/g, '').trim(); //이름에서 숫자 제외

    // 홈 팀 타자, 투수 확인
    if (
      data.hbatters.find((batter) => batter.name === name) ||
      data.vbatters.find((batter) => batter.name === name)
    ) {
      team = data.schedule.current.homeKey;
    }

    // 원정 팀 타자, 투수 확인
    if (
      data.vbatters.find((batter) => batter.name === name) ||
      data.vpitchers.find((pitcher) => pitcher.name === name)
    ) {
      team = data.schedule.current.visitKey;
    }

    const {
      data: playerImage,
      isLoading,
      isError,
      error,
    } = usePlayerImage(team, name);

    if (isLoading) return <div>Loading...</div>;
    if (isError || !playerImage) {
      console.log(error?.message);
      return (
        <img
          src={undefined}
          alt={name}
          className="w-6 h-8 sm:w-7 sm:h-9 rounded-full"
        />
      );
    }

    return (
      <img
        src={playerImage}
        alt={name}
        className="w-6 h-8 sm:w-7 sm:h-9 rounded-full"
      />
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {tableRows.map((row) => (
        <Card
          key={row.label}
          className="hover:scale-105 transition-transform ease-in-out duration-500 rounded-lg"
        >
          <CardContent className="flex flex-col justify-start p-3 sm:p-4">
            <h1 className="md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">
              {row.label}
            </h1>
            {seperateRecords(getRecordByHow(row.label, data.etcgames)).map(
              (record) => (
                <div
                  className="flex gap-2 items-center"
                  key={`${row.label}-${record}`}
                >
                  {row.label !== '심판' && record.length > 0
                    ? handlePlayerImage(
                        record.substring(0, record.indexOf('('))
                      )
                    : ''}
                  {row.label === '결승타' ? (
                    <div className="sm:text-base flex flex-col">
                      <span className="text-sm sm:text-base">
                        {record.substring(0, record.indexOf('('))}
                      </span>
                      <span className="text-sm sm:text-base">
                        {record.substring(record.indexOf('('))}
                      </span>
                    </div>
                  ) : (
                    <span className="text-sm sm:text-base">{record}</span>
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

export { KeyRecordsCard };
