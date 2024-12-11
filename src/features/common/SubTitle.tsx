import { cn } from '@/lib/utils';

const SubTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className={cn('flex items-center gap-2 text-white', className || '')}>
      <div className="h-4 w-1 bg-[#ec0a0b]" />
      <h4 className="font-semibold text-2xl">{title}</h4>
    </div>
  );
};

export default SubTitle;
