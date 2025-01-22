import { cn } from '@/lib/utils';

const Category = ({ catetory }: { catetory: string }) => {
  return (
    <span
      className={cn(
        'text-xs px-3 py-1.5 bg-wiz-red/80 rounded-md text-wiz-white'
      )}
    >
      {catetory}
    </span>
  );
};

export { Category };
