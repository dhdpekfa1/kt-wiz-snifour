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
  teamName?: string;
  team?: string;
}

interface DataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  domain?: 'kt' | 'all';
}

function DataTable<TData>({ data, columns, domain }: DataTableProps<TData>) {
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
              <TableHead
                key={header.id}
                className="text-center whitespace-nowrap"
              >
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
              'border-b-wiz-white border-opacity-10 whitespace-nowrap',
              domain === 'all' &&
                ((row.original as TData & TypeHasTeamName).teamName === 'KT' ||
                  (row.original as TData & TypeHasTeamName).team === 'KT') &&
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
