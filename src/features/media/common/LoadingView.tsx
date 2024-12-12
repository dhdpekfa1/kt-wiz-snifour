import React from 'react';
import { SKELETON_IDS } from './skeleton';
import { cn } from '@/lib/utils';

type LoadingViewProps = {
  isLoading: boolean;
  isError: boolean;
  fallback: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export const LoadingView = ({
  isLoading,
  isError,
  fallback,
  children,
  className,
}: LoadingViewProps) => {
  if (isLoading || isError) {
    return (
      <>
        {SKELETON_IDS.map((id) => (
          <div key={id} className={cn('w-full', className)}>
            {fallback}
          </div>
        ))}
      </>
    );
  }

  return <>{children}</>;
};
