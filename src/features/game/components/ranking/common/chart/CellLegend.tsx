import { cn } from '@/lib/utils';

function CellLegend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1">
      <div
        className={cn('rounded-full w-3 h-3', 'md:w-4 md:h-4', 'lg:w-5 lg:h-5')}
        style={{
          backgroundColor: color,
        }}
      />
      <p>{label}</p>
    </div>
  );
}

export { CellLegend };
