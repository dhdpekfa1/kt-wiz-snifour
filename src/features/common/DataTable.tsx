import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import { cn } from '@/lib/utils';

interface TypeHasTeamName {
  team: string;
}

interface DataTableProps<TData extends TypeHasTeamName> {
  data: TData[];
  columns: ColumnDef<TData>[];
  domain?: 'kt' | 'all';
}

function DataTable<TData extends TypeHasTeamName>({
  data,
  columns,
  domain,
}: DataTableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
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
              <TableHead key={header.id} className="text-center">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody className="text-center">
        {table.getRowModel().rows.map((row) => (
          <TableRow
            key={row.id}
            className={cn(
              'border-b-wiz-white border-opacity-10',
              domain === 'all' &&
                row.original.team === 'KT' &&
                'bg-wiz-red bg-opacity-70 border-b-wiz-red'
            )}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DataTable;
