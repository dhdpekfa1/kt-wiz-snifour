import { useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';

import { OverallPitcherRank } from '@/features/common/types/pitchers';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { OverallBatterRank } from '@/features/common/types/batters';

type PlayerRank = OverallPitcherRank | OverallBatterRank;

interface PlayerRankingTableProps<T extends PlayerRank> {
  data: T[];
  columns: ColumnDef<T>[];
  domain: 'kt' | 'all';
}

function SortableTable<T extends PlayerRank>({
  data,
  columns,
  domain,
}: PlayerRankingTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <Table className="mt-4">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow
            key={headerGroup.id}
            className="text-base font-semibold bg-wiz-white bg-opacity-30 border-none"
          >
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id} className="text-center px-2">
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody className="text-center">
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row, index) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && 'selected'}
              className={cn(
                'text-center border-b-wiz-white border-opacity-10',
                domain === 'kt' &&
                  index < 3 &&
                  'bg-wiz-red bg-opacity-70 font-bold',
                domain === 'all' &&
                  row.original.teamName === 'KT' &&
                  'bg-wiz-red bg-opacity-80 font-bold text-white'
              )}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="px-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length}>결과가 없습니다.</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default SortableTable;
