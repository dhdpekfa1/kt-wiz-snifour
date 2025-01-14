import { cn } from '@/lib/utils';

type LayoutProps = {
  header?: React.ReactNode;
  children: React.ReactNode;
};

const Layout = ({ header, children }: LayoutProps) => {
  return (
    <div className={cn('w-full bg-wiz-black relative mb-8')}>
      <section className={cn('w-full')}>{header}</section>
      <section className={cn('w-full text-wiz-white')}>{children}</section>
    </div>
  );
};

export { Layout };
