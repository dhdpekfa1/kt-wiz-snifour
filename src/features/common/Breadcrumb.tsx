import { PAGE_URLS } from '@/constants/urls';
import { HomeIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { IconRight } from 'react-day-picker';
import { useLocation } from 'react-router';

type UrlStructure = {
  name: string;
  sub?: { [key: string]: UrlStructure };
};
interface BreadcrumbProps {
  leftComponent?: ReactNode;
}

const getLabel = (paths: string[], currentPath: string) => {
  let current: { [key: string]: UrlStructure } = PAGE_URLS;
  for (const path of paths) {
    if (path !== currentPath && current[path].sub) {
      current = current[path].sub;
    } else if (path !== currentPath && !current[path].sub) {
      return null;
    } else {
      return current[path].name;
    }
  }
  return null;
};

const Breadcrumb = ({ leftComponent = null }: BreadcrumbProps) => {
  // url 파싱
  const { pathname } = useLocation();
  const paths = pathname.split('?')[0].split('/').slice(1);

  // 타자의 경우 pathname에 batter가 포함되지 않으므로 '타자'가 생략된다. 그러므로 추가한다.
  if (
    paths.includes('catcher') ||
    paths.includes('infielder') ||
    paths.includes('outfielder')
  ) {
    paths.splice(paths.length - 1, 0, 'batter');
  }

  // url 매핑
  const mappedPaths = [
    { key: 'home', label: 'Home', isActive: false },
    ...paths.map((path, index) => ({
      key: path,
      label: getLabel(paths, path),
      isActive: index === paths.length - 1,
    })),
  ];

  // url label이 null인 것 필터링
  const filteredPaths = mappedPaths.filter((path) => path.label);
  filteredPaths[filteredPaths.length - 1].isActive = true;

  return (
    <div className="flex flex-col gap-2 mt-6 mb-4 w-full">
      <div
        className={`flex items-center ${
          leftComponent ? 'justify-between' : 'justify-end'
        }`}
      >
        {leftComponent && (
          <div className="flex items-center gap-2">{leftComponent}</div>
        )}
        <span className="flex items-center text-sm font-light text-wiz-white">
          <HomeIcon className="mr-2 h-5" />
          {filteredPaths.map((path, index) => (
            <span
              key={path.key}
              className={`flex items-center ${
                path.isActive ? 'text-wiz-red' : ''
              }`}
            >
              {path.label as string}
              {index < filteredPaths.length - 1 && (
                <IconRight className="h-3 mx-2" />
              )}
            </span>
          ))}
        </span>
      </div>
      <div className="w-full h-[2px] bg-wiz-red" />
    </div>
  );
};
export default Breadcrumb;
