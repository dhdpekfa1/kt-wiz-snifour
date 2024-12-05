import { HomeIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { IconRight } from 'react-day-picker';

interface BreadcrumbProps {
  paths: {
    key: string;
    label: string;
    isActive?: boolean;
  }[];
  leftComponent?: ReactNode;
}

const Breadcrumb = ({ paths, leftComponent = null }: BreadcrumbProps) => {
  return (
    <div className="flex flex-col gap-2 m-4 mt-6 w-full">
      <div
        className={`flex items-center ${
          leftComponent ? 'justify-between' : 'justify-end'
        }`}
      >
        {leftComponent && (
          <div className="flex items-center gap-2">{leftComponent}</div>
        )}
        <span className="flex items-center gap-2 text-sm font-light text-wiz-white">
          <HomeIcon />
          {paths.map((path) => (
            <span
              key={path.key}
              className={`flex items-center ${
                path.isActive ? 'text-wiz-red' : ''
              }`}
            >
              {path.label}
              {path.key !== paths[paths.length - 1].key && <IconRight />}
            </span>
          ))}
        </span>
      </div>
      <div className="w-full h-[2px] bg-wiz-red" />
    </div>
  );
};
export default Breadcrumb;
