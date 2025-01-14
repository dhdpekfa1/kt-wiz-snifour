import { PaginationList, PaginationSelect } from '@/features/media';
import { cn } from '@/lib/utils';

export type PaginationProps = {
  currentPage: number;
  total: number;
  limit?: number;
  showPages?: number;
  onChange: (page: number) => void;
  className?: string;
};

const Pagination = (props: PaginationProps) => {
  return (
    <>
      <div className={cn('lg:hidden', props.className)}>
        <PaginationSelect {...props} />
      </div>
      <div className={cn('hidden lg:block', props.className)}>
        <PaginationList {...props} />
      </div>
    </>
  );
};

export { Pagination };
