import { Progress } from '@/components/ui';

interface StatCardProps {
  header: string;
  value: string | number;
  progress: number;
}

function StatCard({ header, value, progress }: StatCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 md:gap-3 lg:gap-4 rounded-xl border border-wiz-red border-opacity-20 aspect-square">
      <p className="font-bold text-xs md:text-sm">{header}</p>
      <Progress value={progress} className="text-white w-[75%] h-1" />
      <p className="text-base md:text-lg lg:text-xl">{value}</p>
    </div>
  );
}

export { StatCard };
