import { cn } from '@/lib/utils';

type MediaLayoutProps = {
  header?: React.ReactNode;
  children: React.ReactNode;
};

const MediaLayout = ({ header, children }: MediaLayoutProps) => {
  return (
    <div className={cn('w-full bg-wiz-black relative mb-8')}>
      <section className={cn('w-full md:my-10 lg:mt-14')}>{header}</section>
      <section className={cn('w-full pb-14 text-wiz-white', 'md:pb-24')}>
        {children}
      </section>
    </div>
  );
};

export default MediaLayout;
