import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';
import { EtcGame } from '../../types/BoxScoreData';

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

const KeyRecordsCarousel = ({ data }: KeyRecordsTableProps) => {
  const seperatePlayers = (str: string): string[] => {
    const pattern = /[^\s]+\([^\)]+\)/g;
    return str.match(pattern) || [str];
  };
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {tableRows.map((row, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-start p-6">
                  <span className="text-3xl font-semibold">{row.label}</span>
                  {seperatePlayers(getRecordByHow(row.label, data)).map(
                    (player) => (
                      <div className="flex">
                        <img src="" alt="선수 사진" />
                        <span className="text-xl">{player}</span>
                      </div>
                    )
                  )}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export { KeyRecordsCarousel };
