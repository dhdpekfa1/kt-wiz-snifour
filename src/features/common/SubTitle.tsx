import { cn } from '@/lib/utils';

const SubTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'flex items-center gap-2 text-white text-base',
        'md:text-xl',
        'lg:text-2xl',
        className
      )}
    >
      <div className={cn('w-1 h-4 bg-[#ec0a0b]', 'md:h-5', 'lg:h-6')} />
      <h4 className="font-semibold">{title}</h4>
    </div>
  );
};

export default SubTitle;
