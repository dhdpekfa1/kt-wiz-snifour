import { ReactNode } from 'react';

import { OverallBatterRank } from '@/features/common/types/batters';
import { OverallPitcherRank } from '@/features/common/types/pitchers';
import { Column } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

interface SortingTriggerProps {
  column:
    | Column<OverallPitcherRank, unknown>
    | Column<OverallBatterRank, unknown>;
  children: ReactNode;
}

function SortingTrigger({ column, children }: SortingTriggerProps) {
  return (
    <div
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      onKeyDown={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      className="flex items-center justify-center gap-1 hover:text-wiz-red transition-colors cursor-pointer"
    >
      {children}
      <ArrowUpDown className="w-3" />
    </div>
  );
}

export { SortingTrigger };
