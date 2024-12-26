import { PAGE_URLS } from '@/constants/urls';
import { cn } from '@/lib/utils';
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
  let paths: string[] = pathname.split('?')[0].split('/').slice(1);

  // 타자의 경우 pathname에 batter가 포함되지 않으므로 '타자'가 생략된다. 그러므로 추가한다.
  if (
    paths.includes('catcher') ||
    paths.includes('infielder') ||
    paths.includes('outfielder')
  ) {
    paths = paths.reduce((acc: string[], path: string) => {
      // 'catcher', 'infielder', 'outfielder'가 나오면 그 앞에 'batter'를 추가
      if (['catcher', 'infielder', 'outfielder'].includes(path)) {
        acc.push('batter'); // 'batter' 추가
      }
      acc.push(path); // 현재 경로 요소 추가
      return acc;
    }, []);
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
    <div
      className={cn(
        'w-full mt-6 mb-4 pb-2 border-b-2 border-wiz-red flex items-center',
        leftComponent ? 'justify-between' : 'justify-end'
      )}
    >
      {leftComponent && (
        <div className="flex items-center gap-2">{leftComponent}</div>
      )}
      <span className="flex items-center font-light text-wiz-white">
        <HomeIcon className={cn('mr-1 h-3', 'lg:mr-2 lg:h-4')} />
        {filteredPaths.map((path, index) => (
          <span
            key={path.key}
            className={cn(
              'flex items-center text-xs',
              'lg:text-sm',
              path.isActive && 'text-wiz-red'
            )}
          >
            {path.label}
            {index < filteredPaths.length - 1 && (
              <IconRight className={cn('h-2 mx-1', 'lg:h-3 lg:mx-2')} />
            )}
          </span>
        ))}
      </span>
    </div>
  );
};
export default Breadcrumb;
