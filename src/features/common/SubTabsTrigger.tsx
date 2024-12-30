import { ReactNode } from 'react';

import { TabsTrigger } from '@radix-ui/react-tabs';

interface SubTabsTriggerProps {
  children: ReactNode;
  value: string;
}

function SubTabsTrigger({ children, value }: SubTabsTriggerProps) {
  return (
    <TabsTrigger
      value={value}
      className="border-b-2 border-b-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-wiz-red px-6 py-2.5 text-sm whitespace-nowrap"
    >
      {children}
    </TabsTrigger>
  );
}

export default SubTabsTrigger;
