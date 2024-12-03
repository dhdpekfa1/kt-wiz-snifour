import { HomeIcon } from 'lucide-react';
import { IconRight } from 'react-day-picker';

interface BreadcrumbProps {
  paths: { key: string; label: string; isActive?: boolean }[];
}

const Breadcrumb = ({ paths }: BreadcrumbProps) => {
  return (
    <div className="flex flex-col items-end gap-2 m-4 mt-6 w-full">
      <span className="flex items-center justify-center gap-2 text-sm font-light text-gray-300">
        <HomeIcon />
        {paths.map((path) => (
          <span
            key={path.key}
            className={`flex items-center ${
              path.isActive ? 'text-[#ec0a0b]' : ''
            }`}
          >
            {path.label}
            {path.key !== paths[paths.length - 1].key && <IconRight />}
          </span>
        ))}
      </span>
      <div className="w-full h-[2px] bg-[#ec0a0b]" />
    </div>
  );
};

export default Breadcrumb;
