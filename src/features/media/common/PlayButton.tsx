import { cn } from '@/lib/utils';
import { PlayIcon } from 'lucide-react';

const PlayButton = ({ className }: { className?: string }) => {
  return (
    <div className={cn('bg-wiz-red/80 rounded-lg p-2', className)}>
      <PlayIcon
        stroke="white"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 fill-wiz-white"
      />
    </div>
  );
};

export { PlayButton };
