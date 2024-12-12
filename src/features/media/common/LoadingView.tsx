import React from 'react';
import { SKELETON_IDS } from './skeleton';
import { cn } from '@/lib/utils';

type LoadingViewProps = {
  isLoading: boolean;
  fallback: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export const LoadingView = ({
  isLoading,
  fallback,
  children,
  className,
}: LoadingViewProps) => {
  if (isLoading) {
    return (
      <div className={cn('w-full transition-all', className)}>
        {SKELETON_IDS.map((id) => (
          <div key={id}>{fallback}</div>
        ))}
      </div>
    );
  }

  return <>{children}</>;
};
