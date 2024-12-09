import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { getPageRange } from '../services/getPageRange';

type PaginationProps = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  showPages?: number;
  className?: string;
};

const PaginationWithThemeRed = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  showPages = 5,
  className,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const { start, end } = getPageRange(showPages, currentPage, totalPages);

  return (
    <Pagination className={className}>
      <PaginationContent>
        {/* 이전 페이지 */}
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(currentPage - 1)}
            className={
              currentPage === 1 ? 'pointer-events-none opacity-50' : ''
            }
          />
        </PaginationItem>

        {/* 첫 페이지 */}
        {start > 1 && (
          <>
            <PaginationItem>
              <PaginationLink onClick={() => onPageChange(1)}>1</PaginationLink>
            </PaginationItem>
            {start > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
          </>
        )}

        {/* 페이지 번호 */}
        {Array.from({ length: end - start + 1 }, (_, i) => start + i).map(
          (page) => (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => onPageChange(page)}
                className={cn(
                  'transition-colors duration-200',
                  currentPage === page
                    ? 'bg-wiz-red hover:bg-wiz-red/90'
                    : 'hover:bg-white/10'
                )}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        {/* 마지막 페이지 */}
        {end < totalPages && (
          <>
            {end < totalPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink onClick={() => onPageChange(totalPages)}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {/* 다음 페이지 */}
        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(currentPage + 1)}
            className={
              currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationWithThemeRed;
