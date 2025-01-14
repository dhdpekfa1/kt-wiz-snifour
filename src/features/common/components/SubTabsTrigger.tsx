import { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { TabsTrigger } from '@radix-ui/react-tabs';

interface SubTabsTriggerProps {
  children: ReactNode;
  value: string;
  className?: string;
}

function SubTabsTrigger({ children, value, className }: SubTabsTriggerProps) {
  return (
    <TabsTrigger
      value={value}
      className={cn(
        'border-b-2 border-b-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-wiz-red  whitespace-nowrap px-2 py-1 text-[0.6rem]',
        'md:px-3 py-1.5 md:text-xs',
        'lg:px-6 lg:py-2.5 lg:text-sm',
        className
      )}
    >
      {children}
    </TabsTrigger>
  );
}

export { SubTabsTrigger };
